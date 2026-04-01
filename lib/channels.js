/**
 * Channel avatars from /public/brand (exported from YouTube profile pictures).
 * Direct yt3.googleusercontent.com hotlinks often break in the browser (referrer / CDN).
 */
export const ARAKALAGAM_LOGO_URL = "/brand/arakalagam.jpg";

/** Network channels: canonical YouTube @ URLs and local profile images */
export const NETWORK_YOUTUBE = [
  {
    name: "ARAKALAGAM MEDIA",
    url: "https://www.youtube.com/@ARAKALAGAM",
    logoUrl: ARAKALAGAM_LOGO_URL,
  },
  {
    name: "Thiraikalagam",
    url: "https://www.youtube.com/@Thiraikalagam2407",
    logoUrl: "/brand/thiraikalagam.jpg",
  },
  {
    name: "Porul Puthithu",
    url: "https://www.youtube.com/@PorulPuthithu",
    logoUrl: "/brand/porul-puthithu.jpg",
  },
  {
    name: "Cheral",
    url: "https://www.youtube.com/@Cheraltravel",
    logoUrl: "/brand/cheral.jpg",
  },
];
