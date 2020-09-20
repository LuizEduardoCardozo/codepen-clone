import React from 'react';

import Editor from './components/Editor/index';

function App() {
  return (
    <>
    
      <div className="pane top-pane">

        <Editor />
        <Editor />
        <Editor />

      </div>

      <div className="pane">
        <iframe 
          src="" 
          title="output" 
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        >

        </iframe>
      </div>
    
    </>
  );
}

export default App;
