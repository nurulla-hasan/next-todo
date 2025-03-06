import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react';

const createSnippet = () => {

    async function creatSnippet(formData) {
        "use server"
        const title = formData.get('title')
        const code = formData.get('code')

        const snippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })

        console.log("create snippet",snippet)
        redirect("/")
    }
    return (
        <form action={creatSnippet} className='max-w-sm'>
            <div className='flex flex-col gap-2'>
                <Label>Title</Label>
                <Input type="text" name="title" id="title" />
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <Label>Code</Label>
                <Input name="code" id="code" />
            </div>
            <Button className="mt-2">Add</Button>
        </form>
    );
};

export default createSnippet;