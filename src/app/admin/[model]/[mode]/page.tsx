"use client";
import NovelEditor from "@/components/editor/noveleditor";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import parse from "html-react-parser";
import { Card, CardContent } from "@/components/ui/card";

export default function Crud({ params }: { params: { mode: string } }) {
  const [content, setContent] = useState<string | undefined>(undefined);
  switch (params.mode) {
    case "create":
      return (
        <div className="grid grid-cols-2 items-center gap-2 mt-10 p-2">
          <div className="flex flex-col p-2 gap-2 items-center">
            <h1>Editor</h1>
            <div className="w-full flex flex-row gap-2">
              <Input placeholder="Título" className="w-3/6"></Input>
              <Input type="" placeholder="Matéria" className="w-3/6"></Input>
            </div>

            <NovelEditor
              title="Posts mano"
              content={content}
              setContent={setContent}
            />
          </div>
          <div>
            <div className="flex flex-col p-2 gap-2 items-center -mt-16">
              <h1>Preview</h1>
              <Card className="w-full p-2">
                <CardContent className="prose lg:prose-xl p-2">
                  {content?.length != 0 ? parse(`${content}`) : "No content"}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    case "edit":
      return (
        <div>
          <h1>Edit</h1>
        </div>
      );
    case "delete":
      return (
        <div>
          <h1>Delete</h1>
        </div>
      );
    default:
      return (
        <div>
          <h1>404</h1>
        </div>
      );
  }
}
