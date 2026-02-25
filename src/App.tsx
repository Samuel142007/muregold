import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Birthday from "./Birthday";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// 🎯 Target Date: February 27 (auto adjusts yearly)
const getTargetDate = () => {
  const now = new Date();
  const target = new Date(now.getFullYear(), 1, 27, 0, 0, 0); // Feb = 1

  if (now > target) {
    target.setFullYear(now.getFullYear() + 1);
  }

  return target;
};

const TARGET_DATE = getTargetDate();

const getCountdown = (): Countdown => {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
};

const petals = Array.from({ length: 10 });

const App: React.FC = () => {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown());
  const [showBirthday, setShowBirthday] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getCountdown();
      setCountdown(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(interval);
        setShowBirthday(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (showBirthday) return <Birthday />;

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-purple-500 via-purple-800 to-purple-600 overflow-hidden py-5 flex items-center justify-center px-4 text-white">
      
      {/* Floating petals */}
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 md:w-10 md:h-10 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Countdown Card */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-10 max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          🎉 Happy Birthday 🎉
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          in Advance, Mom ❤️
        </h2>

        <div className="bg-black/30 rounded-2xl py-4 px-4 mb-6 shadow-inner">
          <div className="flex justify-center gap-3 text-lg sm:text-xl font-mono font-bold">
            <TimeBox label="Days" value={countdown.days} />
            <TimeBox label="Hours" value={countdown.hours} />
            <TimeBox label="Min" value={countdown.minutes} />
            <TimeBox label="Sec" value={countdown.seconds} />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed bg-black/30 rounded-xl p-4">
          Even before the day arrives, I celebrate the beautiful soul you are.
          Thank you for your love, strength, and warmth. You mean the world to me.
          <span className="block mt-3 text-xl">🎂 💝 ✨</span>
        </p>
      </motion.div>
    </div>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-15">
    <span className="text-xl sm:text-2xl">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] uppercase tracking-widest text-pink-200">
      {label}
    </span>
  </div>
);

export default App;