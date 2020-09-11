import { 
    GET_HEADLINES, SET_CATEGORY } from '../types';
  
  export default ( state, action ) => {
    switch (action.type) {
      case GET_HEADLINES:
        return {
          ...state,
          headLines: action.payload
        };
      case SET_CATEGORY:
        return {
          ...state,
          currentCategory: action.payload
        };
      default: 
        return state;
    }
  };