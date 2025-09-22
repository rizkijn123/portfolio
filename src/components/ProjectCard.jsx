import React from "react";
import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({ project, currentImageIndex, nextImage, prevImage, setImageIndex }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            {/* Image Carousel */}
            <ImageCarousel 
                project={project} 
                currentImageIndex={currentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                setImageIndex={setImageIndex}
            />

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="bg-[#00df9a] bg-opacity-20 text-[#00df9a] px-3 py-1 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
