import React from 'react'
import useFirestore  from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    
    const { docs } = useFirestore('images'); //retriving the docs array from useFirestore hook 

    return (
        <div className="img-grid">
        {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)} //* setting the image for Modal to enlarge *//
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                > 
                    <motion.img src={doc.url} alt="uploaded pic" 
                        initial={{ opacity: 0 }} //initial state
                        animate={{ opacity: 1 }} //on completing the process or animation
                        transition={{ delay: 1 }}
                    />
                </motion.div> //adding motion allows to use the framer-motion lib attributes
            ))}
        </div>
    )
}

export default ImageGrid
