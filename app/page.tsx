"use client"

import Image from 'next/image'
import {useQuery} from "@apollo/client";
import {projectDetailQuery, projectsQuery} from "@/query/project";

export default function Home() {
    const result1 = useQuery(projectsQuery);

    if (result1.loading) {
        return <h2>loading...</h2>
    }

    if (result1.error) {
        return (
            <h1>error: {result1.error.message}</h1>
        )
    }

    console.log(result1.data);
    if (result1.data != null) {
        console.log(result1.detail)
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {

        }
    </main>
  )
}
