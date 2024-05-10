"use client";

import { IconButton, Separator } from "@radix-ui/themes";
import { BubbleMenu, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";

import {
  AlignCenterHorizontallyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
} from "@radix-ui/react-icons";
import { Group } from "@radix-ui/themes/dist/cjs/components/context-menu.js";

const TipTap = () => {
  const editor = new Editor({
    extensions: [
      StarterKit,
      Text,
      Document,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Paragraph,
      Image.configure({
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose border border-red-300 focus:outline-none",
      },
    },
    content: "<p> oi som </p>",
  });
  return (
    <div className="flex flex-col justify-start min-w-full mx-auto ">
      <div>
        {editor && (
          <BubbleMenu
            editor={editor}
            className="bg-white overflow-hidden shadow-lg border-separate rounded-md flex"
          >
            <IconButton
              size="1"
              variant="outline"
              className="hover:bg-slate-200 p-2"
            >
              <HeadingIcon
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
              />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              size="1"
              variant="outline"
              className="hover:bg-slate-200 p-2"
            >
              <FontBoldIcon />
            </IconButton>
            <Separator orientation="vertical" size="1"></Separator>
            <IconButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              size="1"
              variant="outline"
              className="hover:bg-slate-200 p-2"
            >
              <FontItalicIcon />
            </IconButton>
            <Group>
              <IconButton className="hover:bg-slate-200 p-2">
                <AlignLeftIcon
                  onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                />
              </IconButton >
              <IconButton  className="hover:bg-slate-200 p-2">
                <AlignCenterHorizontallyIcon
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                />
              </IconButton >
              <IconButton className="hover:bg-slate-200 p-2 h-16">
                <AlignRightIcon
                  onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                />
              </IconButton>
            </Group>
          </BubbleMenu>
        )}
      </div>
      <EditorContent
        className="rounded-md shadow-md bg-white w-full"
        editor={editor}
      />
    </div>
  );
};

export default TipTap;
