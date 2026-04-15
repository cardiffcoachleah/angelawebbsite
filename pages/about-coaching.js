import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { IMAGES } from '@/lib/images'

const CALENDLY_DISCOVERY = 'https://calendly.com/angelawebbcoaching/discovery-call'

export default function AboutCoaching() {
  return (
    <Layout
      title="About Coaching"
      description="What coaching is, how it works, and what to expect in your first session with Angela Webb."
    >

      {/* ── HERO — title centred ──────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src={IMAGES.aboutCoachingHero}
          alt="Garden in bloom"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="font-serif text-white text-4xl md:text-6xl font-light text-center">
            About Coaching
          </h1>
        </div>
      </section>

      {/* ── TWO COLUMNS — brand blue ──────────────────────────────── */}
      <section className="bg-brand py-16 md:py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">What is Coaching?</h2>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
              Coaching is a collaborative process built on the belief that you are the expert on
              your own life. You already hold the insight and wisdom you need; coaching provides
              the structure, guidance, and support to access it more fully.
            </p>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
              I was trained in the{' '}
              <a
                href="https://marthabeck.com/wayfinder-life-coach-training/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/60 transition-colors"
              >
                Wayfinder Life Coach training model by Martha Beck
              </a>
              , a method rooted in the idea that understanding and listening to your inner compass
              will guide you to the path meant for you.
            </p>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
              My role as your coach is not to give advice or offer quick fixes. Instead, I provide
              a safe, supportive space for reflection and growth, helping you uncover new perspectives,
              clarify what truly matters, and take meaningful steps toward the future you want to create.
            </p>
            <p className="font-sans text-base text-white/80 leading-relaxed">
              Coaching is not about fixing you — because you are not broken. It is about helping you
              access your own wisdom and inner compass so you can move forward with clarity,
              confidence, and purpose.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">What to Expect in Your First Session</h2>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
              Your first session is a space to exhale, relax, and simply be yourself — no pressure,
              no performance.
            </p>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-4">
              We&apos;ll start with a few questions to understand what&apos;s drawing you to coaching
              and what matters most to you. From there, we&apos;ll explore what might be holding you
              back and help you uncover what&apos;s true for you. My approach is grounded, kind, and
              deeply rooted in presence — creating space for you to reflect, gain insight, and move
              forward with confidence.
            </p>
            <p className="font-sans text-base text-white/80 leading-relaxed mb-10">
              If we continue working together, we&apos;ll set a rhythm that fits your life — weekly,
              bi-weekly, or monthly. This is your space, your journey, and my role is to support it
              every step of the way.
            </p>
            <Link
              href="/work-with-me"
              className="inline-block bg-white text-brand font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-silver transition-colors"
            >
              Work with Me
            </Link>
          </div>

        </div>
      </section>

      {/* ── CTA — plum ───────────────────────────────────────────── */}
      <section className="bg-plum py-14 text-center px-6">
        <h2 className="font-serif text-white text-2xl md:text-3xl font-light mb-4">
          Ready to take your first step?
        </h2>
        <p className="font-sans text-white/80 text-base mb-8 max-w-lg mx-auto">
          A free 30-minute discovery call is a no-pressure way to see if we&apos;re a good fit.
        </p>
        <Link
          href={CALENDLY_DISCOVERY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/60 text-white font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white hover:text-plum transition-colors"
        >
          Book a Free Discovery Call
        </Link>
      </section>

    </Layout>
  )
}
