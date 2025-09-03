"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
import ParticlesBackground from "../components/ParticlesBackground";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      title: "Contact Us",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    try {
      const serviceID = "service_k2y5mws";
      const templateID = "template_rhvzqqp";
      const publicKey = "Lxlz_SWgLhIM2OPmb";

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("✅ SUCCESS!", response.status, response.text);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ FAILED...", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resumeLink =
    "https://drive.google.com/file/d/1pRljlNM9geyVaDpDUVfi08WVQSlS0mjC/view?usp=sharing";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Particles */}
      <ParticlesBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Open to kickstarting my career with exciting opportunities — let’s connect!  
            I’d be proud to start my journey with your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-8 border-border/20">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" variant="hero" disabled={loading}>
                      {loading ? "Sending..." : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="glass p-8 border-border/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactItem icon={<Mail />} label="Email" value="aathim39@gmail.com" />
                <ContactItem icon={<Phone />} label="Phone" value="8072608649" />
                <ContactItem icon={<MapPin />} label="Location" value="Villupuram, TN" />
              </div>
            </Card>

            <Card className="glass p-8 border-border/20">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <SocialButton href="https://github.com/Adithiyan21" icon={<Github />} label="GitHub" />
                <SocialButton href="https://www.linkedin.com/in/adithiyan-m-1438a7375/" icon={<Linkedin />} label="LinkedIn" />
                <SocialButton href="mailto:aathim39@gmail.com" icon={<Mail />} label="Email Me" hero />
              </div>
            </Card>

            <div className="flex gap-4">
              <Button asChild variant="outline" size="lg" className="flex-1">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">{icon}</div>
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">{value}</p>
    </div>
  </div>
);

const SocialButton = ({ href, icon, label, hero }: { href: string; icon: React.ReactNode; label: string; hero?: boolean }) => (
  <Button variant={hero ? "hero" : "outline"} className="h-16 flex-col gap-2 group" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="h-6 w-6 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  </Button>
);

export default ContactSection;
