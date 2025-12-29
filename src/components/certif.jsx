import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data";
export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="py-20 mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Certificates
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md 
                       border border-white/10 
                       p-6 rounded-2xl"
          >
            <div className="py-1">
              <i className="ri-map-pin-line text-sm opacity-50">
                <span className="px-2">{cert.at}</span>
              </i>
            </div>
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-70 w-2/3">{cert.issuer}</p>
              <p className="text-sm opacity-70">{cert.year}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCert(cert)}
              className="mt-6 px-5 py-2 rounded-full 
                         text-white font-medium
                         transition bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 rounded-full p-2 hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-600 hover:to-violet-700"
            >
              see certificates
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm 
                       flex items-center justify-center z-50"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="bg-black p-6 rounded-xl max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full rounded-lg"
              />

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setActiveCert(null)}
                  className="text-sm text-white/70 hover:text-white"
                >
                  Tutup ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
