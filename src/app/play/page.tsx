import { Plus_Jakarta_Sans } from "next/font/google";
import ResetScrollButton from "@/components/_Global/ResetScrollButton";
import LenisWrapper from "@/components/_Global/LenisWrapper";
import Footer from "@/components/Footer";
import Play from "@/components/Play";
import '../globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <Play />
                <Footer />
                <ResetScrollButton />
            </LenisWrapper>
        </main>
    )
}