import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Galerey.module.scss";
import { APP_URL } from "../../types";

interface GalleryProps {
  primaryImages?: string[];
  secondaryImages?: string[];
  vertical?: string[];
  last?: string[];
}

export default function Gallery({
  primaryImages,
  secondaryImages,
  vertical,
  last,
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains(classes.overlay)) {
      setSelectedImage(null);
    }
  };

  const getVertical = () => {
    return (
      <div className={classes.verticalWrapper}>
        {vertical!.map((img, index) => (
          <div
            key={index}
            className={classes.verticalItem}
            onClick={() => {
              if (!isMobile) setSelectedImage(img);
            }}
          >
            <img src={`${APP_URL}${img}`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
    
        {primaryImages && (
          <div className={classes.primary}>
            {primaryImages.map((img, index) => (
              <img
                src={`${APP_URL}${img}`}
                alt={`Image ${index}`}
                className={classes.primaryImg}
              />
            ))}
          </div>
        )}


      <div className={classes.someWrapper} style={{ gap: `${vertical && vertical.length >= 1 ? "16px" : "0px" }`}}>
        {vertical && vertical.length < 2 && getVertical()}

        {secondaryImages && (
          <div className={classes.masonry}>
            {secondaryImages.map((img, index) => (
              <div
                key={index}
                className={classes.item}
                onClick={() => {
                  if (!isMobile) setSelectedImage(img);
                }}
              >
                <img src={`${APP_URL}${img}`} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {vertical && vertical.length > 1 && getVertical()}

      
        {last && (
          <div className={classes.primary}>
            {last.map((img, index) => (
              <img
                src={`${APP_URL}${img}`}
                alt={`Image ${index}`}
                className={classes.primaryImg}
              />
            ))}
          </div>
        )}
   

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={classes.overlay}
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={`${APP_URL}${selectedImage}`}
              alt="Fullscreen"
              className={classes.fullscreenImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
