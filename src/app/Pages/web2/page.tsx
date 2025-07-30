"use client"
import Link from "next/link"
import Image from "next/image"

export default function Web2Page() {

    const projects = [
        {
        name: "Money Management",
        description:"App for management money with income feature and dispensing feature",        
        techStack: ["React.js", "TypeScript",],
        githubUrl: "https://github.com/Teachz77/Web-App-Money-Management",
        liveUrl: "https://web-app-money-management.vercel.app/",
        image: "/mockup1.png",
        imageAlt: "Web Money Management",
        },
        {
        name: "Notes App",
        description:"App for write a note in website",
        techStack: ["Next.js", "TypeScript", "Hono", "PostgreSQL"],
        githubUrl: "https://github.com/Teachz77/Notes-app-w-react",
        liveUrl: "https://hatznote.netlify.app/",
        image: "/mockup2.png",
        imageAlt: "Notes",
        },
    ];
    
    return (
        <div className="w-full min-h-screen bg-[#f5f5f5] text-black font-mono px-4 py-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">

                <div className="text-center mb-12">
                    <h1 className="text-5xl mt-4 mb-8 font-normal">
                        Web2 Projects
                    </h1>
                </div>

                <div className="grid gap-12 mb-12 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 p-8 border-2 border-black bg-transparent">
                            
                            {/* Kolom Gambar */}
                            <div className="aspect-w-4 aspect-h-3 flex items-center justify-center">
                                <Image
                                    src={project.image}
                                    alt={project.imageAlt}
                                    width={500}
                                    height={375}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Kolom Konten */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl md:text-3xl mb-4 font-normal">
                                    {project.name}
                                </h2>
                                <p className="text-sm leading-relaxed mb-6 opacity-80">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <h3 className="text-base mb-2 font-normal">
                                        Tech Stack:
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex} className="py-1 px-2 border border-black text-xs bg-transparent">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3 items-center">
                                        {/* Tombol GitHub */}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 py-2 px-4 border-2 border-black text-black no-underline text-xs transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            <span>GitHub</span>
                                        </a>

                                        {/* Tombol Live Demo */}
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2 px-4 border-2 border-black text-black no-underline text-xs transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                                        >
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href="/" className="flex items-center gap-2 border-2 border-black py-2 px-6 transition-colors hover:bg-black hover:text-white">
                    <span>←</span>
                    <span>Back to Home</span>
                </Link>

            </div>
        </div>
    )
}

