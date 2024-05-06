"use client";

import { FloatingMenu, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";

const TipTap = () => {
  const editor = new Editor({
    extensions: [Document, Paragraph, Text, Heading],
    content: `<p>Hello World! 🌎️</p>`,
  });
  return (
    <div className="w-full">
      <div>
        <button
          type="submit"
          onClick={() =>
            editor.chain().selectTextblockStart().toggleBold().run()
          }
          onSelect={() => editor.isActive("bold")}
        >
          {" "}
          Bold{" "}
        </button>
      </div>
      <EditorContent
        className=" border border-stone-400 rounded-md shadow-md h-1/2 bg-white "
        editor={editor}
      />
    </div>
  );
};

export default TipTap;
