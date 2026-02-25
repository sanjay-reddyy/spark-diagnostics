import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Heart } from "lucide-react";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(onComplete, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      onClick={handleClick}
      className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-cyan-900 flex items-center justify-center z-[9999] cursor-pointer overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Medical Icon Animation */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
          >
            <Heart size={32} className="text-emerald-300" />
          </motion.div>

          <motion.div
            animate={{ rotate: [0, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
          >
            <Activity size={32} className="text-cyan-300" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Spark<span className="text-emerald-300"> Diagnostics</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-8 font-light tracking-wide"
        >
          Precision Healthcare at Your Doorstep
        </motion.p>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base text-white/70 max-w-md mx-auto leading-relaxed"
        >
          Professional diagnostic testing with cutting-edge technology and expert care.
          Your health, our priority.
        </motion.p>

        {/* Animated Dot Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-3 mt-12"
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: dot * 0.2 }}
              className="w-2 h-2 bg-emerald-300 rounded-full"
            />
          ))}
        </motion.div>

        {/* Click to Continue Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xs md:text-sm text-white/50 mt-16 uppercase tracking-widest"
        >
          Click to continue or wait...
        </motion.p>
      </div>

      {/* Medical Elements Decoration */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-10 text-white/20 text-6xl"
      >
        +
      </motion.div>

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-white/20 text-5xl"
      >
        ◈
      </motion.div>
    </motion.div>
  );
}
