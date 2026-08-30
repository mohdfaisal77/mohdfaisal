import { motion, MotionProps, useReducedMotion, Variants } from 'framer-motion';
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

const animationVariants:{[key in AnimationVariant]: Variants} = {
  fadeIn: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 56, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -56, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -72, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 72, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.88, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -110 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 110 },
    visible: { opacity: 1, x: 0 }
  },
  slideInUp: {
    hidden: { opacity: 0, y: 110 },
    visible: { opacity: 1, y: 0 }
  },
  slideInDown: {
    hidden: { opacity: 0, y: -110 },
    visible: { opacity: 1, y: 0 }
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
  const prefersReducedMotion = useReducedMotion();
  const selectedVariant = prefersReducedMotion ? animationVariants.fadeIn : animationVariants[variant];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.18 }}
      variants={selectedVariant}
      transition={{ 
        duration: prefersReducedMotion ? 0.2 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
