import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import VideoFundo from './components/video_fundo'
import Header from './components/Header'
import BoasVindas from './components/BoasVindas'
import SobreMim from './components/SobreMim'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contatos from './components/Contatos'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scroll-behavior: smooth">
        <VideoFundo />
        <div className="relative z-10 min-h-screen">
          <Header /> 
          <div className="mt-20">

            <BoasVindas />
            <div className="rouded border border-green-600 h-0 mt-20"></div>
            <SobreMim />
            <div className="rouded border border-green-600 h-0 mt-20"></div>
            <Skills />
            <div className="rouded border border-green-600 h-0 mt-20"></div>
            <Projects />
            <div className="rouded border border-green-600 h-0 mt-20"></div>
            <Contatos />
            <Footer />

          </div>
        </div> 
    </div>
  )
}

export default App
