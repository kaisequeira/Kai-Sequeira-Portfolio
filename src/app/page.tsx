import { Plus_Jakarta_Sans } from "next/font/google";
import CustomCursor from "@/components/Global/CustomCursor";
import Home from "@/components/Home";
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
});

export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen`}>
            <CustomCursor />
            <Home />
        </main>
    )
}