import React, { useState, useEffect } from 'react';

import Editor from './components/Editor/index';

import './styles.css';

function App() {

  const [ html, setHtml ] = useState("");
  const [ javaScript, setJavaScript ] = useState("");
  const [ css, setCss ] = useState("");

  const mainSrc = `
    <html>
      <body>${html}</body>
      <styles>${css}<styles/>
    </html>
  `;

  return (
    <>
      <div className="pane top-pane">

        <Editor 
          displayNome="HTML" 
          language="xml" 
          value={html} 
          handleChange={
            ( editor: any, data: any, value: any ) => {
              setHtml(value);
            }
          }
          />

        <Editor 
          displayNome="CSS" 
          language="css" 
          value={css} 
          handleChange={
            ( editor: any, data: any, value: any ) => {
              setCss(value);
            }
          }
          />

          <Editor 
            displayNome="JS" 
            language="javascript" 
            value={javaScript} 
            handleChange={
              ( editor: any, data: any, value: any ) => {
                setJavaScript(value);
              }
            }
            />

      </div>

      <div className="pane">
        <iframe 
          srcDoc={mainSrc}
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
