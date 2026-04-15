// lib/images.js
// Centralised image paths for the Angela Webb Coaching site.
// All files live in /public — encoded here to handle spaces in filenames.

const encode = (filename) => encodeURI(`/${filename}`)

export const IMAGES = {
  // Logo — needs to be uploaded to /public separately (from project files)
  logo: '/Angela_Webb_Coaching_Logo_FINAL.png',
  logoMark: '/AW_Logoremovebgpreview.png',

  // Homepage
  heroHalfdome: encode('Home - Halfdome Hero.jpg'),
  heroHalfdomeBottom: encode('Home - Halfdome Lower Page.jpg'),
  homeHeadshot: encode('Home - Headshot.jpg'),

  // About Me page
  aboutMeTreesHero: encode('About me - Trees Hero.jpg'),
  aboutMeHeadshot: encode('About me - Headshot.jpg'),
  aboutMeSoccer: encode('About me - Angela Soccer.jpg'),
  aboutMeHiking: encode('About me - Angela Hiking.jpg'),
  carouselAmber: encode('About me - Carousel Amber.jpg'),
  carouselCoast: encode('About me - Carousel Coast.jpg'),
  carouselCoffee: encode('About me - Carousel Coffee.jpg'),
  carouselHiking: encode('About me - Carousel Hiking.jpg'),
  carouselWater: encode('About me - Carousel Water.jpg'),

  // About Coaching page
  aboutCoachingHero: encode('About Coaching Flower Hero.jpg'),

  // Work with Me page
  workWithMeHero: encode('Work with me - Coast Hero.jpg'),

  // Contact page
  contactHero: encode('Contact me - Trees with Light Hero.png'),

  // Shared / footer
  marthabeck: encode('Marthabeck.jpg'),
}
