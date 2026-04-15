import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { IMAGES } from '@/lib/images'

const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'

export default function AboutMe() {
  return (
    <Layout
      title="About Me"
      description="Angela Webb's story — from saying no to a full-body yes, and how Half Dome changed everything."
    >

      {/* ── HERO with Martha Beck quote overlaid ─────────────────── */}
      <section className="relative h-[65vh] min-h-[420px]">
        <Image
          src={IMAGES.aboutMeTreesHero}
          alt="Redwood trees"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/65" />

        {/* Quote centred on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-white text-2xl md:text-4xl italic font-light leading-relaxed">
              &ldquo;To be in integrity is to be one thing, whole and undivided.&rdquo;
            </p>
            <cite className="block font-sans text-white/70 text-sm mt-4 not-italic tracking-widest uppercase">
              — Martha Beck
            </cite>
          </blockquote>
        </div>

        {/* Page title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8 px-6">
          <p className="font-sans text-white/60 text-sm tracking-widest uppercase">About Me</p>
        </div>
      </section>

      {/* ── INTRO HOOK — brand blue ───────────────────────────────── */}
      <section className="bg-brand py-14 px-6 text-center">
        <p className="font-serif text-white text-2xl md:text-3xl font-light italic max-w-3xl mx-auto leading-relaxed">
          If you&apos;ve ever hesitated, overthought, or talked yourself out of what you truly want
          &mdash; I get it. I&apos;ve been there, and I know how it can hold you back.
        </p>
      </section>

      {/* ── STORY PART 1 — white, soccer photo balanced ───────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Soccer photo — explicit height, rounded */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={IMAGES.aboutMeSoccer}
                alt="Young Angela playing soccer"
                fill
                className="object-cover object-top"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light mb-6">
                When I was young, I was{' '}
                <em className="italic">full of myself</em>{' '}
                &mdash; in the best way.
              </h2>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-4">
                I trusted my instincts, went after what I wanted, and didn&apos;t hesitate to say yes.
                If something caught my interest, I went for it.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-4">
                But over time, hesitation crept in. I started saying no more often — not because
                I didn&apos;t want something, but because the logistics felt too messy. Who would
                take care of the kids? The dog? My parents? Eventually, &ldquo;no&rdquo; became my default.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                That changed when my family planned a backpacking trip to Yosemite, including a
                climb up Half Dome. At first, I wasn&apos;t included. But this time felt different.
                A full-body yes rose up, and before I could talk myself out of it, I asked to join.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY PART 2 — brand blue, hiking photo ──────────────── */}
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

            {/* Hiking photo — explicit height */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
              <Image
                src={IMAGES.aboutMeHiking}
                alt="Angela hiking near Yosemite"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHT — plum, beach headshot ───────────────────────── */}
      <section className="bg-plum py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Beach headshot — explicit height */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={IMAGES.aboutMeHeadshot}
                alt="Angela Webb at the beach"
                fill
                className="object-cover object-center"
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

      {/* ── A BIT MORE ABOUT ME ──────────────────────────────────── */}
      <section className="bg-white py-14 text-center px-6">
        <h3 className="font-serif text-2xl text-charcoal font-light mb-8">A bit more about me</h3>
        <ul className="font-sans text-base text-charcoal/70 space-y-2 max-w-sm mx-auto">
          {[
            'Mother of 3 sons',
            'Lifelong learner — classes, workshops, podcasts, books',
            'Part of a strong coaching community',
            'Loves walking, hiking, Pvolve, and Pilates',
            'Feels most grounded at the beach',
            'Obsessed with coffee ☕',
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-5 gap-0">
          {[
            { src: IMAGES.carouselWater, alt: 'Scenic water' },
            { src: IMAGES.carouselCoffee, alt: 'Coffee' },
            { src: IMAGES.carouselAmber, alt: 'Landscape' },
            { src: IMAGES.carouselCoast, alt: 'Coastline' },
            { src: IMAGES.carouselHiking, alt: 'Hiking' },
          ].map(({ src, alt }, i) => (
            <div key={i} className="relative h-48 md:h-64">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

    </Layout>
  )
}
