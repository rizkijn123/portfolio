import React from "react";

const ImageCarousel = ({ project, currentImageIndex, nextImage, prevImage, setImageIndex }) => {
    return (
        <div className="relative h-48 bg-gray-700 group overflow-hidden">
            <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            
            {/* Image Navigation */}
            {project.images.length > 1 && (
                <>
                    <button 
                        onClick={() => prevImage(project.id, project.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 
                                   bg-black bg-opacity-50 text-white p-1 rounded-full 
                                   opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300 hover:bg-opacity-70 
                                   z-20"
                    >
                        &#8249;
                    </button>
                    <button 
                        onClick={() => nextImage(project.id, project.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                   bg-black bg-opacity-50 text-white p-1 rounded-full 
                                   opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300 hover:bg-opacity-70 
                                   z-20"
                    >
                        &#8250;
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setImageIndex(project.id, index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    index === currentImageIndex ? 'bg-[#00df9a]' : 'bg-white bg-opacity-50'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
            
            {/* Demo/Code Links Overlay */}
            {(project.demoLink || project.codeLink) && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
                                opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex space-x-4">
                        {project.demoLink && (
                            <a 
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#00df9a] text-black px-4 py-2 rounded-md hover:bg-green-400 transition-colors font-medium"
                            >
                                Demo
                            </a>
                        )}
                        {project.codeLink && (
                            <a 
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium"
                            >
                                Code
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
