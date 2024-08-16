import { Plus_Jakarta_Sans } from "next/font/google";
import Home from "@/components/Home";
import Technologies from "@/components/Technologies";
import './globals.css';
import LenisWrapper from "@/components/Global/LenisWrapper";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ResetScrollButton from "@/components/Global/ResetScrollButton";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <Home />
                {/* <Technologies /> */}
                {/* <AboutMe /> */}
                <Projects />
                <Footer />
                <ResetScrollButton />
            </LenisWrapper>
        </main>
    )
}