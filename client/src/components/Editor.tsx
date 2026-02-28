import Editor from "@monaco-editor/react";
import "../styles/_editor.scss";

interface SQLEditorProps {
    onRun: (query: string | undefined) => void
    query: string | undefined
    setQuery: (value: string | undefined) => void
}

const SQLEditor = ({ onRun, query, setQuery }: SQLEditorProps) => {

    return (
        <div className="main">
            <Editor
                height="400px"
                defaultLanguage="sql"
                value={query}
                theme="vs-dark"
                onChange={(value) => setQuery(value)}
                options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: "on",
                    scrollBeyondLastLine: false,

                }}
            />

            <button onClick={() => onRun(query)} className="run-btn">
                Run Query
            </button>
        </div>
    );
};

export default SQLEditor;