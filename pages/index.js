import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { IMAGES } from '@/lib/images'

const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'

const coachingReadyItems = [
  'Trust themselves',
  'Move forward from a place of alignment, not pressure',
  'Feel like themselves again',
  'Get clear on what they really want',
  'Make choices and decisions without overthinking',
  'Honour their own pace',
]

export default function Home() {
  return (
    <Layout description="Coaching for people who are ready to trust themselves and move forward with clarity.">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      {/* Gradient from top so sky fades, text sits on dark lower area */}
      <section className="relative h-[85vh] min-h-[560px]">
        <Image
          src={IMAGES.heroHalfdome}
          alt="Half Dome, Yosemite"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Text anchored to bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-center px-6 pb-16">
          <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            What if being{' '}
            <em className="italic">full of yourself</em>{' '}
            is the key to moving forward?
          </h1>
          <div className="mt-8">
            <Link
              href={CALENDLY_DISCOVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-charcoal font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-silver transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO — brand blue background ────────────────────────── */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Copy */}
            <div className="text-white">
              <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed italic mb-8">
                When I look back at the times in my life when I made bold,
                meaningful choices — they all started with a full-body yes.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                Not with overthinking. Not with asking everyone else what they thought.
                But with something quieter and stronger: a sense of being fully rooted
                in my own thoughts, desires, and values.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                Grounded. Clear. Aligned.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                That&apos;s what I call being <em>full of yourself</em> — in the best way.
                Because when you feel that way, you know what matters. You trust your timing.
                And you take your next step, even if the whole path isn&apos;t visible yet.
              </p>
            </div>

            {/* Headshot */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.homeHeadshot}
                  alt="Angela Webb, Certified Coach"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="font-serif text-white/80 text-lg">
                Angela Webb, Certified Coach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COACHING FOR PEOPLE READY TO — light background ─────── */}
      <section className="bg-silver/40 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-3">
            Coaching for people who are ready to&hellip;
          </h2>
          <div className="w-12 h-px bg-plum mx-auto mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left max-w-4xl mx-auto">
            {coachingReadyItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-plum flex-shrink-0" />
                <p className="font-sans text-base text-charcoal/80 leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href={CALENDLY_DISCOVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-plum text-white font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-plum-dark transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORY TEASER — plum background ───────────────────────── */}
      <section className="bg-plum py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.heroHalfdomeBottom}
                alt="Half Dome from the valley"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Copy */}
            <div className="text-white">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">
                A Moment That Changed Everything
              </h2>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
                Not long ago, I said yes to something I never would have before:
                climbing Half Dome with my family. It ended differently than I
                expected — but it gave me an insight I now live by, and offer to
                every client:
              </p>
              <p className="font-serif text-xl italic text-white/90 border-l-2 border-white/40 pl-5 my-6 leading-relaxed">
                Sometimes the path looks impossible simply because it&apos;s hidden
                from where you&apos;re standing.
              </p>
              <Link
                href="/about-me"
                className="inline-flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors group"
              >
                Read the full story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
