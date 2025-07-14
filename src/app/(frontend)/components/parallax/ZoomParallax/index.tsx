'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import styles from './zoomparallax.module.scss'

// List of images and their scale ranges
const pictures: { src: string; scaleRange: [number, number] }[] = [
  { src: '/img1.jpg', scaleRange: [1, 1.2] },
  { src: '/img2.jpg', scaleRange: [1, 1.5] },
  { src: '/img3.jpg', scaleRange: [1, 1.3] },
  { src: '/img4.jpg', scaleRange: [1, 1.4] },
  { src: '/img5.jpg', scaleRange: [1, 1.6] },
  { src: '/img6.jpg', scaleRange: [1, 1.3] },
  { src: '/img7.jpg', scaleRange: [1, 1.5] },
]

// Custom hook to map picture scale transforms safely
function useScaleTransforms(scrollYProgress: MotionValue<number>, ranges: [number, number][]) {
  return ranges.map((range) => useTransform(scrollYProgress, [0, 1], range))
}

export default function ZoomParallaxSection() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const scaleTransforms = useScaleTransforms(
    scrollYProgress,
    pictures.map((p) => p.scaleRange),
  )

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src }, index) => (
          <motion.div key={index} style={{ scale: scaleTransforms[index] }} className={styles.el}>
            <div className={styles.imageContainer}>
              <Image src={src} fill alt="image" placeholder="blur" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
