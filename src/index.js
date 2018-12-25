import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';



import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const Home = () => {
  return(
    <div>
      <h2>Home</h2>
    </div>
  )
}


const About = () =>{
  return(
    <div>
      <h2>About</h2>
    </div>
  )
}


const Topics = () =>{
  return(
    <div>
      <h2>Topics</h2>
    </div>
  )
}

ReactDOM.render((


  <BrowserRouter>
      <div className="ui ">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      <hr/>
      <Route exact path="/"  component={Home} />
      <Route exact path="/about"  component={About} />
      <Route exact path="/topics"  component={Topics} />
      </div>
  </BrowserRouter>

),document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
