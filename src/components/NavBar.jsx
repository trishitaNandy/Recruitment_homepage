import React, { useState } from 'react'
import {FaBars, FaTimes, faBars, faTimes} from "react-icons/fa";
import {Link} from 'react-scroll'

//portfolio=projects
//experience=skills
const NavBar = () => {
    const [nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link: 'home',
            style: 'p-3'
        },
        {
            id:2,
            link: 'about',
            style: 'p-3'
        },
        {
            id:3,
            link: 'login',
            style: 'p-3'
        },
        {
            id:4,
            link: 'signup',
            style: 'rounded-3xl bg-violet-800 text-white p-3'
        }
    ];

    
  return (
    <div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-violet-950 fixed'>
        <div >
            <h1 className='text-5xl  ml-2 '>FirstHire</h1>
        </div>
        <ul className='hidden md:flex'>


            {links.map(({id,link,style})=>(
                <li 
                    key={id} 
                    className={'px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'+" "+style}>
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                </li>
            ))}

            
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-violet-950 text-gray-200'>
            {links.map(({id,link})=>(
                <li 
                    key={id} 
                    className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                            {link}
                        </Link>
                </li>
            ))}
            
                
        </ul>
        )}

        
    </div>
  )
}

export default NavBar