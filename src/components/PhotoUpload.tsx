import { motion } from "framer-motion";
import React from "react";

interface PhotoUploadProps {
  onPhotoChange: (photoUrl: string) => void;
  currentPhoto?: string;
  profilePath?: string; // e.g. "/images/profile.jpg"
}

const PhotoUpload = ({ onPhotoChange, currentPhoto, profilePath = "profile.jpg" }: PhotoUploadProps) => {
  // Immediately set the profile path when component mounts
  React.useEffect(() => {
    onPhotoChange(profilePath);
  }, [profilePath, onPhotoChange]);

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
   
    </motion.div>
  );
};

export default PhotoUpload;
