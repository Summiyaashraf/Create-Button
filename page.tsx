'use client'
import React from "react"
import { Button } from "@/components/ui/button"
 export default function Home(){
  const handleClick =() => {
    alert ('👀👀')
  }
  return (
    
       <Button onClick={handleClick}>Click Me</ Button>

    
  
  )
 }
