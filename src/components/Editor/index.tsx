import React, { useState } from 'react';

import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import './styles.css';

interface EditorProps {
    displayNome: String,
    language: String,
    handleChange: any,
    value: any,
}

export default function Editor( props: EditorProps ) {
    
    const { displayNome, language, handleChange, value } = props;

    const [collapsed, setCollapsed] = useState(false);

    const editorClass = `editor-container ${collapsed ? 'collapsed' : ''}`;

    return (
        <div className={editorClass}>
            <div className="editor-title">
                { displayNome }
                <button
                    onClick={() => setCollapsed(prevState => !prevState)}
                >O/C</button>
            </div>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: "material",
                        lineNumbers: true,
                    }}
                >

                </ControlledEditor>
        </div>
    )

}