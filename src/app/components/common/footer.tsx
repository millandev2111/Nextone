'use client'

import { LogoIcon } from "@/assets/icons/logo"

export function Footer () {
    return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <LogoIcon className="size-8 stroke-violet-800" />
                        <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">Nextone</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-600 sm:text-center">© 2024 <a href="#" >Nextone™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
