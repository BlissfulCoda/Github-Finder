import { initialState } from "./GithubContextData";

export const enum REDUCER_ACTION_TYPE {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_FEEDBACK,
  GET_FEEDBACK
}

type GithubReducerTypes = {
  type: REDUCER_ACTION_TYPE;
  payload?: [];
};

const githubReducer = (
  state: typeof initialState,
  action: GithubReducerTypes
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.GET_USERS:
      return { ...state, users: action.payload ?? [], loading: false };
    case REDUCER_ACTION_TYPE.SET_LOADING:
      return { ...state, loading: true };
    case REDUCER_ACTION_TYPE.CLEAR_USERS:
      return { ...state, users: [] };
    case REDUCER_ACTION_TYPE.GET_USER:
      return { ...state, user: action.payload ?? {}, loading: false };
    case REDUCER_ACTION_TYPE.GET_REPOS:
      return { ...state, repos: action.payload ?? [], loading: false };
    case REDUCER_ACTION_TYPE.SET_FEEDBACK:
      return {...state, feedback: action.payload }
    case REDUCER_ACTION_TYPE.GET_FEEDBACK:
      return {...state, feedback: action.payload ?? [], loading: false}
    default:
      return state;
  }
};

export default githubReducer;
