import { FaInstagram, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./InfoBlock.module.scss";

interface IInfoBlock {
  setShow: () => void;
  isVisible: boolean;
}

export default function InfoBlock({ setShow, isVisible }: IInfoBlock) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={classes.overlay}
          onClick={setShow}
          initial={{
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          animate={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          exit={{
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className={classes.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className={classes.columns}>
              <div className={classes.left}>
                <h1>Ekaterina Azovskaya</h1>
              </div>

              <div className={classes.right}>
                <p>
                  I was born and raised in Saint Petersburg. My work has always
                  been connected with the language of visual imagery. From a
                  young age, I carried a camera everywhere, drawn to capturing
                  fleeting visuals. Travel, observation, and storytelling shaped
                  the way I see.
                </p>
                <p>
                  As I grew older, I felt the need to translate my visual
                  language into physical form. Today, I work with wood,
                  ceramics, light — creating forms with emotional design. I
                  believe objects have a soul — my role as a designer is to help
                  reveal it.
                </p>
                <p>
                  I hold a BA in Product and Furniture Design and am currently
                  based in London. If something here resonates — let’s connect.
                </p>
                <div
                  className={classes.icons}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="mailto:e.azovskaya.art@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.instagram.com/from.katya_with.love/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://t.me/nessiefreeman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane />
                  </a>

                  <span>+447916281462</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
