import { motion } from "framer-motion";

const Birthday = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-purple-500 via-purple-800 to-purple-600 text-white px-4 overflow-hidden py-5">
      
      {/* Soft glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl px-5 py-8 md:px-10 md:py-12"
      >
        <motion.h1
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide"
        >
          🎉 Happy Birthday 🎉
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white"
        >
          Mom ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-sm sm:text-base md:text-lg leading-relaxed bg-black/30 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-2xl text-white/95"
        >
          Today, we celebrate the faithfulness of God in Mummy Yanu's life! She's
          been a constant source of joy, comfort, and strength — not just for us,
          her children, but for friends, family, and everyone privileged to cross
          her path. She is that special one we turn to in times of need, who
          corrects with love, encourages with kindness, and uplifts with her
          presence.

          <br /><br />

          Her warmth and generosity have created a ripple effect, touching
          countless lives in ways we may never fully know — inspiring hope,
          spreading love, and leaving a legacy of faith that continues to shape
          our lives. It’s no wonder people fall in love with her instantly 😊 She
          is a treasure, a gem, and a blessing beyond measure.

          <br /><br />

          We are grateful for the values and lessons she has instilled in us, and
          for the example she sets as a wife, mom, and friend. As we celebrate her
          birthday, we also celebrate the incredible woman God has shaped her to
          be — a woman of grace, compassion, and unwavering faith.

          <br /><br />

          Thank you, Mummy Yanu, for being such a priceless blessing. Your impact
          will be felt for generations to come, and your love will forever
          inspire us to live lives that honor God and bless others ✨
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
   <div className="text-xl sm:text-2xl font-semibold tracking-wide">
  Muregold 🌹🌹🌹
</div>

<span className="text-lg font-light">&</span>

<div className="text-xl sm:text-2xl font-semibold tracking-wide">
  Imisioluwa 🌸🌸🌸
</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Birthday;