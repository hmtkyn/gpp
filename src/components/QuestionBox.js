import React from 'react';

const QuestionBox = ({ object, title }) => {
  return (
    <div className="question-area">
      {/* Object */}
      <div className="object">
        <img src={object} alt={title} />
      </div>
      {/* Title */}
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default QuestionBox;