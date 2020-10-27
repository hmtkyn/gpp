import React from 'react';

function AnswerBox({ key, action, step, object, title }) {
  return (
    <div key={key} className="column">
      <div className={"icon icon-" + action}>
        <span>{step}.</span>
        <img src={object} alt={title} />
      </div>
    </div>
  )
}
export default AnswerBox