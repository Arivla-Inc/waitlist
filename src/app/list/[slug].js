import React from 'react'
import { useRouter } from 'next/navigation'


export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}