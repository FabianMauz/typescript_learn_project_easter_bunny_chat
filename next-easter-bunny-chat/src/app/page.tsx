'use client' // https://nextjs.org/docs/app/building-your-application/rendering/client-components

import { Catamaran } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from 'react'

interface Cat {
    name: String,
    image: any
}

export default function Home() {

    const [count, setCount] = useState<number>(0)
    const [cat, setCat] = useState<Cat>()

    async function fetchCat() {
        const response = await fetch('https://cataas.com/cat/gif')
        const blob = await response.blob()
        const cat: Cat = { name: 'cat', image: URL.createObjectURL(blob) }
        setCat(cat)

        URL.createObjectURL(blob)
        console.log(cat)
    }

    useEffect(() => {
        fetchCat();
    }, []);

    if (cat != undefined) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                {/* <img alt="home" src={ cat.image }></img> */}
                <Image
                    src={cat.image}
                    width={500}
                    height={500}
                    alt="Image of a cat"
                />
            </main>
        )
    }
}
