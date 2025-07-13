'use client'

import { motion } from 'framer-motion'
import FallbackImage from './fallback-image'
import Section from '../../(frontend)/components/section/Section'
import SectionLabel from '../../(frontend)/components/section/SectionLabel'
import BigText from '../../(frontend)/components/section/BigText'
import LogoContainer from '../../(frontend)/components/logo-container'
import Logo from '../../(frontend)/components/logo'

interface Props {
  children?: React.ReactNode
}

export default function HomeClient({ children }: Props) {
  return (
    <main className="flex-1">
      <section className="-mt-[5rem] relative">
        <motion.div
          className="z-[10] w-full h-screen overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <FallbackImage
            src="https://nailcissist.com/cdn/shop/files/Untitled_design_b4accec6-a4b2-4f66-9d85-e4023ac11aa4.png?v=1751867630&width=900"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </section>

      <Section data-scroll-section>
        <SectionLabel>About Us</SectionLabel>
        <BigText data-scroll-speed="1.2">
          We partner with clients in financial services, electronic commerce, travel and tourism
          services, entertainment & infotainment, retail industries, CPG, and more.
        </BigText>
      </Section>

      <Section data-scroll-section>
        <LogoContainer>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed={i < 3 ? '0.5' : '-0.5'}
            >
              <div className="relative h-[200px] w-full">
                <Logo
                  src="https://nailcissist.com/cdn/shop/files/Untitled_design_b4accec6-a4b2-4f66-9d85-e4023ac11aa4.png?v=1751867630&width=900"
                  alt="Background"
                />
              </div>
            </div>
          ))}
        </LogoContainer>
      </Section>

      {children}
    </main>
  )
}
