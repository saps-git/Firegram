import React from 'react'
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){ //if clicked in the div area of className "backdrop", then only execute
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{ y: "-100vh" }} //y-offset (y-axis), set to be -ve, that is will come from out of the sceen
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal
