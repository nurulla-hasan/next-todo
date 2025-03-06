import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany()

  return (
    <div>
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="flex items-center justify-between my-12">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippet/new"><Button>Create</Button></Link>
      </div>
      {
        snippets.map((snippet) => (
          <div key={snippet.id} className="flex my-2 p-2 rounded-sm justify-between items-center bg-gray-200">
            <h1 className="text-sm font-bold">{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}><Button>View</Button></Link>
          </div>
        ))
      }
    </div>
  );
}
