import NavBar from "./_components/NavBar";
import "@/app/_styles/global.css";
import { Dosis } from "next/font/google";
import Footer from "./_components/home/Footer";

export const metadata = {
  title: "Home",
  description: "Watch shop home page",
};

// ✅ Load Dosis font properly
const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"], // Choose the weights you need
  variable: "--font-dosis", // Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between gap-12 ${dosis.className} h-[100dvh] `}
      >
        {/* <div className="flex flex-col items-center w-full max-w-[65%]"> */}
        {/* <div className="flex flex-col"> */}
        <div className="flex w-[100%] justify-center">
          <div className="flex items-center w-full max-w-[65%]  justify-start">
            <NavBar />
          </div>
        </div>
        <main className=" ">{children}</main>
        {/* </div> */}
        {/* //*FOOTER */}
        <div className=" flex w-[100%] justify-center  bg-amber-100 bg-opacity-40 ">
          <div className="flex items-center w-full max-w-[65%]  justify-center">
            <Footer />
          </div>
        </div>
        {/* </div> */}
      </body>
    </html>
  );
}
