import { useRouter } from 'next/router'
import React from 'react'
export default function Project() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>Project {router.query.project}</div>
  )
}
