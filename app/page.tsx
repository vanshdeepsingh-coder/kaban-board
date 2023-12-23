'use client'

import "./globals.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import {useState} from "react"

export default function Home() {
  const [value,setValue]=useState("Status");
  return (
    <>
    <Navbar setValue={setValue}/>
    <Content value={value}/>
    </>
  )
}
