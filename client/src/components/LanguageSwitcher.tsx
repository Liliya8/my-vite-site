import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Language {
  code: string;
  label: string;
  flag: string;
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = [
    {
      code: "en",
      label: "English",
      flag: "🇬🇧"
    },
    {
      code: "ru",
      label: "Русский",
      flag: "🇷🇺"
    },
    {
      code: "tr",
      label: "Türkçe",
      flag: "🇹🇷"
    }
  ];

  const activeLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{activeLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{activeLanguage.label}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={cn(
                    "block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 flex items-center",
                    language.code === i18n.language ? "font-semibold text-primary" : "text-gray-700"
                  )}
                  role="menuitem"
                  onClick={() => changeLanguage(language.code)}
                >
                  <span className="mr-2 text-lg">{language.flag}</span>
                  <span>{language.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
