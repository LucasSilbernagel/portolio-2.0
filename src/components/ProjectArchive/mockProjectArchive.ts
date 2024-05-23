export const MOCK_PROJECT_ARCHIVE_QUERY = {
  allSanityProject: {
    nodes: [
      {
        name: 'Super Simon',
        year: 2023,
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
        githubProjectLink: 'https://github.com/LucasSilbernagel/super-simon',
        liveLink: 'https://super-simon-kappa.vercel.app/',
      },
      {
        name: 'NexaTech',
        year: 2020,
        description:
          'A website for a fictional tech company. This is the first project I built using React Server Components, and also the first project I built with Sanity CMS.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/NexaTech',
        liveLink: 'https://nexa-tech.vercel.app/',
      },
      {
        name: 'ReykrMusic.com',
        year: 2023,
        description:
          'A website for Reykr, an electronic music producer and DJ. Includes unit tests and a three.js background animation.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
        githubProjectLink: 'https://github.com/ReykrMusic/reykr-music-v3',
        liveLink: 'https://www.reykrmusic.com/',
      },
      {
        name: 'Quinn Bonnett, RMT',
        year: 2023,
        description:
          'Freelance business website built for Quinn Bonnett, a Registered Massage Therapist.',
        techStack: ['Gatsby', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/quinn-rmt',
        liveLink: 'https://quinnbonnettrmt.com/',
      },
      {
        name: 'Portfolio 2.0',
        year: 2022,
        description:
          'The second iteration of my software development portfolio.',
        techStack: ['Gatsby', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/portolio-2.0',
        liveLink: 'https://meek-cannoli-5408ac.netlify.app/',
      },
      {
        name: 'Tasty',
        year: 2022,
        description:
          'A multi-page website of tasty recipes, inspired by Delish.com. Content is saved and provided by Strapi CMS, with images and video hosted in Cloudinary.',
        techStack: ['Gatsby', 'React', 'TypeScript', 'Strapi', 'Tailwind'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/tasty',
        liveLink: 'https://symphonious-croquembouche-c45916.netlify.app/',
      },
      {
        name: 'Been There, Done That',
        year: 2022,
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
        githubProjectLink: 'https://github.com/LucasSilbernagel/bt-dt',
        liveLink: 'https://shiny-gecko-cc92d2.netlify.app/',
      },
      {
        name: 'Keep Clone',
        year: 2022,
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
        githubProjectLink: 'https://github.com/LucasSilbernagel/keep-clone',
        liveLink: 'https://glowing-moonbeam-f2cd62.netlify.app/',
      },
      {
        name: 'Weather Dash',
        year: 2022,
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
        githubProjectLink: 'https://github.com/LucasSilbernagel/weather-dash',
        liveLink: 'https://lucassilbernagel.github.io/weather-dash/',
      },
      {
        name: 'Word Game DB',
        year: 2021,
        description:
          'A read-only REST API built with the MERN stack, Word Game DB is intended to be used for educational purposes by anyone who would like to practice their coding skills by building a word game that incorporates an API.',
        techStack: [
          'MongoDB',
          'Express',
          'React',
          'Node.js',
          'Styled Components',
        ],
        githubProjectLink: 'https://github.com/LucasSilbernagel/wordGameDB',
        liveLink: 'https://www.wordgamedb.com/',
      },
      {
        name: 'Rocket Vision',
        year: 2020,
        description:
          'A custom WordPress theme for a digital agency website, based on a Photoshop design.',
        techStack: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/rocketVision',
        liveLink: 'https://rocket-vision-demo.000webhostapp.com/',
      },
      {
        name: 'bestFlix',
        year: 2020,
        description:
          'Welcome to bestFlix, the best movies of all time as voted by you! Search for and nominate up to four movies, and vote for your favourites on the official list of nominees.',
        techStack: ['React', 'Firebase', 'REST API', 'SCSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/bestFlix',
        liveLink: 'https://lucassilbernagel.github.io/bestFlix/',
      },
      {
        name: 'Hangman',
        year: 2020,
        description:
          'A simple and accessible game of Hangman built with Vanilla JavaScript.',
        techStack: ['JavaScript', 'HTML', 'SCSS', 'REST API'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/hangman',
        liveLink: 'https://lucassilbernagel.github.io/hangman/',
      },
      {
        name: 'Portfolio 1.0',
        year: 2020,
        description:
          'The first iteration of my software development portfolio.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/portolio-1.0',
        liveLink: 'https://lucassilbernagel.github.io/portolio-1.0/',
      },
      {
        name: 'Battle Rockets!',
        year: 2020,
        description:
          'A two-player battleship game that uses SpaceX rockets instead of battleships, with data pulled from the SpaceX Rocket API.',
        techStack: ['React', 'REST API', 'SCSS'],
        githubProjectLink: 'https://github.com/rocketBattle/battleRockets',
        liveLink: 'https://rocketbattle.github.io/battleRockets/',
      },
      {
        name: 'MyUser',
        year: 2020,
        description:
          'User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. This app allows you to create a user persona for one or more of your users, or look at others that have been saved to the page with Firebase.',
        techStack: ['React', 'Firebase', 'SCSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/my-user',
        liveLink: 'https://lucassilbernagel.github.io/my-user/',
      },
      {
        name: 'Trivia Quest',
        year: 2020,
        description: 'A trivia game based on Trivial Pursuit.',
        techStack: ['jQuery', 'REST API', 'HTML', 'SCSS'],
        githubProjectLink: 'https://github.com/heatherAndLucas/triviaQuest',
        liveLink: 'https://heatherandlucas.github.io/triviaQuest/',
      },
      {
        name: 'Speedy Click!',
        year: 2020,
        description:
          'Speedy Click is a simple click counter game. See how many times you can click in 10 seconds! Players can either click their screen or use their keyboard space bar. Features simple CSS animations.',
        techStack: ['jQuery', 'SCSS', 'CSS3', 'HTML'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/speedyClick',
        liveLink: 'https://lucassilbernagel.github.io/speedyClick/',
      },
      {
        name: 'Sunshine',
        year: 2020,
        description:
          'A fully responsive, pixel-perfect recreation of a Photoshop design. Only the desktop design was provided to me, the tablet and mobile views are my own design. This was the first project where I used SCSS/SASS.',
        techStack: ['HTML', 'SCSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/sunshine',
        liveLink: 'https://lucassilbernagel.github.io/sunshine/',
      },
      {
        name: 'Bikerland',
        year: 2020,
        description:
          'Bikerland is a single-page conversion of a Photoshop design built with HTML and CSS. The challenge for this project was to build it without Flexbox or CSS Grid, i.e., only floats.',
        techStack: ['HTML', 'CSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/bikerland',
        liveLink: 'https://lucassilbernagel.github.io/bikerland/',
      },
      {
        name: 'Currency Exchange!',
        year: 2020,
        description:
          'A currency conversion app. This is the first app I built that incorporated an API. Currency data is updated daily.',
        techStack: ['jQuery', 'HTML', 'CSS', 'REST API'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/currency',
        liveLink: 'https://lucassilbernagel.github.io/currency/',
      },
      {
        name: 'ice-cream',
        year: 2020,
        description:
          'A simple website for an ice cream parlour. This was my very first programming app! I used jQuery to program the newsletter signup features.',
        techStack: ['jQuery', 'HTML', 'CSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/ice-cream',
        liveLink: 'https://lucassilbernagel.github.io/ice-cream/',
      },
      {
        name: 'Treasurie',
        year: 2019,
        description:
          'One of the first coding projects I ever built, a pixel-perfect recreation of a Photoshop design.',
        techStack: ['HTML', 'CSS'],
        githubProjectLink: 'https://github.com/LucasSilbernagel/treasurie',
        liveLink: 'https://lucassilbernagel.github.io/treasurie/',
      },
    ],
  },
}
