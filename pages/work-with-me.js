import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { IMAGES } from '@/lib/images'

const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'
const CALENDLY_SINGLE = 'https://calendly.com/angelawebbcoaching/single-session'
const CALENDLY_PACKAGE = 'https://calendly.com/angelawebbcoaching/3-month-package'

const offerings = [
  {
    image: IMAGES.carouselWater,
    imageAlt: 'Peaceful lake and mountains',
    title: 'Free Discovery Call',
    subtitle: 'Take Your First Step',
    description:
      "A short, no-pressure conversation to connect. A free 30-minute call to explore what's bringing you to coaching and see if we're a good fit. You'll have space to ask questions and get a feel for what it's like to work together.",
    detail: '30 minutes · Free',
    cta: 'Book a Discovery Call',
    href: CALENDLY_DISCOVERY,
  },
  {
    image: IMAGES.heroHalfdomeBottom,
    imageAlt: 'Half Dome, Yosemite',
    title: 'Single Coaching Session',
    subtitle: 'A Focused Reset',
    description:
      "One conversation to bring clarity to a specific challenge. Perfect if you're facing a particular situation, feeling stuck, or simply needing space to reflect. Together, we'll slow things down so you can sort through what's on your mind and open up a fresh perspective.",
    detail: '60 minutes · $125',
    cta: 'Schedule a Single Session',
    href: CALENDLY_SINGLE,
  },
  {
    image: IMAGES.carouselCoast,
    imageAlt: 'Northern California coastline',
    title: '3 Month Coaching Package',
    subtitle: 'Deepening the Work',
    description:
      "Consistent support for meaningful change. Over six sessions, we'll create space to explore patterns, clarify what matters most, and reconnect with your inner knowing. With steady support, you'll build the clarity and self-trust to move forward in alignment.",
    detail: '6 × 60-minute sessions · $600',
    cta: 'Start 3-Month Journey',
    href: CALENDLY_PACKAGE,
  },
]

export default function WorkWithMe() {
  return (
    <Layout
      title="Work with Me"
      description="Coaching options with Angela Webb — from a free discovery call to a 3-month package."
    >

      {/* ── HERO — title centred ──────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src={IMAGES.workWithMeHero}
          alt="Rocky coastline at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="font-serif text-white text-4xl md:text-6xl font-light text-center">
            Work with Me
          </h1>
        </div>
      </section>

      {/* ── INTRO — plum ─────────────────────────────────────────── */}
      <section className="bg-plum py-12 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
            Ways to Work Together
          </h2>
          <p className="font-sans text-base text-white/80 leading-relaxed">
            Coaching with me is a conversation — a space to slow down, listen inward, and begin
            to trust yourself again. Whether you&apos;re seeking clarity, navigating change, or
            craving more ease, these options are here to support you.
          </p>
        </div>
      </section>

      {/* ── OFFERING CARDS ───────────────────────────────────────── */}
      <section className="bg-plum pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map(({ image, imageAlt, title, subtitle, description, detail, cta, href }) => (
            <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
              <div className="relative h-52">
                <Image src={image} alt={imageAlt} fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-grow p-7 text-center">
                <h3 className="font-serif text-xl text-plum font-light mb-1">{title}</h3>
                <p className="font-sans text-xs text-brand tracking-widest uppercase mb-4">{subtitle}</p>
                <p className="font-sans text-sm text-brand/80 leading-relaxed mb-5 flex-grow">
                  {description}
                </p>
                <p className="font-sans text-sm text-plum font-medium mb-5">{detail}</p>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-plum text-white font-sans text-sm tracking-wide px-6 py-3 rounded-full hover:bg-plum-dark transition-colors"
                >
                  {cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOT SURE — brand blue ─────────────────────────────────── */}
      <section className="bg-brand py-16 text-center px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-white font-light mb-4">
            Not Sure Where to Begin?
          </h2>
          <p className="font-sans text-base text-white/80 leading-relaxed mb-8">
            If you&apos;re curious but not certain which option is the best fit, start with a free
            discovery call. It&apos;s an easy first step — and we&apos;ll figure it out together.
          </p>
          <Link
            href={CALENDLY_DISCOVERY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/60 text-white font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white hover:text-brand transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

    </Layout>
  )
}
