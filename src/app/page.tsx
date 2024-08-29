import Home from "@/components/Home";
import LenisWrapper from "@/components/_Global/LenisWrapper";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ResetScrollButton from "@/components/_Global/ResetScrollButton";
import './globals.css';

export default function Page() {
    return (
        <main className={`w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <Home />
                <Projects />
                <Footer />
                <ResetScrollButton />
            </LenisWrapper>
        </main>
    )
}