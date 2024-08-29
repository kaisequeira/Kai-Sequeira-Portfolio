import LenisWrapper from "@/components/_Global/LenisWrapper";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import '../globals.css';
import RedbackDisplay from "@/components/RedbackDisplay";
import Gallery from "@/components/Gallery";

export default function Page() {
    return (
        <main className={`w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <AboutMe />
                <Gallery />
                {/* <RedbackDisplay /> */}

                <Footer />
            </LenisWrapper>
        </main>
    )
}