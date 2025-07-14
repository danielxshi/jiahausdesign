import React from 'react'
// import Content from './Content';

export default function Footer() {
  return (
    <div
      className="relative h-[800px] bg-black"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[600px] w-full">
        {
          <div className="flex flex-col md:flex-row justify-between h-full px-8 md:px-20 py-48 text-white font-light">
            {/* Left: Branding and Contact */}
            <div className="flex flex-col space-y-6 mt-auto mb-0">
              <div className="text-5xl tracking-widest font-light text-yellow-400">GRYPHON</div>
              <div className="space-y-2">
                <p>604 620 8296</p>
                <p>info@gryphonliving.com</p>
                <p>
                  102–2590 Granville Street,
                  <br />
                  Vancouver, BC V6H 3H1
                </p>
              </div>
              <div className="text-xs text-neutral-400 pt-8">
                <p>© 2023 Gryphon Development</p>
                <div className="space-x-4 mt-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-col items-end justify-between text-right space-y-2 mt-12 md:mt-0">
              <a href="#" className="uppercase hover:underline">
                Wechat
              </a>
              <a href="#" className="uppercase hover:underline">
                Twitter
              </a>
              <a href="#" className="uppercase hover:underline">
                Facebook
              </a>
              <a href="#" className="uppercase hover:underline">
                Instagram
              </a>
              <a href="#" className="uppercase hover:underline">
                Little Red Book
              </a>

              <p className="text-xs text-neutral-400 mt-8">Website by Bam Digital</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
