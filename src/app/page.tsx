import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippet = await db.snippet.findMany();

  const renderedSnippets = snippet.map((snippet) => {
    return (
      <div className="p-5">
        <Link
          href={`/snippets/${snippet.id}`}
          key={snippet.id}
          className="flex justify-between items-center p-2 border rounded"
        >
          <div className=""> {snippet.title}</div>
          <div className="">view</div>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className=" flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snppets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
