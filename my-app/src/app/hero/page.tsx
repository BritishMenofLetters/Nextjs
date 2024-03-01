"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '@/app/components/Button'
import ProductContainer from '@/app/components/container/ProductContainer'

function Hero() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24">
      <div className="grid gap-10 w-full sm:grid-cols-1 
                                         md:grid-cols-2 
                                         lg:grid-cols-3 
                                         xl:grid-cols-4
                                        2xl:grid-cols-5">
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/> 
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/> 
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/>
        <ProductContainer/> 
      </div>
        <Button variant="outline" size="lg" className="mt-4">
          Some button
        </Button>
        <Link href={`/`}> Home </Link>
    </main>
  )
}

export default Hero