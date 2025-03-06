import EditSnippetsForm from '@/components/EditSnippetsForm';
import { prisma } from '@/lib/prisma';
import React from 'react';

const editPage = async ({params}) => {
    const id = parseInt(params.id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })
    if(!snippet) return <h1>Snippet Not Found</h1>
    return (
        <EditSnippetsForm snippet={snippet}></EditSnippetsForm>
    );
};

export default editPage;