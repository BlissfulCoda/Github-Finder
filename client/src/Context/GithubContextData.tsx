import { createContext, useReducer } from "react";
import { REDUCER_ACTION_TYPE } from "./GithubReducer";
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
  initialState: GithubState;

  setLoading: () => void;
}

// Create a new Context
const GithubContext = createContext<GithubContextInterface | null>(null);

// Defining our Prop Types
type GithubContextProps = {
  children: React.ReactNode;
};

// Defining our initial state for the reducer
export const initialState = {
  users: [],
  user: {},
  loading: false,
};

// 
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;


export const GithubProvider = ({
  children,
}: GithubContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Fetch users
  const searchUsers = async (id: string) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users/${id}`);

    const { items } = await response.json();
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_USERS,
      payload: items,
    });

    console.log(items)
  };

  searchUsers('blissfulcoda')

  // Dispatch function handles the action type and returns the right state from the reducer function
  const setLoading = () => dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        initialState,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
