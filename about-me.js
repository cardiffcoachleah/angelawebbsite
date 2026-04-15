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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end justify-center">
        <Image
          src={IMAGES.aboutMeTreesHero}
          alt="Redwood trees"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
        <div className="relative z-10 text-center pb-14 px-6">
          <h1 className="font-serif text-white text-4xl md:text-6xl font-light">About Me</h1>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────── */}
      <section className="bg-blue-DEFAULT py-14 text-center px-6">
        <blockquote className="max-w-3xl mx-auto">
          <p className="font-serif text-white text-2xl md:text-3xl italic font-light leading-relaxed">
            &ldquo;To be in integrity is to be one thing, whole and undivided.&rdquo;
          </p>
          <cite className="block font-sans text-white/60 text-sm mt-4 not-italic tracking-wide">
            — Martha Beck
          </cite>
        </blockquote>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-serif text-2xl md:text-3xl text-charcoal font-light italic text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            If you&apos;ve ever hesitated, overthought, or talked yourself out of what you truly want
            &mdash; I get it. I&apos;ve been there, and I know how it can hold you back.
          </p>

          {/* Story: Part 1 */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
            <div className="relative h-80 rounded-sm overflow-hidden">
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
                <em className="font-serif-italic">full of myself</em>{' '}
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
            </div>
          </div>

          {/* Story: Part 2 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light mb-6">
                That one &ldquo;yes&rdquo; led to an unforgettable experience.
              </h2>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-4">
                That changed when my family planned a backpacking trip to Yosemite, including a
                climb up Half Dome. At first, I wasn&apos;t included — I had said no to adventures
                like that before. But this time felt different. A full-body yes rose up, and before
                I could talk myself out of it, I asked to join.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-4">
                I trained, grew strong, and felt ready for the climb. But near the top, everything
                shifted. My body grew heavy, my head foggy. Just below the famous cables, altitude
                sickness and fear of heights made it clear it wasn&apos;t safe for me to continue.
                My husband stayed with me while our two sons pressed on to the summit.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                When they returned, we began our descent — dizzy and drained, I leaned on my son,
                focusing on one careful step at a time. Sitting in the valley, I looked up at Half
                Dome&apos;s sheer face towering above us. From below, the climb looked impossible —
                the path invisible, hidden from view.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-80 rounded-sm overflow-hidden">
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

      {/* ── INSIGHT + CTA ────────────────────────────────────────── */}
      <section className="bg-plum py-20 md:py-28 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div className="relative h-80 rounded-sm overflow-hidden">
              <Image
                src={IMAGES.aboutMeHeadshot}
                alt="Angela Webb at the beach"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
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
                className="inline-block border border-white/60 text-white font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-plum transition-colors"
              >
                Book a Free Discovery Call
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── A BIT MORE ABOUT ME ──────────────────────────────────── */}
      <section className="bg-silver/30 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl text-charcoal font-light mb-8">A bit more about me</h3>
          <ul className="font-sans text-base text-charcoal/80 space-y-2">
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
        </div>
      </section>

      {/* ── PHOTO CAROUSEL (static grid for now) ────────────────── */}
      <section className="bg-plum/10 py-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1">
          {[
            { src: IMAGES.carouselWater, alt: 'Scenic water' },
            { src: IMAGES.carouselCoffee, alt: 'Coffee' },
            { src: IMAGES.carouselAmber, alt: 'Amber tones' },
            { src: IMAGES.carouselCoast, alt: 'Coastline' },
            { src: IMAGES.carouselHiking, alt: 'Hiking' },
          ].map(({ src, alt }, i) => (
            <div key={i} className="relative h-48 md:h-56">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

    </Layout>
  )
}
