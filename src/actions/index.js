"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

export const saveSnippet = async (id, code) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async (id) => {
    await prisma.snippet.delete({
        where:{id},
    })
    redirect('/')
}