import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Porto = () => {
    const [currentImageIndexes, setCurrentImageIndexes] = useState({});

    const projects = [
        {
            id: 1,
            title: "WhatsApp Bot - Digiflazz H2H Integration",
            description: "A WhatsApp bot that automates PPOB services such as mobile credit, data packages, electricity tokens, and bill payments. The bot is integrated with the Digiflazz H2H API, enabling real-time transactions, balance checking, and instant status updates directly through WhatsApp. This project highlights expertise in chatbot development, API integration, and payment automation.",
            technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            images: [
                "https://fastopbot.my.id/foto/bot1.png",
                "https://fastopbot.my.id/foto/bot2.png"
            ],
            demoLink: "https://bot.fastopbot.my.id",
            codeLink: null
        },
        {
            id: 2,
            title: "Flutter PPOB Application with Digiflazz H2H Integration",
            description: "A cross-platform mobile application built with Flutter that provides PPOB (Payment Point Online Bank) services such as mobile credit, data packages, electricity tokens, game vouchers, and bill payments. The app integrates with Digiflazz H2H API to enable secure and real-time transactions.",
            technologies: ["Flutter", "MySQL", "PHP"],
            images: [
                "https://fastopbot.my.id/foto/app2.png"
            ],
            demoLink: null,
            codeLink: null
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Responsive portfolio website built with React and Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
            images: [
                "https://fastopbot.my.id/foto/porto.png",
                "https://fastopbot.my.id/foto/porto2.png"
            ],
            demoLink: "https://rizkijn123.github.io/portfolio",
            codeLink: "https://github.com/rizkijn123/portfolio"
        },

    ];

    const nextImage = (projectId, totalImages) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % totalImages
        }));
    };
    
    const prevImage = (projectId, totalImages) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    const setImageIndex = (projectId, index) => {
        setCurrentImageIndexes(prev => ({
            ...prev,
            [projectId]: index
        }));
    };

    return ( 
        <section id="porto" className="text-white pt-32 pb-96">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl pb-5">PORTFOLIO</div>   
                    <p className="max-w-[800px] text-center mx-auto text-gray-300 sm:text-lg md:text-xl">
                        Here are some of my recent projects that showcase my skills in web development, 
                        mobile apps, and backend technologies.
                    </p>      
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            currentImageIndex={currentImageIndexes[project.id] || 0}
                            nextImage={nextImage}
                            prevImage={prevImage}
                            setImageIndex={setImageIndex}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Porto;
