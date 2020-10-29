import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UsersContext } from './../context/Users';
import { QuestionContext } from './../context/Questions';
import './Questions.css';
import Header from './../components/Header';
import Notices from './../components/Notices';
import QuestionBox from './../components/QuestionBox';
import ControlBox from './../components/ControlBox';
import RenderAnswer from './../components/RenderAnswer';

function Question() {

  const { user } = useContext(UsersContext);
  const { question, answer, setQuestion, totalTime } = useContext(QuestionContext);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios(
          '/api/questions.json',
        );
        const datas = result.data[0];
        return setQuestion(datas);
      } catch (error) {
        console.error(error)
      }
    }
    getData();

  }, [setQuestion]);

  return (
    <>
      <Header
        name={user.name}
        hour={totalTime.hour < 10 ? '0' + totalTime.hour : totalTime.hour}
        minute={totalTime.minute < 10 ? '0' + totalTime.minute : totalTime.minute}
        second={totalTime.second < 10 ? '0' + totalTime.second : totalTime.second}
      />
      <Notices />
      <div className="question">
        {/* Question */}
        <QuestionBox object={question.object} title={question.title} />
        {/* Answer */}
        <div className="answer" id="answer">
          <span className="label">Your Answer:</span>
          <div id="answer-area">
            {
              answer.length > 0 ? answer.map((e, i) => <RenderAnswer action={e} key={i} step={i + 1} />) : ""
            }
          </div>
        </div>
      </div>
      {/* Controls */}
      <ControlBox />
    </>
  );
}

export default Question;
