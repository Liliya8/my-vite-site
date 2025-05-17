import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquareLock } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();

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

  return (
    <section
      id="hero"
      className="pt-28 pb-20 bg-gradient-to-br from-primary-50 to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="max-w-xl mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
              {t("hero.title")}
              <span className="text-primary">.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => handleNavClick("#portfolio")}
              >
                {t("hero.viewWork")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => handleNavClick("#contact")}
              >
                {t("hero.contact")}
              </Button>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="w-full lg:w-2/5 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Developer illustration with code and MessageSquareLock symbols"
              className="rounded-lg shadow-lg w-full"
            />
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-md hidden md:flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-accent text-3xl">
                <MessageSquareLock size={28} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {t("hero.telegramTitle")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("hero.telegramSubtitle")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
