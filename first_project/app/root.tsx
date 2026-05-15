import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "./app.css";

import type { Route } from "./+types/root";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content="Kayes Ahmad - Full Stack Developer" />
        <meta name="theme-color" content="#335C67" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"></link>
        <style>{`
          * {
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            overflow-x: hidden;
          }
          @media (max-width: 640px) {
            body {
              font-size: 14px;
            }
          }
          img {
            max-width: 100%;
            height: auto;
            display: block;
          }
        `}</style>
        <Meta />
        <Links />
      </head>
      <body className="font-[Open_Sans] bg-[#4a5759]">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
