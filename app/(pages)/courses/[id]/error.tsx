/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center align-middle h-96 gap-10'>
            <h1 className='text-3xl font-mono font-bold text-primary text-center'>Oops! Something went wrong!</h1>
            <div>
                <p className='text-center font-mono'>Maybe we can't find the page you're looking for, or maybe you're offline.</p>
                <p className='text-center font-mono'>Please try again later.</p>
            </div>
        </div>
    )
}