// import React from 'react';
import { HDSInputText } from "harmony-react";
function App() {
  return (
    <div>
      <h1 className="webpage_title">Welcome to my React's webpack template</h1>

      {/*
        EXPECTED ERRORS:

        TODO: RESOLVE THE FOLLOWING ERRORS:

        # Error 1

        react.development.js:210 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
        1. You might have mismatching versions of React and the renderer (such as React DOM)
        2. You might be breaking the Rules of Hooks
        3. You might have more than one copy of React in the same app
        See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

        #Error 2

        Uncaught TypeError: Cannot read properties of null (reading 'useState')
        at useState (react.development.js:1623:21)
        at Zp (index.esm.js:70:1158300)
        at renderWithHooks (react-dom.development.js:16305:18)
        at mountIndeterminateComponent (react-dom.development.js:20069:13)
        at beginWork (react-dom.development.js:21582:16)
        at HTMLUnknownElement.callCallback (react-dom.development.js:4164:14)
        at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
        at invokeGuardedCallback (react-dom.development.js:4277:31)
        at beginWork$1 (react-dom.development.js:27446:7)
        at performUnitOfWork (react-dom.development.js:26552:12)
    
      */}

      <HDSInputText />
    </div>
  );
}

export default App;
