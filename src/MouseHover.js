import React, { Component } from 'react';
import Counter from './Counter';

function MouseHover(props) {
  const { count, increment } = props;
  return (
    <div>
      <button onMouseOver={increment}>ClickMe</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter(MouseHover);
