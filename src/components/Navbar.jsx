import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(true)
    const handleNav = ()=>{
        setNav(!nav)
        
    }

    return ( 
    <section className="flex sticky top-0 bg-black justify-between items-center h-24  px-4 text-white ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">PORTFOLIO</h1>
        <ul className="hidden md:flex">
            <li className="p-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><a href="#home">Home</a></li>
            <li className="p-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><a href="#desc">Description</a></li>
            <li className="p-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><a href="#porto">Portfolio</a></li>
            <li className="p-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r boder-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">PORTOFOLIO</h1>
            <ul className="uppercase p-4">
            <li className="p-4"><a href="#home">Home</a></li>
            <li className="p-4"><a href="#desc">Description</a></li>
            <li className="p-4 "><a href="#porto">Portfolio</a></li>
            <li className="p-4 "><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </section>
    )
}
export default Navbar