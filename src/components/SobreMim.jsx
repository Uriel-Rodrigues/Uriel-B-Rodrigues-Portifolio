import { BiChevronRight, BiCog, BiData, BiDesktop, BiSolidUser } from "react-icons/bi";

const SobreMim = () => {
    return ( 
        <section id="about" className="mt-5 scroll-mt-24">
            <div className="mb-10">
                <p className=" ml-5 mb-5 text-green-500 lg:text-3xl"> &gt;_ SYSTEM MENSAGE 01</p>
                <span className=" ml-5 text-2xl lg:text-4xl font-extrabold text-green-600">SOBRE MIM</span>

                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>
            </div>
            
            <div className="lg:flex lg:flex-col">

                <div className="lg:flex lg:m-auto lg:gap-10">

                    <div className="mt-3 lg:mt-0 flex flex-col w-80 lg:w-100 bg-green-950/60 border m-auto border-green-500 rounded shadow-[0_0_15px_rgba(6,182,212,0.5)]">

                        <div className="flex items-center bg-green-950/90 justify-between border border-b-green-500 p-3">

                            <div className="flex gap-3 items-center">

                                <BiChevronRight className="fill-green-400 w-10 h-10" type='solid' name='chevron-right' />

                                <div className="flex justify-center">
                                    <div className="relative rounded-full bg-red-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative rounded-full bg-amber-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative rounded-full bg-green-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                            </div>

                            <div className="bg-green-400 w-40 lg:w-60 h-2"></div>
                        </div>

                        <div className=" m-3 p-5">
                            <p className="text-green-200 text-justify">Experiência como Analista Técnico de Suporte. Atualmente, estou focando minha carreira em Desenvolvimento Full Stack, trabalhando como freelancer há 1 ano e 7 meses. Possuo conhecimento em <strong className="text-green-500">HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Node.js, Python, MySQL, PostgreSQL, Git e GitHub, além de experiência com Apache, Portainer and Rancher</strong></p>
                        </div>
                    </div>

                    <div className=" mt-20 lg:mt-0 flex flex-col w-80 lg:w-100 bg-green-950/60 border m-auto border-green-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded">

                        <div className="flex items-center bg-green-950/90 justify-between border border-b-green-500 p-3">

                            <div className="flex gap-3 items-center">
                                <BiChevronRight  className="fill-green-400 w-10 h-10" type='solid' name='chevron-right' />
                                <div className="flex justify-center">

                                    <div className="relative rounded-full bg-red-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative rounded-full bg-amber-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative rounded-full bg-green-400 w-3 h-3"></div>
                                    <div className=" absolute animate-ping rounded-full bg-green-400 w-3 h-3"></div>
                                </div>
                            </div>

                            <div className="bg-green-400 w-40 lg:w-60 h-2 "></div>
                        </div>

                        <div className="flex flex-col mt-5 gap-3 p-5">

                            <p className="text-green-400">&lt;<span className="text-red-500">section</span>&gt;</p>

                            <div className="flex items-center gap-5 pl-7">
                                <BiDesktop className="fill-green-400 w-10 h-10" name='desktop' />
                                <div>
                                    <p className="text-green-500">Front End</p>
                                    <p className="text-green-200">interfaces modernas e responsivas
</p>
                                </div>
                            </div>
                        
                            <div className="flex items-center gap-5 pl-7">
                                <BiData className="fill-green-400 w-10 h-10" name='data' />
                                <div>
                                    <p className="text-green-500">Back End</p>
                                    <p className="text-green-200">Bancos de dados e APIs</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 pl-7">
                                <BiSolidUser  className="fill-green-400 w-10 h-10" name='user' />
                                <div>
                                    <p className="text-green-500">Analista Técnico de Suporte</p>
                                    <p className="text-green-200">Solução de problemas e contato com o usuário</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pl-7">
                                <BiCog  className="fill-green-400 w-10 h-10" name='cog' />
                                <div>
                                    <p className="text-green-500">DevOps</p>
                                    <p className="text-green-200">Apache, Portainer, Rancher, Git, GitHub</p>
                                </div>
                            </div>
                            <p className="text-green-400">&lt;<span className="text-red-500">section/</span>&gt;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SobreMim;