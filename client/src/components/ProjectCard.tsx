import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as keyof typeof project.title;
  
  // Fallback to English if translation is not available
  const safeLanguage = (currentLanguage in project.title) ? currentLanguage : "en";

  return (
    <Card className="project-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative overflow-hidden h-52 group">
        <img 
          src={project.image} 
          alt={project.title[safeLanguage]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <div className="text-white text-sm font-semibold">
                {project.category[safeLanguage]}
              </div>
              <div className="flex space-x-2">
                <a 
                  href={project.demoLink} 
                  className="text-white hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </a>
                <a 
                  href={project.githubLink} 
                  className="text-white hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {project.title[safeLanguage]}
        </h3>
        <p className="text-gray-600 mb-4">
          {project.description[safeLanguage]}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
