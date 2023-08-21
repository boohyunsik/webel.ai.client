"use client";

import { useSearchParams } from "next/navigation";
import { apolloClient } from "@/app/layout";
import { projectQuery } from "@/core/query/project";
import { projectDetail } from "@/core/state/project";
import { useReactiveVar } from "@apollo/client";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get(`id`);
  const data = useReactiveVar(projectDetail);
  apolloClient.query({ query: projectQuery(id) }).then((response) => {
    console.log(response.data.project[0]);
    projectDetail(response.data.project[0]);
  });
  return (
    <>
      <div>{data.hash}</div>
      <div>{data.title}</div>
      <div>{data.introduction}</div>
    </>
  );
}
