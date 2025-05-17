import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquareDot, Github, Linkedin, Twitter, Instagram } from "lucide-react";

// Extend the schema with validation
const contactFormSchema = insertContactMessageSchema
  .extend({
    email: z.string().email({ message: "Please enter a valid email address" }),
  });

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Form definition
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Submit mutation
  const submitMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: t("contact.successToast.title"),
        description: t("contact.successToast.description"),
      });
    },
    onError: (error) => {
      toast({
        title: t("contact.errorToast.title"),
        description: error.message || t("contact.errorToast.description"),
        variant: "destructive",
      });
    },
  });

  // Submit handler
  function onSubmit(values: ContactFormValues) {
    submitMutation.mutate(values);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-6">{t("contact.form.title")}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.subject")}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? t("contact.form.submitting") : t("contact.form.submit")}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-primary-50 rounded-lg p-8 mb-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">{t("contact.info.title")}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">{t("contact.info.email.label")}</h4>
                    <a href="mailto:contact@example.com" className="text-gray-800 hover:text-primary transition-colors">contact@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary mr-4">
                    <MessageSquareDot size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">{t("contact.info.telegram.label")}</h4>
                    <a href="https://t.me/username" className="text-gray-800 hover:text-primary transition-colors">@username</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">{t("contact.info.location.label")}</h4>
                    <p className="text-gray-800">{t("contact.info.location.value")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-6">{t("contact.social.title")}</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-100 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
