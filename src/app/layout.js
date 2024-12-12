import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";


export const metadata = {
  title: "Subscribe",
  description: "I am Ajay Alagesan",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={''}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
