import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

// TODO: Replace with Angela's actual Calendly discovery call URL
const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Martha Beck badge */}
          <div className="flex-shrink-0">
            <Image
              src={IMAGES.marthabeck}
              alt="Certified Wayfinder Life Coach – Martha Beck"
              width={100}
              height={100}
              className="opacity-90"
            />
          </div>

          {/* Centre: contact link */}
          <div className="text-center">
            <Link
              href={CALENDLY_DISCOVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/60 text-white font-sans text-sm tracking-wide px-8 py-3 hover:bg-white hover:text-brand transition-colors"
            >
              Contact me
            </Link>
          </div>

          {/* Right: name + copyright */}
          <div className="text-center md:text-right">
            <p className="font-serif text-lg font-light">Angela Webb</p>
            <p className="font-sans text-sm text-white/70 mt-1">Certified Coach</p>
            <p className="font-sans text-xs text-white/50 mt-3">© Copyright {new Date().getFullYear()}</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
