/*
 * Call to Action (CTA) Configuration
 *
 * This file contains the configuration for the CTA component.
 * Customize the call-to-action section of your portfolio.
 */
import { profileConfig } from '@/config/Profile';

export const ctaConfig = {
  // Profile image settings
  profileImage: profileConfig.image,
  profileAlt: profileConfig.alt,

  // CTA button settings
  linkText: 'Book a Free Call',
  calLink: 'kartik1714/meeting',

  // Pre-text message
  preText: "Hey, you scrolled this far, let's talk.",
};
