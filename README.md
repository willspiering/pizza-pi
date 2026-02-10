# Pizza Pi

## Get the most dough for your dough (I'm so sorry)

Look, I know what you're thinking. "Did someone really build an entire app just to calculate pizza value?" Yes. Yes, I did. And honestly, it's been life-changing.

Pizza Pi is a web app that does the math you're definitely not doing in your head at 11 PM when you're arguing with your friends about which pizza deal is actually better. It calculates price per slice, price per square inch, and total cost so you can win those arguments with cold, hard pizza data.

## What It Actually Does

Enter your pizza's diameter, price, quantity, and how many slices it has. The app will tell you:

- Price per square inch (because geometry matters, apparently)
- Price per slice (the metric normal people care about)
- Total cost (for when you're ordering for the whole office)
- Total pizza area (for the truly obsessed)

You can save multiple pizza configurations and compare them side by side. Finally, you can prove to your roommate that the 18-inch pizza really IS a better deal than two 12-inchers.

## Features Worth Mentioning

- It's a PWA with offline support, so you can calculate pizza value even when your WiFi is down
- Works on iOS, Android, and regular old web browsers
- You can install it on your phone like a real app (complete with a fancy install prompt)
- Your saved pizza configs stick around in localStorage, so your pizza research is never lost
- Responsive design that works whether you're on your phone or laptop
- Built with vanilla React - no crazy state management libraries or unnecessary complexity

## The Tech Stack (For the Nerds)

- React 16 with TypeScript (because I like knowing what type my pizza variables are)
- Create React App (keeping it simple)
- Styled Components (for that CSS-in-JS goodness)
- Service Workers (for the offline pizza calculations you never knew you needed)
- PWABuilder web components (`@pwabuilder/pwainstall` & `@pwabuilder/pwaupdate`) for easy app installation
- LocalStorage API (your browser remembers your pizza preferences)

## Getting Started

You'll need Node.js (v12 or higher) and either Yarn or npm installed.

### Installation

```bash
# Clone it
git clone https://github.com/yourusername/pizza-pi.git

# Go there
cd pizza-pi

# Install the things
yarn install
```

### Running It Locally

```bash
yarn start
```

Head to [http://localhost:3000](http://localhost:3000) and start calculating. The page reloads automatically when you make changes, which is nice.

### Building for Production

```bash
yarn build
```

Spits out a production-ready build in the `build` folder.

## Available Scripts

- `yarn start` - Development mode
- `yarn build` - Production build
- `yarn test` - Run tests (if you're into that sort of thing)

## Deployment

Currently living at [https://pizza-pi.netlify.app/](https://pizza-pi.netlify.app/) via Netlify. But honestly, it'll work on any static site host - Vercel, GitHub Pages, AWS S3, wherever.

## A Note

Built with Create React App because sometimes the defaults are actually fine.
