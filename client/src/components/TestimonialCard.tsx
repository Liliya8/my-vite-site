import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  currentLanguage: string;
}

export default function TestimonialCard({ 
  testimonial, 
  currentLanguage 
}: TestimonialCardProps) {
  // Ensure we have a valid language key (fallback to English if needed)
  const safeLanguage = 
    (currentLanguage in testimonial.text) 
      ? (currentLanguage as keyof typeof testimonial.text) 
      : "en";

  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="text-primary opacity-50">
            <Quote size={30} />
          </div>
        </div>
        <p className="text-gray-700 mb-6 italic">
          "{testimonial.text[safeLanguage]}"
        </p>
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name[safeLanguage]} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name[safeLanguage]}</h4>
            <p className="text-sm text-gray-500">{testimonial.position[safeLanguage]}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
