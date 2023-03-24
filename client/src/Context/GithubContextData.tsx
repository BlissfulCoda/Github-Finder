import { createContext, useReducer } from "react";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";
import { Navigate } from "react-router-dom";
import githubReducer from "./GithubReducer";

// Using an index signature helps us define an   Object's unknown structure by telling Typescript  that the object using this index signature has to have the key as a strong and value as a string or undefined (we could get back an undefined value at runtime).
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
  searchUsers: (value: string) => void;
  clearUsers: () => void;
  setLoading: () => void;
  fetchUser: (value: string) => void;
  getUserRepos: (value: string) => void;
}

// Create a new Context
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

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const GithubProvider = ({
  children,
}: GithubContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Fetch users
  const searchUsers = async (text: string) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users/${text}`);

    const { items } = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: items,
    });
  };

  // FETCH SINGLE USER
  const fetchUser = async (login: string) => {
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
        type: REDUCER_ACTION_TYPE.FETCH_USER,
        payload: data,
      });
    }
  };

  // FETCH A USER REPO
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

  const clearUsers = () => dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_USERS });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        initialState,
        searchUsers,
        clearUsers,
        setLoading,
        fetchUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
