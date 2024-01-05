"use client";
import Link from "next/link";
import { useState } from "react";
import HamburguerIcon from "./hamburguerIcon";



export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed w-full z-10 items-center px-2 py-3 bg-gray-900 mb-3">
            <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                        href="#pablo"
                    >
                        Gift Me
                    </a>
                    <button
                        className="cursor-pointer px-2 rounded bg-stone-100 block lg:hidden"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <HamburguerIcon />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow justify-center items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <ul className="flex flex-col p-4 items-center md:p-2 mt-4 font-medium border border-gray-100 rounded-md bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/wishlists" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Wishlists</Link>
                        </li>
                        <li>
                            <Link href="/groups" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Groups</Link>
                        </li>
                        <li>
                            <Link href="/notifications" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notifications</Link>
                        </li>
                        <li>
                            <Link href="/account" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Account</Link>
                        </li>
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Log In / Register
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
} 