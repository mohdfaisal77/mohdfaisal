import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type AnimationVariant = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'zoomIn' 
  | 'slideInLeft' 
  | 'slideInRight' 
  | 'slideInUp' 
  | 'slideInDown'
  | 'bounce'
  | 'pulse';

interface AnimatedProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInLeft: {
    hidden: { x: -100 },
    visible: { x: 0 }
  },
  slideInRight: {
    hidden: { x: 100 },
    visible: { x: 0 }
  },
  slideInUp: {
    hidden: { y: 100 },
    visible: { y: 0 }
  },
  slideInDown: {
    hidden: { y: -100 },
    visible: { y: 0 }
  },
  bounce: {
    hidden: { y: 0 },
    visible: { 
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1
      }
    }
  },
  pulse: {
    hidden: { scale: 1 },
    visible: { 
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5
      }
    }
  }
};

export const Animated = ({ 
  children, 
  className = "", 
  variant = "fadeIn", 
  delay = 0, 
  duration = 0.5,
  once = true,
  ...props 
}: AnimatedProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants[variant]}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
