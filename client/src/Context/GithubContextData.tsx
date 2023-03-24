import { createContext, useReducer } from "react";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";
import { Navigate } from "react-router-dom";
import githubReducer from "./GithubReducer";


export type UserInterface = {
  [index: string]: string | undefined;
};

type GithubState = {
  users: UserInterface[];
  loading: boolean;
};

export interface GithubContextInterface {
  loading: boolean;
  users: UserInterface[];
  user: {};
  repos: UserInterface[];
  initialState: GithubState;
  getUsers: (value: string) => void;
  clearUsers: () => void;
  setLoading: () => void;
  getUser: (value: string) => void;
  getUserRepos: (value: string) => void;
}


const GithubContext = createContext<GithubContextInterface | null>(null);

type GithubContextProps = {
  children: React.ReactNode;
};

export const initialState = {
  users: [],
  user: {},
  loading: false,
  repos: [],
  showNav: true,
};

const GITHUB_URL = "http://localhost:8000/github";

export const GithubProvider = ({
  children,
}: GithubContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // GET users
  const getUsers = async (login: string) => {
    setLoading();

    console.log(login);

    const response = await fetch(`${GITHUB_URL}/search/users/${login}`);

    const { items } = await response.json();

    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: items,
    });
  };

  // GET user
  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.status === 404) {
      <Navigate to="/notfound" />;
    } else {
      const data = await response.json();
      dispatch({
        type: REDUCER_ACTION_TYPE.GET_USER,
        payload: data,
      });
    }
  };

  // GET user repositories
  const getUserRepos = async (login: string) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: "20",
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`
    );

    const data = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_REPOS,
      payload: data,
    });
  };

  // Dispatch function handles the action type and returns the right state from the reducer function
  const setLoading = () => dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });

  // Clear search results
  const clearUsers = () => dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_USERS });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        initialState,
        getUsers,
        clearUsers,
        setLoading,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
