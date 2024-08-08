import { Plus_Jakarta_Sans } from "next/font/google";
import CustomCursor from "@/components/Global/StickyCursor";
import Home from "@/components/Home";
import './globals.css';
import { StickyCursorProvider } from "@/components/StickyItems/StickyCursorContext";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen`}>
            <StickyCursorProvider>
                <CustomCursor />
                <Home />
            </StickyCursorProvider>
        </main>
    )
}