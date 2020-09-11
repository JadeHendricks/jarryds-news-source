import React, { useReducer } from 'react';
import axios from 'axios';
import BaseContext from './BaseContext';
import BaseReducer from './BaseReducer';
import { 
    GET_HEADLINES, SET_CATEGORY } from '../types';

const BaseState = props => {

  const initialState = {
    headLines: [],
    currentCategory: 'business'
  };

  const [state, dispatch] = useReducer(BaseReducer, initialState);

  const getHeadlines = async (category) => {
      console.log(category);
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=za&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`);
    dispatch({
        type: GET_HEADLINES,
        payload: response.data.articles
    });
    dispatch({
        type: SET_CATEGORY,
        payload: category
    });
    console.log(category);
  }

  return (
    <BaseContext.Provider value={{
        headLines: state.headLines,
        currentCategory: state.currentCategory,
        getHeadlines
    }}>
      {props.children}
    </BaseContext.Provider>
  )
}

export default BaseState;