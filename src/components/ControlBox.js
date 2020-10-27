import React, { useContext } from 'react';
import controlup from './../icons/control-up-24px.svg';
import controldown from './../icons/control-down-24px.svg';
import controlright from './../icons/control-right-24px.svg';
import controlleft from './../icons/control-left-24px.svg';
import controlfill from './../icons/control-fill-24px.svg';
// import controlredo from './../icons/control-redo-24px.svg';
// import controlundo from './../icons/control-undo-24px.svg';
import controldelete from './../icons/control-delete-24px.svg';
import { QuestionContext } from './../context/Questions';
import './ControlBox.css';

function ControlBox() {

  const { setAnswer, addAnswer } = useContext(QuestionContext);

  const handleDelete = () => {
    return setAnswer([]);
  }

  const handleUp = () => {
    return addAnswer("up");
  }

  const handleRight = () => {
    return addAnswer("right");
  }

  const handleDown = () => {
    return addAnswer("down");
  }

  const handleLeft = () => {
    return addAnswer("left");
  }

  const handleFill = () => {
    return addAnswer("fill");
  }

  return (
    <div id="controls">
      {/* Actions Buttons*/}
      <div className="actions vertical-line box">
        {/* Delete */}
        <button className="control-vertical" id="delete" onClick={handleDelete}>
          <img src={controldelete} alt="delete" />
        </button>
        {/* Undo */}
        {/*         <button className="control-vertical" id="undo">
          <img src={controlundo} alt="undo" />
        </button> */}
        {/* Redo */}
        {/*         <button className="control-vertical" id="redo">
          <img src={controlredo} alt="redo" />
        </button> */}
      </div>
      {/* Directions Buttons*/}
      <div className="directions vertical-line box">
        <div className="top">
          {/* Up */}
          <button className="control-vertical" id="up" onClick={handleUp}>
            <img src={controlup} alt="up" />
          </button>
        </div>
        <div className="bottom">
          {/* Left */}
          <button className="control-vertical" id="left" onClick={handleLeft}>
            <img src={controlleft} alt="left" />
          </button>
          {/* Down */}
          <button className="control-vertical" id="down" onClick={handleDown}>
            <img src={controldown} alt="down" />
          </button>
          {/* Right */}
          <button className="control-vertical" id="right" onClick={handleRight}>
            <img src={controlright} alt="right" />
          </button>
        </div>
      </div>
      {/* Fill Button*/}
      <div className="fills vertical-line box">
        {/* Fill */}
        <button className="control-vertical" id="fill" onClick={handleFill}>
          <img src={controlfill} alt="fill" />
        </button>
      </div>
      {/* Next and Finish Button*/}
      <div className="next box">
        {/* Next */}
        <button className="primary-button" id="next">Bitir</button>
      </div>
    </div>
  )
}
export default ControlBox;