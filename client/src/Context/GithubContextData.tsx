import { createContext, useReducer, useEffect } from "react";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";
import { Navigate } from "react-router-dom";
import githubReducer from "./GithubReducer";

const BASE_URL = "http://localhost:8000/api"

export type UserInterface = {
  [index: string]: string | undefined;
};

export interface GithubContextInterface {
  loading: boolean;
  users: UserInterface[];
  user: {};
  feedback: UserInterface[];
  repos: UserInterface[];
  initialState: GithubState;
  getUsers: (value: string) => void;
  clearUsers: () => void;
  setLoading: () => void;
  getUser: (value: string) => void;
  getUserRepos: (value: string) => void;
  postFeedback: (value: string) => void;
  getFeedback: () => void;
}

type GithubState = {
  users: UserInterface[];
  loading: boolean;
  user: any;
  repos: any[];
  showNav: boolean;
  feedback: any[];
};

const GithubContext = createContext<GithubContextInterface | null>(null);

type GithubContextProps = {
  children: React.ReactNode;
};

export const initialState: GithubState = {
  users: [],
  user: {},
  loading: false,
  repos: [],
  showNav: true,
  feedback: [],
};

export const GithubProvider = ({
  children,
}: GithubContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    getFeedback();
  }, []);

  // GET users
  const getUsers = async (login: string) => {
    setLoading();

    const response = await fetch(`${BASE_URL}/github/search/users/${login}`);

    const { items } = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: items,
    });
  };

  // GET user
  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(`${BASE_URL}/github/users/${login}`);

    if (response.status === 404) {
      <Navigate to="/notfound" />;
      console.log(`User data didnt connect`);
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
      `${BASE_URL}/github/users/${login}/repos?${params}`
    );

    const data = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_REPOS,
      payload: data,
    });
  };

  // POST feedback
  const postFeedback = async (feedback: string) => {
    setLoading();

    feedback = feedback[0].toUpperCase() + feedback.slice(1);

    const response = await fetch(`${BASE_URL}/feedback`, {
      method: "POST",
      body: JSON.stringify({ feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_FEEDBACK,
      payload: data,
    });
  };

  // GET feedback
  const getFeedback = async () => {
    setLoading();
    const response = await fetch(`${BASE_URL}/feedback`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_FEEDBACK,
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
        postFeedback,
        getFeedback,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
