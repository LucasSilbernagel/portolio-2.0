export const PROJECTS = [
  {
    name: 'Super Simon',
    year: '2023',
    description:
      'The classic memory game Simon, with a twist! How long of a sequence can you remember? Super Simon is a Progressive Web App that can be played on the web, installed on your device, and even played offline! Includes unit tests (Jest, React Testing Library) and e2e tests (Playwright).',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Redux',
      'Firebase',
    ],
    github: 'https://github.com/LucasSilbernagel/super-simon',
    liveLink: 'https://super-simon-kappa.vercel.app/',
    imageFileName: 'super-simon.png',
  },
  {
    name: 'NexaTech',
    year: '2023',
    description:
      'A website for a fictional tech company. This is the first project I built using React Server Components, and also the first project I built with Sanity CMS.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
    github: 'https://github.com/LucasSilbernagel/NexaTech',
    liveLink: 'https://nexa-tech.vercel.app/',
    imageFileName: 'nexaTech.png',
  },
  {
    name: 'ReykrMusic.com',
    year: '2023',
    description:
      'A website for Reykr, an electronic music producer and DJ. Includes unit tests and a three.js background animation.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ReykrMusic/reykr-music-v3',
    liveLink: 'https://www.reykrmusic.com/',
    imageFileName: 'reykrMusic.png',
  },
  {
    name: 'Quinn Bonnett, RMT',
    year: '2023',
    description:
      'Freelance business website built for Quinn Bonnett, a Registered Massage Therapist.',
    techStack: ['Gatsby', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
    github: 'https://github.com/LucasSilbernagel/quinn-rmt',
    liveLink: 'https://quinnbonnettrmt.com/',
    imageFileName: 'quinnBonnettRMT.png',
  },
  {
    name: 'Portfolio 2.0',
    year: '2022',
    description: 'The second iteration of my web development portfolio.',
    techStack: ['Gatsby', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/LucasSilbernagel/portolio-2.0',
    liveLink: 'https://lucassilbernagel.com/',
    imageFileName: '',
  },
  {
    name: 'Tasty',
    year: '2022',
    description:
      'A multi-page website of tasty recipes, inspired by Delish.com. Content is saved and provided by Strapi CMS, with images and video hosted in Cloudinary.',
    techStack: ['Gatsby', 'React', 'TypeScript', 'Strapi', 'Tailwind'],
    github: 'https://github.com/LucasSilbernagel/tasty',
    liveLink: 'https://symphonious-croquembouche-c45916.netlify.app/',
    imageFileName: 'tasty.png',
  },
  {
    name: 'Been There, Done That',
    year: '2022',
    description:
      'A travel destination log. City and tourist attraction data is provided by the Geoapify Places API and converted to GraphQL with Apollo Server and Apollo Client.',
    techStack: [
      'React',
      'TypeScript',
      'GraphQL',
      'Apollo Client',
      'Apollo Server',
      'REST API',
      'MUI',
      'Mapbox',
    ],
    github: 'https://github.com/LucasSilbernagel/bt-dt',
    liveLink: 'https://shiny-gecko-cc92d2.netlify.app/',
    imageFileName: 'btdt.png',
  },
  {
    name: 'Keep Clone',
    year: '2022',
    description:
      'A clone of Google Keep built with the MERN stack. Replicates the web app on larger screens and the mobile app on smaller screens. Includes Google authentication and unit tests. Components are documented with Storybook.',
    techStack: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'TypeScript',
      'MUI',
      'Recoil',
    ],
    github: 'https://github.com/LucasSilbernagel/keep-clone',
    liveLink: 'https://glowing-moonbeam-f2cd62.netlify.app/',
    imageFileName: 'keepClone.png',
  },
  {
    name: 'Weather Dash',
    year: '2022',
    description:
      'A simple weather dashboard build with React, TypeScript, and a REST API. Search for and view a five day weather forecast for any city. Includes unit tests (Jest, React Testing Library), e2e tests (Cypress), and state management (Recoil).',
    techStack: [
      'React',
      'TypeScript',
      'REST API',
      'Recoil',
      'MUI',
      'react-icons',
      'Storybook',
    ],
    github: 'https://github.com/LucasSilbernagel/weather-dash',
    liveLink: 'https://lucassilbernagel.github.io/weather-dash/',
    imageFileName: 'weatherDash.png',
  },
  {
    name: 'Word Game DB',
    year: '2021',
    description:
      'A read-only REST API built with the MERN stack, Word Game DB is intended to be used for educational purposes by anyone who would like to practice their coding skills by building a word game that incorporates an API.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Styled Components'],
    github: 'https://github.com/LucasSilbernagel/wordGameDB',
    liveLink: 'https://www.wordgamedb.com/',
    imageFileName: '',
  },
  {
    name: 'Rocket Vision',
    year: '2020',
    description:
      'A custom WordPress theme for a digital agency website, based on a Photoshop design.',
    techStack: ['WordPress', 'PHP', 'CSS3', 'JavaScript', 'jQuery'],
    github: 'https://github.com/LucasSilbernagel/rocketVision',
    liveLink: 'https://rocket-vision-demo.000webhostapp.com/',
    imageFileName: '',
  },
  {
    name: 'bestFlix',
    year: '2020',
    description:
      'Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and vote for your favourites on the official list of nominees.',
    techStack: ['React', 'Firebase', 'Rest API', 'SCSS'],
    github: 'https://github.com/LucasSilbernagel/bestFlix',
    liveLink: 'https://lucassilbernagel.github.io/bestFlix/',
    imageFileName: '',
  },
  {
    name: 'Hangman',
    year: '2020',
    description:
      'A simple and accessible game of Hangman built with Vanilla JavaScript.',
    techStack: ['JavaScript', 'HTML5', 'SCSS', 'Rest API'],
    github: 'https://github.com/LucasSilbernagel/hangman',
    liveLink: 'https://lucassilbernagel.github.io/hangman/',
    imageFileName: '',
  },
  {
    name: 'Portfolio 1.0',
    year: '2020',
    description: 'The first iteration of my web development portfolio.',
    techStack: ['JavaScript', 'HTML5', 'SCSS'],
    github: 'https://github.com/LucasSilbernagel/portolio-1.0',
    liveLink: 'https://lucassilbernagel.github.io/portolio-1.0/',
    imageFileName: '',
  },
  {
    name: 'Battle Rockets!',
    year: '2020',
    description:
      'A two-player battleship game that uses SpaceX rockets instead of battleships, with data pulled from the SpaceX Rocket API.',
    techStack: ['React', 'Rest API', 'SCSS'],
    github: 'https://github.com/rocketBattle/battleRockets',
    liveLink: 'https://rocketbattle.github.io/battleRockets/',
    imageFileName: '',
  },
  {
    name: 'MyUser',
    year: '2020',
    description:
      'User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. This app allows you to create a user persona for one or more of your users, or look at others that have been saved to the page with Firebase.',
    techStack: ['React', 'Firebase', 'SCSS'],
    github: 'https://github.com/LucasSilbernagel/my-user',
    liveLink: 'https://lucassilbernagel.github.io/my-user/',
    imageFileName: '',
  },
  {
    name: 'Trivia Quest',
    year: '2020',
    description: 'A trivia game based on Trivial Pursuit.',
    techStack: ['jQuery', 'REST API', 'HTML5', 'SCSS'],
    github: 'https://github.com/heatherAndLucas/triviaQuest',
    liveLink: 'https://heatherandlucas.github.io/triviaQuest/',
    imageFileName: '',
  },
  {
    name: 'Speedy Click!',
    year: '2020',
    description:
      'Speedy Click is a simple click counter game. See how many times you can click in 10 seconds! Players can either click their screen or use their keyboard space bar. Features simple CSS animations.',
    techStack: ['jQuery', 'SCSS', 'CSS3', 'HTML5'],
    github: 'https://github.com/LucasSilbernagel/speedyClick',
    liveLink: 'https://lucassilbernagel.github.io/speedyClick/',
    imageFileName: '',
  },
  {
    name: 'Sunshine',
    year: '2020',
    description:
      'A fully responsive, pixel-perfect recreation of a Photoshop design. Only the desktop design was provided to me, the tablet and mobile views are my own design. This was the first project where I used SCSS/SASS.',
    techStack: ['HTML5', 'SCSS'],
    github: 'https://github.com/LucasSilbernagel/sunshine',
    liveLink: 'https://lucassilbernagel.github.io/sunshine/',
    imageFileName: '',
  },
  {
    name: 'Bikerland',
    year: '2020',
    description:
      'Bikerland is a single-page conversion of a Photoshop design built with HTML5 and CSS3. The challenge for this project was to build it without Flexbox or Grid, i.e., only floats.',
    techStack: ['HTML5', 'CSS3'],
    github: 'https://github.com/LucasSilbernagel/bikerland',
    liveLink: 'https://lucassilbernagel.github.io/bikerland/',
    imageFileName: '',
  },
  {
    name: 'Currency Exchange!',
    year: '2020',
    description:
      'A currency conversion app. This is the first app I built that incorporated an API. Currency data is updated daily.',
    techStack: ['jQuery', 'HTML5', 'CSS3', 'REST API'],
    github: 'https://github.com/LucasSilbernagel/currency',
    liveLink: 'https://lucassilbernagel.github.io/currency/',
    imageFileName: '',
  },
  {
    name: 'ice-cream',
    year: '2020',
    description:
      'A simple website for an ice cream parlour. This was my very first programming app! I used jQuery to program the newsletter signup features.',
    techStack: ['jQuery', 'HTML5', 'CSS3'],
    github: 'https://github.com/LucasSilbernagel/ice-cream',
    liveLink: 'https://lucassilbernagel.github.io/ice-cream/',
    imageFileName: '',
  },
  {
    name: 'Treasurie',
    year: '2019',
    description:
      'One of the first coding projects I ever built, a pixel-perfect recreation of a Photoshop design.',
    techStack: ['HTML5', 'CSS3'],
    github: 'https://github.com/LucasSilbernagel/treasurie',
    liveLink: 'https://lucassilbernagel.github.io/treasurie/',
    imageFileName: '',
  },
]

// Project screenshots: 1470px x 900px
