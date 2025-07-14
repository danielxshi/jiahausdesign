// ZoomParallaxSection.tsx
'use client'

import styles from './zoomparallax.module.scss'
import FallbackImage from '../../fallback-image'
import { useScroll, useTransform, motion, scroll } from 'framer-motion'
import { useRef } from 'react'

const fallbackSrc =
  'https://nailcissist.com/cdn/shop/files/Untitled_design_b4accec6-a4b2-4f66-9d85-e4023ac11aa4.png?v=1751867630&width=900'

const nailcissistImage = fallbackSrc

const pictures = new Array(7).fill({ src: nailcissistImage })

export default function ZoomParallaxSection() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 9]),
  ]

  return (
    <div ref={container} className={styles.container}>
      <div className={''}>
        {pictures.map((pic, index) => (
          <motion.div key={index} style={{ scale: scales[index] }} className={styles.el}>
            <div className={styles.imageContainer}>
              {' '}
              {/* has position: relative, width/height */}
              <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
