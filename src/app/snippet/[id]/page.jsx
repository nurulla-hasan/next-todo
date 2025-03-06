import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import * as actions from "@/actions"


const detailsPage = async ({ params }) => {

    const id = parseInt(params.id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })

    const deleteSnippetsActions = actions.deleteSnippet.bind(null, snippet.id)

    return (
        <div className='flex flex-col gap-2'>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>{snippet?.title}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>

                    <form action={deleteSnippetsActions}>
                        <Button variant={"destructive"} type='submit'>Delete</Button>
                    </form>
                </div>
            </div>
            <pre className=' p-3 bg-gray-200 rounded border-gray-200'>
                <code>{snippet.code}</code>
            </pre>
        </div>
    );
};

export default detailsPage;