import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import PhotoUpload from "./PhotoUpload";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPhoto, setCurrentPhoto] = useState(profilePhoto);

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo Upload Component */}
            <PhotoUpload 
              currentPhoto={currentPhoto}
              onPhotoChange={setCurrentPhoto}
            />
            
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Decorative background shapes */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-sm" />
              <div className="absolute top-4 left-4 w-72 h-72 bg-gradient-to-r from-accent/20 to-pink-500/20 rounded-3xl blur-sm" />
              
              {/* Profile image */}
              <div className="relative w-full h-full bg-gradient-to-br from-card to-card/50 rounded-3xl glass border-2 border-border/20 overflow-hidden group hover:scale-105 transition-transform duration-500">
                <img 
                  src={currentPhoto} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="gradient-text-purple"> About Me</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
               I’m a Computer Science graduate and passionate Full Stack Developer who loves turning ideas into real, working solutions. 
               I enjoy creating applications that are functional, intuitive, and leave a lasting impact. Always curious and driven, I love learning new ways to solve problems and build meaningful digital experiences.
               
                
              </p>
              
              <p>
                It’s a way to build, solve, and inspire. 
               I’m always learning, exploring new technologies, and pushing my skills to create digital experiences that leave a lasting impact.

                
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-purple">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-purple">7+</div>
                <div className="text-sm text-muted-foreground">Paper Percentation and Hackathon participated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-purple">2</div>
                <div className="text-sm text-muted-foreground">Intenship Explore</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;