import React, { useState } from 'react';

import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { BsArrowsAngleExpand } from 'react-icons/bs';
import { CgCompressRight } from 'react-icons/cg';

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
                    type="button"
                    className="btn-expand-collapse" 
                    onClick={() => setCollapsed(prevState => !prevState)}
                >
                    
                    {collapsed 
                        ? <BsArrowsAngleExpand /> 
                        : <CgCompressRight />
                    }

                </button>
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