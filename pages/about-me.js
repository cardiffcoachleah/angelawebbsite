import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { IMAGES } from '@/lib/images'

const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'

// Lifelong learner moved to bottom of right column for better visual balance
const aboutItems = [
  'Mother of 3 sons',
  'Loves walking, hiking, Pvolve, and Pilates',
  'Part of a strong coaching community',
  'Obsessed with coffee ☕',
  'Feels most grounded at the beach',
  'Lifelong learner — classes, workshops, podcasts, books',
]

export default function AboutMe() {
  return (
    <Layout
      title="About Me"
      description="Angela Webb's story — from saying no to a full-body yes, and how Half Dome changed everything."
    >

      {/* ── HERO: Martha Beck quote overlaid ─────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src={IMAGES.aboutMeTreesHero}
          alt="Redwood trees"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-white text-2xl md:text-4xl italic font-light leading-relaxed">
              &ldquo;To be in integrity is to be one thing, whole and undivided.&rdquo;
            </p>
            <cite className="block font-sans text-white/70 text-sm mt-5 not-italic tracking-widest uppercase">
              — Martha Beck
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── INTRO HOOK — brand blue ───────────────────────────────── */}
      <section className="bg-brand py-14 px-6 text-center">
        <p className="font-serif text-white text-2xl md:text-3xl font-light italic max-w-3xl mx-auto leading-relaxed">
          If you&apos;ve ever hesitated, overthought, or talked yourself out of what you truly want
          &mdash; I get it. I&apos;ve been there, and I know how it can hold you back.
        </p>
      </section>

      {/* ── STORY PART 1 — white, soccer photo portrait ───────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Soccer photo — 2/5 width, tall portrait */}
            <div className="md:col-span-2 relative h-[420px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={IMAGES.aboutMeSoccer}
                alt="Young Angela playing soccer"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Text — 3/5 width, brand-coloured */}
            <div className="md:col-span-3 md:pt-4">
              <h2 className="font-serif text-2xl md:text-3xl text-plum font-light mb-6">
                When I was young, I was{' '}
                <em className="italic">full of myself</em>{' '}
                &mdash; in the best way.
              </h2>
              <p className="font-sans text-base text-brand/90 leading-relaxed mb-4">
                I trusted my instincts, went after what I wanted, and didn&apos;t hesitate to say yes.
                If something caught my interest, I went for it.
              </p>
              <p className="font-sans text-base text-brand/90 leading-relaxed mb-4">
                But over time, hesitation crept in. I started saying no more often — not because
                I didn&apos;t want something, but because the logistics felt too messy. Who would
                take care of the kids? The dog? My parents? Eventually, &ldquo;no&rdquo; became my default.
              </p>
              <p className="font-sans text-base text-brand/90 leading-relaxed">
                That changed when my family planned a backpacking trip to Yosemite, including a
                climb up Half Dome. At first, I wasn&apos;t included. But this time felt different.
                A full-body yes rose up, and before I could talk myself out of it, I asked to join.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY PART 2 — brand blue, hiking photo (plain img) ──── */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="text-white order-2 md:order-1">
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
                That one &ldquo;yes&rdquo; led to an unforgettable experience.
              </h2>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                I trained, grew strong, and felt ready for the climb. But near the top, everything
                shifted. My body grew heavy, my head foggy. Just below the famous cables, altitude
                sickness and fear of heights made it clear it wasn&apos;t safe for me to continue.
                My husband stayed with me while our two sons pressed on to the summit.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                When they returned, we began our descent — dizzy and drained, I leaned on my son,
                focusing on one careful step at a time. Sitting in the valley, I looked up at Half
                Dome&apos;s sheer face towering above us.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                From below, the climb looked impossible — the path invisible, hidden from view.
              </p>
            </div>

            {/* Hiking — plain img tag to bypass Next.js optimisation */}
            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
              <img
                src={IMAGES.aboutMeHiking}
                alt="Angela hiking near Yosemite"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHT — plum, beach headshot (plain img) ───────────── */}
      <section className="bg-plum py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Beach headshot — plain img tag */}
            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-md">
              <img
                src={IMAGES.aboutMeHeadshot}
                alt="Angela Webb at the beach"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="text-white">
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
                Sometimes it&apos;s enough to trust that first &ldquo;yes&rdquo; and figure out the rest along the way.
              </h2>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                As your coach, that&apos;s what I help you do — reconnect with the part of you
                that&apos;s strong, intuitive, and unafraid to go after what you want. I don&apos;t
                give answers; I create space for you to hear your own.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-8">
                Because when you&apos;re <em>full of yourself</em> — in the best way — hesitation
                gives way to self-trust, clarity, and joy.
              </p>
              <Link
                href={CALENDLY_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/60 text-white font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-white hover:text-plum transition-colors"
              >
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── A BIT MORE ABOUT ME — brand blue, 2-col ──────────────── */}
      <section className="bg-brand py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-white text-2xl font-light mb-10">A bit more about me</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {aboutItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                <p className="font-sans text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-5 gap-0">
          <div className="relative h-48 md:h-64">
            <Image src={IMAGES.carouselWater} alt="Scenic water" fill className="object-cover object-center" />
          </div>
          <div className="relative h-48 md:h-64">
            <Image src={IMAGES.carouselCoffee} alt="Coffee" fill className="object-cover object-center" />
          </div>
          <div className="relative h-48 md:h-64">
            <Image src={IMAGES.carouselAmber} alt="Landscape" fill className="object-cover object-center" />
          </div>
          <div className="relative h-48 md:h-64">
            <Image src={IMAGES.carouselCoast} alt="Coastline" fill className="object-cover object-bottom" />
          </div>
          <div className="relative h-48 md:h-64">
            <Image src={IMAGES.carouselHiking} alt="Hiking" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

    </Layout>
  )
}
