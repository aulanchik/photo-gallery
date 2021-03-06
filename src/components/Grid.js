import React from "react";
import { useFirestore } from "../hooks";
import { motion } from "framer-motion";

const Grid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="grid">
        {docs && docs.map(
          (doc) => (
            <motion.div
                className="img__container"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}s
                // onClick={() => setSelectedImg(doc.url)}
            >
                <motion.img
                    src={doc.url}
                    alt="uploaded pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </motion.div>
            ))
        }
    </div>
  );
};

export default Grid;
