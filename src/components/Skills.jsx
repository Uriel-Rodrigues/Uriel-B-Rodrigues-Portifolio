import { useRef, useState } from "react";
import { BiLeftArrow, BiLogoCPlusPlus, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiRightArrow, BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { DiMysql } from "react-icons/di";


const Skills = () => {
    const [skill, setSkill] = useState([{
        id:1,
        icon: BiLogoPython,
        tipo: "icon",
        title: "Python" 
    },{
        id:2,
        icon: BiLogoJavascript,
        tipo: "icon",
        title: "JavaScript" 
    }, {
        id:3,
        icon: BiLogoTypescript,
        tipo: "icon",
        title: "TypeScript" 
    }, {
        id:4,
        icon: BiLogoCPlusPlus ,
        tipo: "icon",
        title: "C++" 
    }, {
        id:5,
        icon: BiLogoHtml5 ,
        tipo: "icon",
        title: "HTML5" 
    }, {
        id:6,
        icon: BiLogoCss3 ,
        tipo: "icon",
        title: "CSS3" 
    }, {
        id:7,
        icon: BiLogoTailwindCss ,
        tipo: "icon",
        title: "Tailwind-css" 
    }, {
        id:8,
        icon: BiLogoReact ,
        tipo: "icon",
        title: "React" 
    }, {
        id:9,
        icon: BiLogoNodejs ,
        tipo: "icon",
        title: "Nodejs" 
    }, {
        id:10,
        icon: BiLogoPostgresql ,
        tipo: "icon",
        title: "PostgreSQL" 
    }, {
        id:11,
        icon: DiMysql ,
        tipo: "icon",
        title: "Mysql" 
    }, {
        id:12,
        icon: BiLogoGit ,
        tipo: "icon",
        title: "Git" 
    },{
        id:13,
        icon: BiLogoGithub  ,
        tipo: "icon",
        title: "Github" 
    }, {
        id:14,
        icon: "/apache.svg" ,
        tipo:"image",
        title: "Apache" 
    }, {
        id:15,
        icon: "/rancher.svg",
        tipo:"image",
        title: "Rancher" 
    }])

    const carrossel = useRef(null)

     const handleLeftClick = (event) => {
     event.preventDefault()

     carrossel.current.scrollLeft -= carrossel.current.offsetWidth

     }
     const handleRightClick = (event) => {
     event.preventDefault()

     carrossel.current.scrollLeft += carrossel.current.offsetWidth
     }

    return ( 
        <section id="skills" className="mt-5 scroll-mt-24">

            <div className="mb-10">
                <p className=" ml-5 mb-5 text-green-500 lg:text-3xl"> &gt;_ SYSTEM MENSAGE 02</p>
                <span className=" ml-5 text-2xl lg:text-4xl font-extrabold text-green-600">STACK </span>

                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>
            </div>

            <div className="flex items-center">
                <p className="hidden lg:flex text-green-500 text-8xl lg:ml-10">&lt;</p>

                <div id="container" className="top-10 m-auto w-[90%] lg:w-[75%]">

                    <div ref={carrossel} className=" mt-8 grid grid-cols-2 gap-10 lg:flex lg:h-40 lg:gap-10 lg:overflow-x-auto lg:overflow-y-hidden lg:scroll-smooth scrollbar-none">

                        {skill.map((a) => {
                            const Icon = a.icon;

                            return (
                                <div className="
                                        flex items-center justify-center gap-2
                                        border border-green-500 rounded-xl
                                        w-full min-w-0
                                        p-2
                                        bg-green-950/60
                                        shadow-[0_0_15px_rgba(6,182,212,0.5)]
                                        lg:w-70 lg:min-w-70 lg:shrink-0
                                        lg:gap-4 lg:p-3"
                                    key={a.id}
                                >
                                    {a.tipo === "icon" ? (
                                        <Icon className="text-green-500 w-8 h-8 lg:w-20 lg:h-20 shrink-0" />
                                    ) : (
                                        <img
                                            src={a.icon}
                                            alt={a.title}
                                            className="w-8 h-8 lg:w-20 lg:h-20 object-contain shrink-0"
                                        />
                                    )}

                                    <p className="text-green-500 font-bold text-sm md:text-2xl text-center">
                                        {a.title}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <p className=" hidden lg:flex text-green-500 text-8xl lg:mr-10">/&gt; </p>
            </div>

                <div className=" hidden top-15 lg:flex justify-center mt-10 gap-20 lg:pr-20">
                    <BiSolidChevronLeft onClick={handleLeftClick} className="lg:hover:scale-150 duration-200 h-20 w-20 fill-green-500 cursor-pointer" />
                    <BiSolidChevronRight  onClick={handleRightClick} className="lg:hover:scale-150 duration-200 h-20 w-20 fill-green-500 cursor-pointer" />
                </div>
        </section>
     );
}
 
export default Skills;