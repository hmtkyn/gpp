import React, { useReducer, createContext } from 'react';

// STATE
const initialState = {
  question: {
    id: "",
    object: "",
    title: "",
    answer: []
  },
  answer: [],
  totalTime: {
    second: 0,
    minute: 0,
    hour: 0
  }
}

// CONTEXT
export const QuestionContext = createContext(initialState);

// ACTIONS
const ACTIONS = {
  SET_ANSWER: "set_answer",
  ADD_ANSWER: "add_answer",
  SET_QUESTION: "set_question",
  SET_TOTALTIME: "set_totaltime"
}

// REDUCER
export const QuestionReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ANSWER:
      return {
        ...state,
        answer: action.payload
      }
    case ACTIONS.ADD_ANSWER:
      return {
        ...state,
        answer: [...state.answer, action.payload]
      }
    case ACTIONS.SET_QUESTION:
      return {
        ...state,
        question: action.payload
      }
    case ACTIONS.SET_TOTALTIME:
      return {
        ...state,
        totalTime: action.payload
      }
    default:
      return state;
  }
}

// PROVIDER
export const QuestionProvider = ({ children }) => {

  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  function setAnswer(answer) {
    dispatch({
      type: ACTIONS.SET_ANSWER,
      payload: answer
    })
  }

  function addAnswer(answer) {
    dispatch({
      type: ACTIONS.ADD_ANSWER,
      payload: answer
    })
  }

  function setQuestion(question) {
    dispatch({
      type: ACTIONS.SET_QUESTION,
      payload: question
    })
  }

  function setTotalTime(totalTime) {
    dispatch({
      type: ACTIONS.SET_TOTALTIME,
      payload: totalTime
    })
  }

  return (
    <QuestionContext.Provider value={{
      answer: state.answer,
      setAnswer,
      addAnswer,
      question: state.question,
      setQuestion,
      totalTime: state.totalTime,
      setTotalTime
    }}>
      {children}
    </QuestionContext.Provider>
  )

}