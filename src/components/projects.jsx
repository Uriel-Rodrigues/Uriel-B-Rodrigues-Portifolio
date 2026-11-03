import { useState } from "react";
import { BiLink, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiRightArrowAlt } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { DiMysql } from "react-icons/di";



const Projects = () => {

    const [card, setCard] = useState([
        {
            id: 1,
            image:"./indecor.webp",
            titulo: "InDecor - Landing Page",
            descricao: "Landing page desenvolvida para um curso fictício, com design moderno, acolhedor e identidade visual própria. O projeto apresenta os conteudos e a proposta do curso por meio de uma interface intuitiva, responsiva e visualmente atrativa, proporcionando uma experiência agradável aos visitantes",
            
            tecnologias: [
                {icon: BiLogoHtml5, nome: "HTML"}, 
                {icon: BiLogoCss3, nome: "CSS" }],
            link: "https://landingpage-indecor.onrender.com" 
        },

        // {
        //     id: 2,
        //     image:"./mewo-cafe.webp",
        //     titulo: "Mewo Cafe - Landing Page",
        //     descricao: "Landing page desenvolvida para uma cafeteria fictícia, com design moderno, acolhedor e identidade visual própria. O projeto apresenta os produtos e a proposta da marca por meio de uma interface intuitiva, responsiva e visualmente atrativa, proporcionando uma experiência agradável aos visitantes.",
            
        //     tecnologias: [
        //         {icon: BiLogoHtml5, nome: "HTML"}, 
        //         {icon: BiLogoCss3, nome: "CSS" }],

        //     link: "https://gt20260404-landingpage-mewocafe.onrender.com/" 
        // },
        {
            id: 3,
            image:"./projeto-fashion.webp",
            titulo: "Fashion - Landing Page",
            descricao: "Landing page desenvolvida para uma marca fictícia de roupas, com design moderno, acolhedor e identidade visual própria. O projeto apresenta os produtos e a proposta da marca por meio de uma interface intuitiva, responsiva e visualmente atrativa, proporcionando uma experiência agradável aos visitantes.",
            
            tecnologias: [
                {icon: BiLogoHtml5, nome: "HTML"}, 
                {icon: BiLogoCss3, nome: "CSS" },
                {icon: BiLogoJavascript, nome:"javaScript"
}
            ],

            link: "https://gt20260404-landingpage-fashion.onrender.com/" 
        },
        {
            id: 4,
            image:"./finControl.png",
            titulo: "FinControl - Controle Financeiro Completo",
            descricao: "Sistema de controle financeiro full stack. O projeto conta com uma interface intuitiva para gerenciamento de receitas e despesas, visualização de dados em gráficos e acompanhamento financeiro. backend com autenticação com JWT, criptografia de senhas e envio de e-mails.",
            
            tecnologias: [
                {icon: DiMysql, nome: "Mysql"}, 
                {icon: BiLogoTailwindCss , nome: "TailwindCSS" },
                {icon: BiLogoReact , nome:"React"},
                {icon: BiLogoNodejs , nome:"Nodejs"},
                {icon: BiLogoJavascript, nome:"javaScript"},
                {icon: BiLogoTypescript, nome:"Typescript"},
                {icon: BiLogoPostgresql, nome:"Postgresql"},
            ],

            link: "https://fincontrol-controle-financeiro-pessoal-3no2.onrender.com" 
        },
        {
            id: 5,
            image:"./regenciador.webp",
            titulo: "Gerenciador de Usuários e Produtos",
            descricao: "Aplicação full stack, para facilitar o gerenciamento de usuários e produtos, permitindo cadastrar, visualizar, editar e excluir registros de forma prática e organizada. projeto com interface intuitiva e responsiva, integração com banco de dados. O backend com autenticação com JWT, criptografia de senhas e envio de e-mails.",
            
            tecnologias: [
                {icon: DiMysql, nome: "Mysql"}, 
                {icon: BiLogoTailwindCss , nome: "TailwindCSS" },
                {icon: BiLogoReact , nome:"React"},
                {icon: BiLogoNodejs , nome:"Nodejs"},
                {icon: BiLogoJavascript, nome:"javaScript"},
                {icon: BiLogoTypescript, nome:"Typescript"},
                {icon: BiLogoPostgresql, nome:"Postgresql"},
            ],

            link: "https://front-end-react-0rfa.onrender.com" 
        }


    ])

    return ( 
        <section id="projects" className="mt-5 scroll-mt-24">
            <div className="mb-10">
                <p className=" ml-5 mb-5 text-green-500 lg:text-3xl"> &gt;_ SYSTEM MENSAGE 03</p>
                <span className=" ml-5 text-2xl lg:text-4xl font-extrabold text-green-600">PROJETOS</span>

                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>
            </div>

            <div className=" lg:grid  lg:grid-cols-2">
                {
                card.map((c) => {
                        const Icon = c.icon; 

                        return (
                        <div key={c.id}>
                            <div className="mb-10 p-3 border border-green-500 w-[90%] m-auto bg-green-950/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <img src={c.image} alt="linkTree" className="border border-green-500 rounded-xl w-full mb-3"/>
                                
                                <div>
                                    <div className="flex items-center">
                                        <p className="text-green-500 text-2xl mb-3">// {c.titulo}</p>
                                    </div>

                                    <p className="text-green-200 mb-3" >{c.descricao}</p>

                                    <div className="flex items-center">
                                        <p className="text-green-500 text-2xl mb-3">// Tecnologias </p>
                                    </div>

                                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
                                        {
                                            c.tecnologias.map((tecnologia, index) => {
                                                const Icon = tecnologia.icon
                                                return (
                                                    <div className="flex flex-col items-center" key={index}>
                                                        <Icon className="fill-green-500 w-15 h-auto border border-green-500 rounded" />
                                                        <p className="text-green-200">{tecnologia.nome}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="flex items-center border border-green-500 text-green-500 text-xl font-semibold gap-2 justify-center p-2 max-w-[70%] m-auto lg:hover:bg-green-300 duration-300 lg:hover:text-green-950">
                                        <BiLink className="w-5 h-auto" />
                                        <a href={c.link} target="_blank" className="text-2xl">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>

            <div className="flex items-center flex-col mt-10">
                <p className="text-green-200 text-4xl">Ver mais em:</p>

                <a href="https://github.com/Uriel-Rodrigues" target="_blank" className="flex items-center flex-col mt-5 animate-pulse">
                    <BiLogoGithub className="fill-green-500 border-2 w-15 h-full border-green-500 rounded" />
                    <p className="text-green-200 text-2xl">GitHub</p>
                </a>
            </div>
        </section>
     );
}
 
export default Projects;