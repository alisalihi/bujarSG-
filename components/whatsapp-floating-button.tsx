'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Bujar SG on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative size-7" />
    </motion.a>
  )
}
