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
    setPoetry(data);
  };

  useEffect(() => {
    fetchPoem();
  }, []);

  useEffect(() => {
    () => {
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
  }, [poetry?.content]);

  return (
    <>
      <Header />
      <NavBarPoem />
      {content.map((e) => {
        const stringed = `${e} <br/>`;
        return parse(stringed);
      })}
    </>
  );
}
