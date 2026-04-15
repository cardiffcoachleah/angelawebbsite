// lib/images.js
// Centralised image paths. All files live in /public.

const encode = (filename) => encodeURI(`/${filename}`)

export const IMAGES = {
  // Logo
  logo: '/AW_Logo-removebg-preview.png',

  // Homepage
  heroHalfdome: encode('Home - Halfdome Hero.jpg'),
  heroHalfdomeBottom: encode('Home - Halfdome Lower Page.jpg'),
  homeHeadshot: encode('Home - Headshot.jpg'),

  // About Me
  aboutMeTreesHero: encode('About me - Trees Hero.jpg'),
  aboutMeHeadshot: encode('About me - Headshot.jpg'),
  aboutMeSoccer: encode('About me - Angela Soccer.jpg'),
  aboutMeHiking: encode('About me - Angela Hiking.jpg'),
  carouselAmber: encode('About me - Carousel Amber.jpg'),
  carouselCoast: encode('About me - Carousel Coast.jpg'),
  carouselCoffee: encode('About me - Carousel Coffee.jpg'),
  carouselHiking: encode('About me - Carousel Hiking.jpg'),
  carouselWater: encode('About me - Carousel Water.jpg'),

  // About Coaching
  aboutCoachingHero: encode('About Coaching Flower Hero.jpg'),

  // Work with Me
  workWithMeHero: encode('Work with me - Coast Hero.jpg'),

  // Contact
  contactHero: encode('Contact me - Trees with Light Hero.png'),

  // Footer — white badge for blue background
  // Upload WLCT_badge_white_400x400_copy.png to /public
  marthabeck: '/WLCT_badge_white_400x400_copy.png',
}
