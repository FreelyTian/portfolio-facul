"use client";
import { Post } from "@/app/admin/columns";
import { getPost } from "@/components/table/dataProvider";
import { Card, CardContent } from "@/components/ui/card";
import { TrafficConeIcon, WorkflowIcon } from "lucide-react";
import React, { useState } from "react";
import parse from "html-react-parser";
import { HTMLContent } from "@tiptap/react";
import Editor from "@/components/editor/noveleditor";
import { useDebounceCallback } from "usehooks-ts";
import { EditorInstance } from "novel";

export default function PostViewMode({
  params,
}: {
  params: { materiaID: string };
}) {
  const materiaID = decodeURIComponent(params.materiaID);
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState<string>();
  const [content, setContent] = useState<HTMLContent>();
  const debouncedUpdates = useDebounceCallback(
    async (editor: EditorInstance) => {
      const html = editor.getHTML();
      setContent(html);
      console.log(html);
    },
    500
  );
  const classnames = {
    normal: "",
    error: "bg-alert animate-diagonalScroll bg-repeat ",
  };
  var className = error == "erro" ? classnames.error : classnames.normal;
  React.useEffect(() => {
    getPost(materiaID).then((post) => {
      if (post != undefined) {
        setError("sem erro");
      } else {
        setError("erro");
      }
      setPost(post as Post);
      setContent(post?.content.replaceAll('"', "") as string);
      // console.log(post?.content);
    });
  }, [materiaID]);

  return (
    <div className={`${className} min-h-screen `}>
      <div className="flex flex-col lg:mx-40 sm:mx-10 items-center min-h-screen">
        {error != "erro" ? (
          <div className="prose lg:prose-xl shadow-2xl min-h-screen min-w-full p-8">
            <p className="text-sm text-muted-foreground">
              Editado por último {post?.updatedAt.toLocaleDateString()} às{" "}
              {post?.updatedAt.toLocaleTimeString().slice(0, 5)}
            </p>
            <h1>{post?.title}</h1>
            {parse(`${content}`)}
          </div>
        ) : (
          <Card className="w-4/4; lg:w-1/4 lg:h-5/6 p-6 my-auto border-none ease-in-out delay-150 shadow-2xl animate-in slide-in-from-top-6 duration-1000">
            <CardContent className="rounded-md p-2 flex flex-col items-center text-muted-foreground text-center">
              {" "}
              <TrafficConeIcon size={88}></TrafficConeIcon>Ops! <br></br> Não
              temos um post pra essa matéria ainda!
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
