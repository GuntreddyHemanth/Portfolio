"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
    {url:"/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const topVarients = {
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: 45,
            backgroundColor:"rgb(255, 255, 255)"
        }
    }

    const centerVarients = {
        closed:{
          opacity: 1,
        },
        opened:{
            opacity:0,
        }
    }

    const bottomVarients = {
        closed:{
            rotate: 0,
        },
        opened:{
            rotate: -45,
            backgroundColor:"rgb(255, 255, 255)"
        }
    }

    const listVarients = {
        closed:{
            x:"100vw",
            y:"100vh",
        }, 
        opened: {
            x: 0,
            y:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            },
        },
    };

    const listItemVarient = {
        closed: {
            x:-10,
            opacity:0
        },
        opened: {
            x:0,
            opacity:1
        }
    }


    return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="hidden md:flex gap-4 w-1/3">
            {links.map((link) => (
                 <NavLink link={link} key={link.title}/>
            ))}
        </div>
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
            <Link 
               href="/"
               className="text-sm bg-black rounded-md p-1 font-semiblod flex items-center justify-center"
            >
                <span className="text-white mr-1">Lama</span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
            </Link>
        </div>
        <div className="hidden md:flex gap-4 w-1/3">
            <Link href="/">
                <Image src="/github.png" alt="" width={24} height={24}/>
            </Link>
            <Link href="/">
                <Image src="/dribbble.png" alt="" width={24} height={24}/>
            </Link>
            <Link href="/">
                <Image src="/instagram.png" alt="" width={24} height={24}/>
            </Link>
            <Link href="/">
                <Image src="/linkedin.png" alt="" width={24} height={24}/>
            </Link>
        </div>
        <div className="md:hidden">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
                <motion.div variants={topVarients} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                <motion.div variants={centerVarients} animate ={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded"></motion.div>
                <motion.div variants={bottomVarients} animate = {open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
            </button>
            {open && (
                <motion.div variants={listVarients} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link => (
                        <motion.div variants={listItemVarient} className="" key ={link.title}>
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    </div>
   )
}

export default Navbar