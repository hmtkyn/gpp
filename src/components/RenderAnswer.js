import React from 'react';

import AnswerBox from './AnswerBox';
import iconup from './../icons/icon-up-24px.svg';
import iconright from './../icons/icon-right-24px.svg';
import icondown from './../icons/icon-down-24px.svg';
import iconleft from './../icons/icon-left-24px.svg';
import iconfill from './../icons/icon-fill-24px.svg';

const RenderAnswer = ({ action, step }) => {
  switch (action) {
    case "fill":
      return <AnswerBox object={iconfill} action={action} step={step} title="fill" />;
    case "up":
      return <AnswerBox object={iconup} action={action} step={step} title="up" />;
    case "right":
      return <AnswerBox object={iconright} action={action} step={step} title="right" />;
    case "down":
      return <AnswerBox object={icondown} action={action} step={step} title="down" />;
    case "left":
      return <AnswerBox object={iconleft} action={action} step={step} title="left" />;
    default:
      return "";
  }
}

export default RenderAnswer;