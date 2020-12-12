import {State, Career} from "../types";

export const initialState: State = {
  loading: false,
  careerList: new Map()
};

interface Action {
  type: string;
  careerList: Map<string, Career>;
}

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "JOBS_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "JOBS_LIST_RECEIVED":
      return {
        ...state,
        loading: false,
        careerList: {
          ...action.careerList,
        },
      };
    case "JOBS_UPDATED":
      return {
        ...state,
        careerList: {
          ...state.careerList,
            ...action.careerList
        },
      };
    default:
      return state;
  }
};

export default reducer
