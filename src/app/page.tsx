import LenisWrapper from '@/components/_Global/LenisWrapper'
import Footer from '@/components/Footer'
import ResetScrollButton from '@/components/_Global/ResetScrollButton'
import './globals.css'
import { GameProvider } from '@/components/PhysicsGame/GameContext'
import Content from '@/components/_Global/Content'

export default function Page() {
    return (
        <main className={`w-screen flex flex-col bg-bgr`}>
            <LenisWrapper>
                <GameProvider>
                    <Content />
                    <Footer />
                    <ResetScrollButton />
                </GameProvider>
            </LenisWrapper>
        </main>
    )
}
