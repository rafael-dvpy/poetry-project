"use client";
import Header from "@/Components/Header";
import NavBarPoem from "@/Components/NavBarPoem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

interface poetryInterface {
  content: [Array<string>];
  data: {
    poet: string;
    year: number;
    title: string;
    stanzas: number;
    lines: number;
  };
}

export default function PoemPage() {
  const query = usePathname() as string;
  const poem = query.slice(1);
  const [poetry, setPoetry] = useState<poetryInterface>();
  const [content, setContent] = useState<Array<String>>([]);

  const fetchPoem = async () => {
    const response = await fetch("/api/poem");
    const data = await response.json();
    setPoetry(data[0]);
  };

  useEffect(() => {
    fetchPoem();
  }, []);

  useEffect(() => {
    const filterPoetry = () => {
      const cont = poetry?.content;
      const arrayPushable: Array<String> = [];
      cont?.forEach((element) => {
        element.forEach((element) => {
          arrayPushable.push(element);
        });
        arrayPushable.push("<br/>");
      });
      setContent(arrayPushable);
    };
    filterPoetry();
  }, [poetry]);

  return (
    <>
      <Header />
      <NavBarPoem />
      <h2 className="text-xl text-center my-10 underline">
        {poetry?.data.title}
      </h2>
      <div className="w-full flex justify-center">
        <div>
          <p className="text-center">
            {content.map((e) => {
              const stringed = `${e} <br/>`;
              return parse(stringed);
            })}
          </p>
          <p className="text-right text-slate-200">
            {poetry?.data.poet}, {poetry?.data.year}
          </p>
        </div>
      </div>
    </>
  );
}
