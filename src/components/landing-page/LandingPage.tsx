"use client";
import { Materia } from "@/app/admin/columns";
import { getDataM } from "@/components/table/dataProvider";
import { useState, useEffect } from "react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { BookMarkedIcon } from "lucide-react";

export default function StarterPage() {
  const [mounted, setMounted] = useState(false);
  const [mat, setMat] = React.useState<Materia[]>([]);
  useEffect(() => {
    setMounted(true);
    getDataM().then((materia) => {
      const values: Materia[] = [];
      materia.forEach((materia) => {
        values.push(materia);
      });
      setMat(values);
    });
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="min-h-screen overflow-hidden -mt-10">
        {/* Formas geométricas animadas */}

        {/* Conteúdo principal */}
        <main className="z-10 text-center px-4 flex items-center flex-col justify-center min-h-screen -mt-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 z-10">
            Bem-vindo ao meu Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto z-10">
            Onde você professor pode acompanhar um pouco mais do meu processo de
            aprendizado na sua matéria
          </p>
          <div className="flex flex-row absolute bottom-6 gap-6">
            {mat.map((materia) => {
              return (
                <Card key={materia.id} className="shadow-lg">
                  <CardContent className="min-h-[14rem] max-w-[16rem] h-full">
                    <div className="flex flex-col gap-2 justify-end p-2 items-center w-full h-full">
                      <div className="h-16 w-16">
                        <BookMarkedIcon
                          size={38}
                          className="text-muted-foreground"
                        />
                      </div>
                      <div className="h-12">
                        <p className="text-muted-foreground/60 text-md">
                          {materia.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
