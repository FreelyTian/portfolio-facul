import React from "react";
import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";
import { Card, CardContent } from "@/components/ui/card";
import { Extension, extensions } from "@tiptap/react";
import { Image } from "@tiptap/extension-image";

type NovelEditorProps = {
  setContent: any;
  title: string;
  content: string | undefined;
};
export default function NovelEditor({
  setContent,
  content,
  title,
}: NovelEditorProps) {
  return (
    <Card className="w-full">
      <CardContent className="mt-6">
        <Editor
          defaultValue={{
            type: "doc",
            content: [],
            // content: content as JSONContent[] | undefined,
          }}
          onDebouncedUpdate={(editor?: TipTapEditor) => {
            setContent(editor?.getHTML());
          }}
          disableLocalStorage={false}
          className="w-full rounded-md border shadow-none"
        />
      </CardContent>
    </Card>
  );
}
