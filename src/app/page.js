"use client"
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  console.log("openhide");
  function handleClick(){
    console.log("openhide");
  }
  return (
    <>
    <h1>Find the flag hidden in this WEB Page</h1>
    <Image src="/one.png"
      width={100}
      height={100}
      alt="Picture of the author"/>
      <h2>click the button</h2>
      <button onClick={handleClick}>click me</button>
    </>
  )
}
