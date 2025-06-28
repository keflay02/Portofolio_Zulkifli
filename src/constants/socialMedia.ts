import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://web.facebook.com",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/ancaaaa_2",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://tiktok.com/@zulkifliardiansy5",
  },
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/keflay02",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/1034061405265084437",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
