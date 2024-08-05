import Home from "@/components/Home";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['400', '700'],
});


export default function Page() {
    return (
        <main className={`${jakartaSans.className} w-screen`}>
            <Home />
        </main>
    )
}