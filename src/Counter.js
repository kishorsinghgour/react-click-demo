import React, { useState } from 'react';

const Counter = (OriginalComp) => {
  return function () {
    const [state, setState] = useState({ count: 0 });
    const increment = () => {
      setState((prev) => {
        return {
          count: prev.count + 1,
        };
      });
    };
    return <OriginalComp count={state.count} increment={increment} />;
  };
};
export default Counter;
