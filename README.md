## Welcome

👋 Hi, my name is Terris and this is my portfolio website repository.<br/>
Visit the website at: [https://terris-portfolio.vercel.app/](https://terris-portfolio.vercel.app/)
And documentation here: [https://terristwj.github.io/Portfolio/](https://terristwj.github.io/Portfolio/)

### Introduction

This portfolio site was created using [Next.js](https://nextjs.org/), and others.

### (Main) Tech Stack

<table>
    <tr>
        <th align="left">
            <a href="https://nextjs.org/">
                Next.js
            </a>
        </th>
        <td>Frontend</td>
        <td>Backend</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://tailwindcss.com/">
                TailwindCSS
            </a>
        </th>
        <td>Styling</td>
        <td></td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.framer.com/motion/">
                Framer Motion
            </a>
            </th>
        <td>Animations</td>
        <td>Transitions</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://vercel.com/">
                Vercel
            </a>
        </th>
        <td>Cloud Hosting</td>
        <td>Website Provider</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://github.com/vercel/storage/tree/main/packages/postgres">
                Vercel Postgres DB
            </a>
        </th>
        <td>Cloud Database</td>
        <td>Database Provider</td>
    </tr>
</table>

### (Others) Tech Stack Dependencies

<table>
    <!-- UI Components - Start -->
    <tr>
        <th colspan="3" align="left">UI Components</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://headlessui.com/">
                React headlessUI
            </a>
        </th>
        <td>UI Library</td>
        <td>Transitions</td>
    </tr>
    <!-- UI Components - END -->
    <!-- Framer Motion - Start -->
    <tr>
        <th colspan="3" align="left">Framer Motion</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/@motionone/utils">
                @motionone/utils
            </a>
        </th>
        <td>Framer Motion</td>
        <td>Utility</td>
    </tr>
    <!-- Framer Motion - END -->
    <!-- Icons - Start -->
    <tr>
        <th colspan="3" align="left">Icons</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://heroicons.com/">
                Hero Icons
            </a>
        </th>
        <td>Tailwind Icons</td>
        <td>Hamburger Icon</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://reactsvgicons.com/search?q=mail">
                React SVG Icons
            </a>
        </th>
        <td>React Icons</td>
        <td>Social Media Icons</td>
    </tr>
    <!-- Icons - END -->
    <!-- Fonts - Start -->
    <tr>
        <th colspan="3" align="left">Fonts</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://fonts.google.com/">
                Google Fonts
            </a>
        </th>
        <td>Fonts Library</td>
        <td></td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/react-simple-typewriter">
                react-simple-typewriter
            </a>
        </th>
        <td>Typewriter Effect</td>
        <td></td>
    </tr>
    <!-- Fonts - END -->
    <!-- Guestbook - Start -->
    <tr>
        <th colspan="3" align="left">Guestbook Page</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/random-animal-name">
                random-animal-name
            </a>
        </th>
        <td>Name generation</td>
        <td>Used With Cookies</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/bad-words">
                bad-words
            </a>
        </th>
        <td>Filter Flagged Words</td>
        <td>First Filter Layer</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://platform.openai.com/">
                OpenAI API
            </a>
        </th>
        <td>AI Sentimental Filter</td>
        <td>Second Filter Layer</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/random-number">
                random-number
            </a>
        </th>
        <td>Random Number</td>
        <td>Min/Max Integer/Float</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://picsum.photos/">
                Lorem Picsum
            </a>
        </th>
        <td>Random Images</td>
        <td>URL API</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://www.npmjs.com/package/axios">
                Axios
            </a>
        </th>
        <td>API Connector</td>
        <td>API Handler</td>
    </tr>
    <!-- Guestbook - END -->
    <!-- Vercel - Start -->
    <tr>
        <th colspan="3" align="left">Vercel Dependencies</th>
    </tr>
    <tr>
        <th align="left">
            <a href="https://vercel.com/docs/analytics">
                Vercel Web Analytics
            </a>
        </th>
        <td>Web Analytics</td>
        <td>Visitors Count</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://vercel.com/docs/speed-insights">
                Vercel Speed Insights
            </a>
        </th>
        <td>Web Performance</td>
        <td>Countries Performance</td>
    </tr>
    <tr>
        <th align="left">
            <a href="https://vercel.com/docs/storage/vercel-postgres">
                Vercel Postgres Database
            </a>
        </th>
        <td>Postgres Database</td>
        <td>Cloud Database</td>
    </tr>
    <!-- Vercel - END -->
</table>

### Project's Vercel Postgres DB Documentation

In this project,

1. Ensure a Vercel Postgres Database (V-PG-DB) is created

2. Add every `POSTGRES_<item>` into `.env` to connect to V-PG-DB

3. In Vercel UI Dashboard, use the console commands to debug:
    - `SELECT * FROM messages;`
    - `SELECT * FROM messages ORDER BY created_at DESC;`
    - `DELETE FROM messages;`
    - Example
        - `SELECT * FROM messages WHERE username = "Bossy Gnat" and (message !="fishy\\" and message != "omg" and message !="<h1>hey</h1>" and message !="<br/>");`
4. In the backend, follow the documentation to use @vercel/postgres
    - https://github.com/vercel/storage/tree/main/packages/postgres#readme

### Vercel Add-ons Documentation

-   [Speed Insights](https://vercel.com/docs/speed-insights)
    -   `npm i @vercel/speed-insights`
-   [Web Analytics](https://vercel.com/docs/analytics)
    -   `npm i @vercel/analytics`
-   [Postgres Database](https://vercel.com/docs/storage/vercel-postgres)
    -   `npm i @vercel/postgres`

### OpenAI API Documentation

In this project,

1. Ensure a OpenAI API account is created and configured

2. Add your `OPENAI_APIKEY` into `.env`

3. In the backend, follow the documentation to use OpenAI API

    - https://platform.openai.com/docs/api-reference/introduction

### References

1.  Main Tutorial

    1. [Build a modern Portfolio Website with NextJS - Youtube](https://www.youtube.com/watch?v=l0pkuHopo8A)
    2. [Github Reference](https://github.com/ski043/portfolio-yt/blob/main/app/page.tsx)

2.  Portfolio References

    1.  [How to Create a Stunning Portfolio Website with Nextjs, Tailwind CSS and Framer-motion🌟](https://www.youtube.com/watch?v=Yw7yWHigGKI&t=214s)

        1. [Demo Website](https://minimal-nextjs-portfolio-website.vercel.app/about)
        2. [GitHub Starter Code](https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code)

    2.  [On-Scroll Reveal Animation with React & Framer Motion](https://www.youtube.com/watch?v=hjbxaYTMhy0)

        1. [Demo Website](https://steam-portfolio-demo.vercel.app/)

    3.  [Brittany Chiang](https://github.com/bchiang7/v4)

3.  Additional References

    1.  [Hover.dev](https://www.hover.dev/)
        -   Animated UI Components for React & Tailwind
    2.  [Animated tabs](https://buildui.com/recipes/animated-tabs)

4.  Technical References
    1. [Window is not defined](https://bobbyhadz.com/blog/javascript-referenceerror-window-is-not-defined)
    2. [Unsplash image from keyword api](https://dev.to/koshirok096/get-an-unsplash-image-dynamically-according-to-the-random-keyword-api-3n75#:~:text=Also%2C%20besides%20that%20you%20designate,some%20filters%20to%20this%20URL.)
    3. [NextJS meta data](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## Boilerplate Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

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

### Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
