import React, { useContext, useState, useEffect } from 'react';
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

  const { setAnswer, addAnswer, setTotalTime, question, answer } = useContext(QuestionContext);

  const [localTime, setLocalTime] = useState({ second: 0, minute: 0, hour: 0 })
  const [isActive, setIsActive] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [localAnswer, setLocalAnswer] = useState([]);
  const [finishClick, setFinishClick] = useState(false);

  useEffect(() => {
    console.log("useEffect START");
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setLocalTime({ ...localTime, second: localTime.second + 1 });
        if (localTime.second >= 59) {
          setLocalTime({ ...localTime, second: 0 });
          setLocalTime({ ...localTime, minute: localTime.minute + 1 });
          if (localTime.minute >= 59) {
            setLocalTime({ ...localTime, minute: 0 });
            setLocalTime({ ...localTime, hour: localTime.hour + 1 });
          };
        };

        setTotalTime(localTime);
      }, 1000);
    };
    console.log(localTime);
    return () => clearInterval(intervalId);

  }, [isActive, localTime]);

  const handleDelete = () => {
    setLocalAnswer([]);
    return setAnswer([]);
  }

  const handleUp = () => {
    setLocalAnswer([...localAnswer, setLocalAnswer("up")]);
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
  const matchAnswer = (serverAnswer, localAnswer) => {

    if (serverAnswer.length !== localAnswer.length) return false;

    for (var i = 0; i < serverAnswer.length; i++) {
      if (serverAnswer[i] !== localAnswer[i]) return false;
    }

    return true;
  };

  const startTimer = () => {
    setIsActive(!isActive);
    console.log("başladı");
    setFinishClick(false);
  }


  const stopTimer = () => {
    console.log("bitti");
    setIsActive(false);
    setTotalTime({ hour: 0, minute: 0, second: 0 });
    setCheckAnswer(matchAnswer(question.answer, answer));
    setFinishClick(true);
  }

  return (
    <div id="controls">
      {
        (answer.length > 0 && checkAnswer && localTime.second > 0)
          ?
          <div id="answer-success" className={finishClick ? "show" : "hide"}>You have successfully completed in {localTime.hour < 10 ? '0' + localTime.hour : localTime.hour}:{localTime.minute < 10 ? '0' + localTime.minute : localTime.minute}:{localTime.second < 10 ? '0' + localTime.second : localTime.second} time.</div>
          :
          <div id="answer-error" className={finishClick ? "show" : "hide"}>You failed in {localTime.hour < 10 ? '0' + localTime.hour : localTime.hour}:{localTime.minute < 10 ? '0' + localTime.minute : localTime.minute}:{localTime.second < 10 ? '0' + localTime.second : localTime.second} time.</div>
      }
      {
        !isActive ?
          <><button className="primary-button" onClick={startTimer}>Start</button></>
          :
          <>
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
              <button className="primary-button" id="next" onClick={stopTimer}>Bitir</button>
            </div></>
      }
    </div>
  )
}
export default ControlBox;