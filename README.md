# Portfolio 2.0

The second iteration of my software development portfolio.

![Screen Shot 2024-03-14 at 15 58 33](https://github.com/LucasSilbernagel/portolio-2.0/assets/57023164/33b7fcb1-e6a5-4d21-abfb-fd5f4f4f067e)

## Live link

https://lucassilbernagel.com/

## Tech stack

### Front End

- [Gatsby](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [animate.css](https://animate.style/)
- [react-animation-on-scroll](https://www.npmjs.com/package/react-animation-on-scroll)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-smooth-collapse](https://www.npmjs.com/package/react-smooth-collapse)
- [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller)
- [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)
- [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [focus-trap-react](https://www.npmjs.com/package/focus-trap-react)

### Linting & Formatting

- [eslint-config-lucas-silbernagel](https://www.npmjs.com/package/eslint-config-lucas-silbernagel)

## Run Locally

### Prerequisites

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: https://nodejs.org/en/

### Clone the repository

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/LucasSilbernagel/portfolio-2.0.git`

Then `cd` into the project folder and open it in your code editor. For Visual Studio Code:

`cd portfolio-2.0`
`code .`

### Environment variables

Create a [Formspark](https://formspark.io/) ID for the website contact form. In the project codebase, create a `.env.production` file and a `.env.development` file. In each file, add `GATSBY_FORMSPARK_ID=your_formspark_id`.

### Install dependencies

To install all of the required dependencies, run `npm install`.

### Start up the app

To start up the app locally, run `npm start` in your terminal. Your terminal should indicate a `localhost` URL at which you can view the app in your browser.

## Testing

### Unit Tests

Unit tests are written with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/).

Use `npm test` to run all unit tests, or use `npm test SomeFileToRun` to run a specific test file.

## Design inspiration
- [https://brittanychiang.com/](https://brittanychiang.com/)
