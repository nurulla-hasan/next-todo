"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetsForm = ({ snippet }) => {
    const [code, setCode] = useState(snippet.code);

    const change = (value) => {
        setCode(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await saveSnippet(snippet.id, code);
        console.log("Save response:", response);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center justify-between mb-4">
                <h1 className="font-bold text-xl">Your Code Editor</h1>
                <Button type="submit">Save</Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                value={code}
                onChange={change}
            />
        </div>
    );
};

export default EditSnippetsForm;
