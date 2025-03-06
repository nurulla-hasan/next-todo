import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import React from 'react';

const detailsPage = async ({ params }) => {

    const id = parseInt(params.id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })
    return (
        <div className='flex flex-col gap-2'>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>{snippet?.title}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <Button>Edit</Button>
                    <Button variant={"destructive"}>Delete</Button>
                </div>
            </div>
            <pre className=' p-3 bg-gray-200 rounded border-gray-200'>
                <code>{snippet.code}</code>
            </pre>
        </div>
    );
};

export default detailsPage;