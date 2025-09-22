import React from "react";
import jae from "../assets/jae.jpg"

const Hero = () => {

    return ( 
    <section id="home" className="text-white h-screen">
        <div className="max-w-[800px] mt-[-96px] mb-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold pb-5 sm:text-2xl md:text-3xl lg:text-4xl">PORTFOLIO RIZKI JAELANI NUGRAHA</p>
        <div className="flex items-center gap-x-6 justify-center pb-5">
          <img src={jae} className="size-48 h-full rounded-lg"   alt=""/>
          </div>
        <h1 className="font-bold sm:text-xl md:text-1xl lg:text-2xl">Helo, My Name RIZKI JAELANI NUGRAHA</h1>
        </div>
    </section>
    )
}
export default Hero