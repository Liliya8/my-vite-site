import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Service } from "@/data/services";
import { Code, MessageSquareDot, Palette } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as keyof typeof service.title;
  
  // Fallback to English if translation is not available
  const safeLanguage = (currentLanguage in service.title) ? currentLanguage : "en";

  // Determine which icon to display
  const getIcon = () => {
    switch (service.icon) {
      case "code":
        return <Code size={32} />;
      case "telegram":
        return <MessageSquareDot size={32} />;
      case "palette":
        return <Palette size={32} />;
      default:
        return <Code size={32} />;
    }
  };

  return (
    <Card className="bg-white h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-primary-100 text-primary rounded-lg flex items-center justify-center mb-6">
          {getIcon()}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">
          {service.title[safeLanguage]}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {service.description[safeLanguage]}
        </p>
        
        <ul className="space-y-2 mb-6">
          {service.items[safeLanguage].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, index) => (
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
