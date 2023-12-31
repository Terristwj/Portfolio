This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Terris Tan

Portfolio
Visit at: https://terristwj.github.io/Portfolio/

### References

1.  Tutorial

    1. [Build a modern Portfolio Website with NextJS - Youtube](https://www.youtube.com/watch?v=l0pkuHopo8A)
    2. [Github Reference](https://github.com/ski043/portfolio-yt/blob/main/app/page.tsx)

2.  UI/UX Styling

    1.  UI Components

        1. [React headlessUI](https://headlessui.com/) - UI & Transition
        2. [React Framer Motion](https://www.framer.com/) - Animation
            - npm i @motionone/utils

    2.  Icons

        1. [Tailwind Icons](https://heroicons.com/) - Hamburger Icon
        2. [React Icons](https://reactsvgicons.com/search?q=mail) - Github & LinkedIn Icons

    3.  Styling

        1. [Google fonts](https://fonts.google.com/)
        2. [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)

3.  Guestbook page
    1.  Cookies with [random-animal-name](https://www.npmjs.com/package/random-animal-name)
    2.  [bad-words](https://www.npmjs.com/package/bad-words) and [OpenAI API](https://platform.openai.com/)
    3.  [PlanetScale](https://planetscale.com/) - Prisma Database
        -   `.env` -> `DATABASE_URL`
        -   `schema.prisma`
        -   CLI -> `npx prisma db push`
        -   [Prisma best practice with NextJS](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)
        -   Console commands
            -   `SELECT * FROM Guestbook;`
            -   `DELETE FROM Guestbook;`
