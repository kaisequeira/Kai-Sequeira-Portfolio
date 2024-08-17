import { Plus_Jakarta_Sans } from "next/font/google";
import ResetScrollButton from "@/components/_Global/ResetScrollButton";
import LenisWrapper from "@/components/_Global/LenisWrapper";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import '../globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <AboutMe />
                <Footer />
                <ResetScrollButton />
            </LenisWrapper>
        </main>
    )
}