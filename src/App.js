import React from 'react';
import './App.css';
import { UsersProvider } from './context/Users';
import { QuestionProvider } from './context/Questions';
import Login from './views/Login';
import Question from './views/Question';
import Timer from './views/Timer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <UsersProvider>
      <QuestionProvider>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/questions" component={Question} exact />
          <Route path="/timer" component={Timer} exact />
        </Switch>
      </QuestionProvider>
    </UsersProvider>
  );
}

export default App;
