import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

// ✅ Import image directly from src/assets
import image1 from "../assets/image.png";
import image2 from "../assets/portfolio.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Medicine-Recommendation-System",
    description:
      "Medicine Recommendation System – A machine-learning web app that predicts diseases from symptoms and suggests suitable medicines.",
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Pickle",
      "Bootstrap",
    ],
    image: image1, // ✅ using imported image
    liveUrl: "https://demo.com",
    githubUrl:
      "https://github.com/Adithiyan21/Medicine-Recommendation-System-Personalized-Medical-Recommendation-System-with-Machine-Learning-main",
    featured: true,
  },
  {
    id: 2,
    title: "3D Portfolio Website",
    description:
      "Interactive portfolio with Three.js animations, particle effects, and smooth transitions.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
    image: image2, // ✅ using imported image
    liveUrl: "",
    githubUrl: "https://github.com/Adithiyan21/sparkle-showcase-75",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="overflow-hidden card-3d glass border-border/20 hover:border-primary/20 transition-all duration-500 h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-pink-500/10 h-48">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover overlay with links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-card/80 backdrop-blur-sm hover:bg-card"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-card/80 backdrop-blur-sm hover:bg-card"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
        

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold group-hover:gradient-text-purple transition-all duration-300">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-purple"> Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse of my recent projects, showcasing modern web applications
            built with the latest technologies and a strong foundation from my
            Computer Science degree.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-center mt-12"
>
  <a
    href="https://github.com/Adithiyan21"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="lg" className="group">
      View All Projects
      <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
    </Button>
  </a>
</motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
