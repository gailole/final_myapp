// Theme configuration for the application
// This file contains all color-related constants and theme variables

// Main color palette
export const colors = {
  // Primary colors
  deepDark: '#0B0C10',    // Main background, darkest shade
  surface: '#1F2833',     // Cards, modal backgrounds, secondary surfaces
  text: '#C5C6C7',        // Primary text color
  accent: '#66FCF1',      // Primary accent, call-to-action elements
  accentDark: '#45A29E',  // Secondary accent, hover states
} as const;

// Opacity variants for different states
export const opacity = {
  hover: 0.8,
  active: 0.6,
  disabled: 0.4,
  overlay: 0.85,
} as const;

// Gradient definitions
export const gradients = {
  surfaceHover: `linear-gradient(to right, ${colors.surface}, ${colors.accentDark})`,
} as const;

// Shadow definitions with proper color usage
export const shadows = {
  small: `0 2px 4px rgba(11, 12, 16, 0.6)`,
  medium: `0 4px 6px rgba(11, 12, 16, 0.7)`,
  large: `0 4px 15px rgba(11, 12, 16, 0.6)`,
} as const;

// Border definitions
export const borders = {
  subtle: `1px solid rgba(69, 162, 158, 0.2)`,
  medium: `1px solid rgba(69, 162, 158, 0.4)`,
  accent: `1px solid rgba(102, 252, 241, 0.2)`,
} as const;

// Animation timings
export const transitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

// Telegram WebApp theme configuration
export const telegramTheme = {
  backgroundColor: colors.deepDark,
  secondaryBgColor: colors.surface,
  textColor: colors.text,
  hintColor: colors.accent,
  linkColor: colors.accentDark,
  buttonColor: colors.accent,
  buttonTextColor: colors.deepDark,
} as const;