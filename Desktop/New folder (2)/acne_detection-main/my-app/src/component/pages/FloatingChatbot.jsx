import React, { useState, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from './ChatBot';
import './FloatingChatbot.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Check for new messages when closed
  useEffect(() => {
    if (!isOpen) {
      const pulseTimer = setTimeout(() => {
        setIsPulsing(true);
        setHasNotification(true);
      }, 10000); // Pulse after 10 seconds of inactivity

      return () => clearTimeout(pulseTimer);
    } else {
      setHasNotification(false);
    }
  }, [isOpen]);

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const windowVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 350,
        mass: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotate: 5,
      transition: { 
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    boxShadow: [
      '0 0 0 0 rgba(165, 42, 42, 0.7)',
      '0 0 0 10px rgba(165, 42, 42, 0)',
      '0 0 0 0 rgba(165, 42, 42, 0)'
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <div className="floating-chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="chatbot-header">
              <FaRobot className="chatbot-icon" />
              <h3>Skin Care Assistant</h3>
            </div>
            <ChatBot />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`floating-chatbot-button ${hasNotification ? 'has-notification' : ''}`}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsPulsing(false);
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate={isPulsing ? pulseAnimation : ''}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <FaCommentDots size={24} />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingChatbot;