// Course Page
import React from 'react'
import { Link, Divider } from '@nextui-org/react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import LecturesList from '@/components/LecturesList'

async function fetchCourseDetail(id: string) {
  const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/courses/${id}`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

export default async function Course({ params }: { params: { id: string } }) {
  const data = await fetchCourseDetail(params.id)

  return (
    <>
      <div className='flex flex-col lg:flex-row-reverse gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <video controls src={data.video} className='w-full'></video>
          <Link href={`/courses/${data.id}/lesson`} className='mx-auto'>Go to lesson <OpenInNewIcon className='ms-1' /></Link>
        </div>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-5'>{data.title}</h1>
          <p>{data.description}</p>
          <Divider className='my-7' />
          <LecturesList lectures={data.lectures} />
        </div>
      </div>
    </>
  )
}