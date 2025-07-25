"use client"
import Link from "next/link";


export const Home = () => {
    return(
        <div className="
            m-[12vw] 
            max-w-[900px] 
            font-mono 
            font-normal 
            text-[clamp(16px,4vw,40px)] 
            text-white
        ">
            <p className="mb-4">Hi, I'm Matthew Imanuel</p>
            <p className="mb-8">a fullstack dev in web2 & transition to web3</p>

            <div className="flex gap-8 flex-wrap">
                <Link
                    href="/Pages/contact"
                    className="
                        inline-block 
                        bg-transparent 
                        border-2 
                        border-white 
                        text-white 
                        py-4 px-8 
                        font-mono 
                        text-[clamp(14px,3vw,24px)] 
                        no-underline 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:bg-white 
                        hover:text-[#0f0f0f]
                    " 
                >
                    Contact
                </Link>
                <Link
                    href="/Pages/web2"
                    className="
                        inline-block 
                        bg-transparent 
                        border-2 
                        border-white 
                        text-white 
                        py-4 px-8 
                        font-mono 
                        text-[clamp(14px,3vw,24px)] 
                        no-underline 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:bg-white 
                        hover:text-[#0f0f0f]
                    " 
                >
                    Web2 Work
                </Link>
            </div>
        </div>
    )
}