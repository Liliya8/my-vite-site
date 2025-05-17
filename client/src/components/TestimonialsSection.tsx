import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>
        
        <motion.div 
          className="testimonial-slider relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <TestimonialCard 
                  testimonial={testimonials[currentIndex]} 
                  currentLanguage={i18n.language}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="testimonial-arrow prev absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary focus:outline-none hidden md:flex"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="testimonial-arrow next absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary focus:outline-none hidden md:flex"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
