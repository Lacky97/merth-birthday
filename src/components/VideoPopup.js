import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypeIt from "typeit-react";

const VideoPopup = ({isOpen}) => {
    const [isVideoReady, setIsVideoReady] = useState(false);

    const handleVideoLoaded = () => {
        setIsVideoReady(true);
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        fontFamily: 'Arial, sans-serif'
    };

    const popupContentStyle = {
        backgroundColor: '#1E293B',
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '800px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
    };

    const videoContainerStyle = {
        width: '100%',
        aspectRatio: '16 / 9',
        marginBottom: '20px',
        borderRadius: '10px',
        overflow: 'hidden'
    };

    const videoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const textContainerStyle = {
        color: 'white',
        marginTop: '20px'
    };

    const typedTextStyle = {
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '15px',
        color: '#60A5FA'
    };

    const descriptionTextStyle = {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.6,
        color: '#CBD5E1'
    };

    if (!isOpen) {
        return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                style={overlayStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    style={popupContentStyle}
                    initial={{ opacity: 1, scale: 0.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                        type: "tween",
                        duration: 3
                    }}
                >
                    <div style={videoContainerStyle}>
                        <video
                            src="video/auguri.mov"
                            autoPlay
                            muted
                            controls={false}
                            onLoadedMetadata={handleVideoLoaded}
                            style={videoStyle}
                        >
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>

                    {isVideoReady && (
                        <motion.div
                            style={textContainerStyle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5,
                                type: "tween",
                                duration: 0.3
                            }}
                        >
                            <TypeIt
                                options={{
                                    strings: [
                                        "Benvenuto in un'esperienza unica!",
                                        "Preparati a un viaggio straordinario."
                                    ],
                                    speed: 50,
                                    waitUntilVisible: true,
                                }}
                                style={typedTextStyle}
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 2,
                                    type: "tween",
                                    duration: 0.3
                                }}
                                style={descriptionTextStyle}
                            >
                                Ogni momento è un'opportunità di crescita e scoperta.
                                Lascia che questa esperienza ti trasformi.
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default VideoPopup;