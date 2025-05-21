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
                <h1>Some kind of title</h1>
              </div>

              <div className={classes.right}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed commodo metus. Sed vitae dapibus nulla. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aenean sed
                  commodo metus. Sed vitae dapibus nulla. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aenean sed commodo metus.
                  Sed vitae dapibus nulla. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean sed commodo metus. Sed
                  vitae dapibus nulla. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Aenean sed commodo metus. Sed vitae dapibus
                  nulla.v Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean sed commodo metus. Sed vitae dapibus nulla. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
                  commodo metus. Sed vitae dapibus nulla. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aenean sed commodo metus.
                  Sed vitae dapibus nulla. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean sed commodo metus. Sed
                  vitae dapibus nulla. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Aenean sed commodo metus. Sed vitae dapibus
                  nulla.v
                </p>
                <div
                  className={classes.icons}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href="mailto:example@example.com">
                    <FaEnvelope />
                  </a>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                  <a href="https://t.me/example">
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
