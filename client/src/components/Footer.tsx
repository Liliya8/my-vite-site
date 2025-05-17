import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#hero" 
              className="text-2xl font-heading font-bold flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <span className="text-accent">&lt;</span>Dev<span className="text-accent">/&gt;</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>&copy; {currentYear} - {t("footer.copyright")}</p>
          </motion.div>
          
          <motion.div 
            className="mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#hero" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <ArrowUp size={16} className="mr-2" />
              <span>{t("footer.backToTop")}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
