import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, MessageSquareDot, Server, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* About image */}
          <motion.div 
            className="w-full md:w-2/5 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Professional developer portrait" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          <div className="w-full md:w-3/5">
            <motion.h2 
              className="text-3xl font-heading font-bold mb-6 flex items-center"
              variants={itemVariants}
            >
              <span className="w-10 h-1 bg-primary mr-4"></span>
              <span>{t("about.title")}</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              {t("about.description1")}
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-8"
              variants={itemVariants}
            >
              {t("about.description2")}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="text-primary mr-3">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">{t("about.skill1.title")}</h4>
                  <p className="text-sm text-gray-500">{t("about.skill1.description")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-3">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">{t("about.skill2.title")}</h4>
                  <p className="text-sm text-gray-500">{t("about.skill2.description")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-3">
                  <MessageSquareDot size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">{t("about.skill3.title")}</h4>
                  <p className="text-sm text-gray-500">{t("about.skill3.description")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-3">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">{t("about.skill4.title")}</h4>
                  <p className="text-sm text-gray-500">{t("about.skill4.description")}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center text-primary font-medium hover:text-primary-700 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              variants={itemVariants}
            >
              <span>{t("about.cta")}</span>
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
