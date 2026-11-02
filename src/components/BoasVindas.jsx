import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoLinkedinSquare, BiLogoWhatsapp, BiRightArrowAlt } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";


const BoasVindas = () => {
    return ( 
        <section id="home" className="min-h-screen flex flex-col items-center justify-center lg:justify-around lg:flex-row-reverse scroll-mt-24">
                
            <div>
                <img src="/eu.jpeg" alt="eu" className=" object-cover object-[-0px_-115px] lg:object-[-0px_-145px] w-60 h-60 rounded-full border border-green-500 lg:w-80 lg:h-80 shadow-[0_0_15px_rgba(6,182,212,0.5)] shadow-green-400"/>
            </div>

            <div className="w-full flex flex-col items-center lg:w-[40%] lg:items-start">

                <div className="mt-10">
                    <p className="text-green-500 mb-10 lg:text-3xl">&gt;_ SYSTEM ONLINE</p>
                    <p className="text-green-200 mb-5">Bem vindo(a) ao meu portfolio pessoal! eu sou </p>
                    <h1 className=
                    "font-extrabold text-3xl bg-linear-to-r from-green-600 via-green-500 via-green-400 to-green-300 bg-clip-text text-transparent mb-2 ">URIEL B. RODRIGUES</h1>
                    <h2 className=" bg-gradient-to-r from-green-600 via-green-500 via-green-400 to-green-300 bg-clip-text text-transparent text-2xl lg:text-6xl font-normal mb-5">&lt; FULL STACK DEVELOPER /&gt;</h2>

                    <div className="rouded border border-green-600 h-0"></div>

                    <p className="text-green-600 w-60 text-white font-light lg:text-xl"><i>" Open your mind! "</i></p>

                    <p className="text-green-500 mt-5">— The Matrix (1999)</p>
                </div>
            
            
                <div className="mt-10 w-full flex justify-around lg:justify-start lg:gap-10">

                    <div className=" flex justify-center gap-1 p-2 rounded-lg bg-linear-to-r from-green-500 to-green-600 font-bold text-sm md:bg-none md:hover:border-none md:text-green-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] shadow-green-400 md:border-2 md:hover:bg-linear-to-r md:hover:from-green-200 md:hover:via-green-300 md:hover:to-green-400 md:hover:scale-110 md:hover:text-black md:shadow-none md:hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] duration-300">
                        <a href="#projects">[ PROJETOS ]</a>
                        <BiRightArrowAlt  className="h-5.5 w-5.5" name='right-arrow-alt' />
                    </div>

                    <div className=" flex justify-center gap-1 p-2 rounded-lg bg-linear-to-r from-green-500 to-green-600 font-bold text-sm md:bg-none md:hover:border-none md:text-green-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] shadow-green-400 md:border-2 md:hover:bg-linear-to-r md:hover:from-green-200 md:hover:via-green-300 md:hover:to-green-400 md:hover:scale-110 md:hover:text-black md:shadow-none md:hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] duration-300">
                        <a href="./Uriel-Bezerra-Rodrigues.pdf" download={"Curriculo Uriel B. Rodrigues"}>[ DOWNLOAD CV ]</a>
                        < BiArrowToBottom  className="h-5.5 w-5.5" name='arrow-to-bottom' />
                    </div>
                </div>

                <div className="flex justify-center w-full gap-5 mt-10 lg:justify-start">
                    <a href="https://github.com/Uriel-Rodrigues" className="border border-green-500 w-10 h-10 flex justify-center items-center rounded md:hover:scale-110 duration-200 cursor-pointer">
                        <BiLogoGithub type='logo' name='github' className="fill-green-500 w-full h-10"/>
                    </a>

                    <a href="https://www.linkedin.com/in/uriel-b-rodrigues-033a54250/" className="border border-green-500 w-10 h-10 flex justify-center items-center rounded md:hover:scale-110 duration-200 cursor-pointer">
                        <BiLogoLinkedin type='logo' name='linkedin-square' className="fill-green-500 w-full h-10" />
                    </a>

                    <a href="https://wa.me/5585987187800" target="_blank" className="border border-green-500 w-10 h-10 flex justify-center items-center rounded md:hover:scale-110 duration-200 cursor-pointer">
                        <BiLogoWhatsapp name='whatsapp-square' type='logo' className="fill-green-500 w-full h-10" />
                    </a>
                </div>
            </div>
        </section>
     )
}
export default BoasVindas;
