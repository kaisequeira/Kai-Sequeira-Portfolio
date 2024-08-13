import { Plus_Jakarta_Sans } from "next/font/google";
import { StickyCursorProvider } from "@/components/Global/StickyCursorContext";
import CustomCursor from "@/components/Global/StickyCursor";
import Home from "@/components/Home";
import Technologies from "@/components/Technologies";
import './globals.css';
import LenisWrapper from "@/components/Global/LenisWrapper";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen flex flex-col`}>
            <LenisWrapper>
                <StickyCursorProvider>
                    <CustomCursor />
                    <Home />
                    <Technologies />
                    <AboutMe />
                    <Footer />
                </StickyCursorProvider>
            </LenisWrapper>
        </main>
    )
}