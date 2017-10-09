import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
/*
TITLE:
Write a Higher-Order Component from Scratch

DESCRIPTION:
Learn the proper way to write a higher-order component from scratch.
*/
const { Component } = React;

// A higher order component typically always has the same structure. It takes in a 
// BaseCompenent and it returns a component, in this case, it's a functional stateless 
// component. Then it renders out the BaseCompenent and it spreads -> ... the props in.
const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />;

const alwaysBob = overrideProps({ name: 'Bob' });

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  };

const User = ({ name }) =>
  <div className="User">{ name }</div>;

// Now, if we create another User and we pass our first User to our higher order component -> 
// hoc, it's not going to modify it in any way, but we will have a valid React component. 
// I just have to add the name. You see, the prop signature is identical to User, and it 
// renders exactly the same.
const User2 = alwaysBob(User);
const User3 = neverRender(User);

const App = () =>
  <div>
    <User name="Tim" />
    <User2 name="Joe" />
    <User3 name="Steve" />
  </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();