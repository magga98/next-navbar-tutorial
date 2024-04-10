import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="container px py mx-auto flex flex-wrap">
      <main className="">
        <div className="mt-24">
          <h1 className="text-center font-Parisienne text-primary flex flex-col items-center text-7xl">Bjarney & Högni</h1>
          <h1 className="font-Parisienne text-primary flex flex-col items-center gap-4 text-4xl my-10">06 . 07 . 2024</h1>
        </div>
        <div className="py-11 h-auto max-w-full bg-no-repeat bg-cover bg-center bg-flowerimage">
          <div className="grid min-h-[140px] w-full place-items-center rounded-lg p-6 lg:overflow-visible">
            <div className="bg-giftingimage bg-cover bg-center rounded-full h-96 w-96 text-center"/>
          </div>
        </div>
        <h2 className="font-Parisienne text-primary flex flex-col items-center gap-4 text-5xl my-10">Brúðkaupið okkar</h2>
        <div className="p-10 w-full bg-plantimage bg-cover bg-no-repeat rounded-lg">
        <div className="font-PlayfairDisplay grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch flex-wrap max-w-3xl min-w-full">
        
          <Link href="/veislan" className="border-solid bg-neutral border-accent border transition rounded-lg
          m-4 p-6 text-left no-underline hover:bg-secondary">
            <h3 className="leading-normal text-2xl">Veislan</h3>
            <p>Fleiri upplýsingar um veisluna.</p>
          </Link>

          <Link href="/athofnin" className="border-solid bg-neutral border-accent border transition rounded-lg
          m-4 p-6 text-left no-underline hover:bg-secondary">
            <h3 className="leading-normal text-2xl">Athöfnin</h3>
            <p>Upplýsingar um athöfnina.</p>
          </Link>

          <Link href="/gjafir" className="border-solid bg-neutral border-accent border transition rounded-lg
          m-4 p-6 text-left no-underline hover:bg-secondary">
            <h3 className="leading-normal text-2xl">Gjafahugmyndir</h3>
            <p>Viljiði fá hugmyndir um gjafir.</p>
          </Link>

          <Link href="/faq" className="border-solid bg-neutral border-accent border transition rounded-lg
          m-4 p-6 text-left no-underline hover:bg-secondary">
            <h3 className="leading-normal text-2xl">Algengar spurningar</h3>
            <p>Svör við ýmsum spurningum.</p>
          </Link>

          <Link href="/sagan" className="border-solid bg-neutral border-accent border transition rounded-lg
          m-4 p-6 text-left no-underline hover:bg-secondary">
            <h3 className="leading-normal text-2xl">Um okkur</h3>
            <p>viltu vita söguna okkar.</p>
          </Link>
        </div>
        </div>
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            PlayfairDisplay,
            Parisienne,
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
