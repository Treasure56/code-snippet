"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetsAction = actions.editSnippets.bind(null, snippet.id, code);

  return (
    <div className="py-5">
      {snippet.title}
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />

      <form action={editSnippetsAction}>
        <button type="submit" className="p-2 border rounded">
          save
        </button>
      </form>
    </div>
  );
}
