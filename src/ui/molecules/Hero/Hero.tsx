import { motion } from 'framer-motion'

import { Button } from '../../atoms/Button/Button.tsx'

export const Hero = () => (
  <section className="border-b-4 border-black p-16 bg-white text-center">
    <motion.h2
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-6xl font-extrabold mb-6 uppercase"
    >
      Bold. Raw. Real.
    </motion.h2>

    <p className="text-2xl max-w-2xl mx-auto mb-8">
      A brutally honest digital portfolio crafted with modern React & Tailwind
      design principles.
    </p>

    <Button
      label="Get in Touch"
      onClick={() => {
        alert('Coming soon!')
      }}
    />
  </section>
)
