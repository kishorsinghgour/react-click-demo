import React, { Component } from 'react';
import Counter from './Counter';
import './style.css';

function MouseClick(props) {
  const { count, increment } = props;
  return (
    <div>
      <button className={'buttonClick'} onClick={increment}>
        ClickMe
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter(MouseClick);
