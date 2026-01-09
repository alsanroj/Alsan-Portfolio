/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

const Loader = ({ isActive = true }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf;
    const start = Date.now();
    const duration = 1800; // minimum loader duration

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <m.div
          className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="loader-inner text-center select-none">
            <div className="scanner mx-auto mb-8">
              <div className="scanner-ring" />
              <div className="scanner-core" />
            </div>

            <div className="progress-bar mx-auto mb-6">
              <div className="progress-track" />
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                  boxShadow: `0 0 20px rgba(220,38,38,${0.02 * progress})`,
                }}
              />
            </div>

            <div className="glitch-wrap">
              <div className="glitch" data-text="INITIALIZING INTERFACE...">
                INITIALIZING INTERFACE...
              </div>
              <div className="glitch small" data-text="ALSAN ROJ v1.0">
                ALSAN ROJ v1.0
              </div>
            </div>

            <div className="mt-6 text-gray-400">{progress}%</div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
