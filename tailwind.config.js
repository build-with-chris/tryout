/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '38': '9.5rem',
        '40': '10rem',
        '45': '11.25rem',
        '47': '11.75rem',
        '48': '12rem',
        '50': '12.5rem',
        '52': '13rem',
        '55': '13.75rem',
        '60': '15rem',
        '65': '16.25rem',
        '72': '18rem',
        '78': '19.5rem',
      },
      height: {
        '38': '9.5rem',
        '40': '10rem',
        '42': '10.5rem',
        '45': '11.25rem',
        '47': '11.75rem',
        '48': '12rem',
        '50': '12.5rem',
        '52': '13rem',
        '55': '13.75rem',
        '60': '15rem',
        '65': '16.25rem',
        '72': '18rem',
        '78': '19.5rem',
      },
      size: {
        '40': '10rem',
        '45': '11.25rem',
        '47': '11.75rem',
      },
      zIndex: {
        '1': '1',
      },
      marginTop: {
        '30': '7.5rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

