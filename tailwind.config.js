module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trustworthy Medical Blue
        primary: {
          DEFAULT: "#2E86AB", // trustworthy-blue
          50: "#EBF4F8", // trustworthy-blue-50
          100: "#D7E9F1", // trustworthy-blue-100
          200: "#AFD3E3", // trustworthy-blue-200
          300: "#87BDD5", // trustworthy-blue-300
          400: "#5FA7C7", // trustworthy-blue-400
          500: "#2E86AB", // trustworthy-blue-500
          600: "#256B89", // trustworthy-blue-600
          700: "#1C5067", // trustworthy-blue-700
          800: "#133545", // trustworthy-blue-800
          900: "#0A1A23", // trustworthy-blue-900
        },
        // Secondary Colors - Deep Trust
        secondary: {
          DEFAULT: "#1B5E7A", // deep-trust
          50: "#E8F1F5", // deep-trust-50
          100: "#D1E3EB", // deep-trust-100
          200: "#A3C7D7", // deep-trust-200
          300: "#75ABC3", // deep-trust-300
          400: "#478FAF", // deep-trust-400
          500: "#1B5E7A", // deep-trust-500
          600: "#164B62", // deep-trust-600
          700: "#103849", // deep-trust-700
          800: "#0B2531", // deep-trust-800
          900: "#051218", // deep-trust-900
        },
        // Accent Colors - Optimistic Orange
        accent: {
          DEFAULT: "#F18F01", // optimistic-orange
          50: "#FEF7E6", // optimistic-orange-50
          100: "#FDEFCD", // optimistic-orange-100
          200: "#FBDF9B", // optimistic-orange-200
          300: "#F9CF69", // optimistic-orange-300
          400: "#F7BF37", // optimistic-orange-400
          500: "#F18F01", // optimistic-orange-500
          600: "#C17301", // optimistic-orange-600
          700: "#915701", // optimistic-orange-700
          800: "#613B00", // optimistic-orange-800
          900: "#301E00", // optimistic-orange-900
        },
        // Background Colors
        background: "#FAFBFC", // clean-canvas
        surface: "#FFFFFF", // pure-white
        // Text Colors
        text: {
          primary: "#1A202C", // high-contrast
          secondary: "#4A5568", // supporting-gray
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // health-green
          50: "#F0FFF4", // health-green-50
          100: "#C6F6D5", // health-green-100
          200: "#9AE6B4", // health-green-200
          300: "#68D391", // health-green-300
          400: "#48BB78", // health-green-400
          500: "#38A169", // health-green-500
          600: "#2F855A", // health-green-600
          700: "#276749", // health-green-700
          800: "#22543D", // health-green-800
          900: "#1C4532", // health-green-900
        },
        warning: {
          DEFAULT: "#D69E2E", // gentle-attention
          50: "#FFFBEB", // gentle-attention-50
          100: "#FEF5E7", // gentle-attention-100
          200: "#FEEBC8", // gentle-attention-200
          300: "#FBD38D", // gentle-attention-300
          400: "#F6AD55", // gentle-attention-400
          500: "#D69E2E", // gentle-attention-500
          600: "#B7791F", // gentle-attention-600
          700: "#975A16", // gentle-attention-700
          800: "#744210", // gentle-attention-800
          900: "#5F370E", // gentle-attention-900
        },
        error: {
          DEFAULT: "#E53E3E", // clear-concern
          50: "#FED7D7", // clear-concern-50
          100: "#FEB2B2", // clear-concern-100
          200: "#FC8181", // clear-concern-200
          300: "#F56565", // clear-concern-300
          400: "#E53E3E", // clear-concern-400
          500: "#C53030", // clear-concern-500
          600: "#9B2C2C", // clear-concern-600
          700: "#742A2A", // clear-concern-700
          800: "#63171B", // clear-concern-800
          900: "#521B1B", // clear-concern-900
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // neutral-border
          focus: "#2E86AB", // trustworthy-blue
        },
        // Gray Scale for additional utility
        gray: {
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'gentle-bounce': 'gentleBounce 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -5px, 0)' },
          '70%': { transform: 'translate3d(0, -3px, 0)' },
          '90%': { transform: 'translate3d(0, -1px, 0)' },
        },
      },
    },
  },
  plugins: [],
}