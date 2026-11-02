import { BiEnvelope, BiLogoGmail, BiLogoWhatsapp, BiMap } from "react-icons/bi";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useRef } from "react";

const Contatos = () => {
    const form = useRef()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            setError('')
            setSuccess('')

            await emailjs.sendForm('service_e0q6xum', 'template_pizcokx', form.current, {
                publicKey: 'eSS2_tyPg16k8tiEe'
            })

            setSuccess("conexão estabelecida! Mensagem enviada com sucesso.")
            alert("Conexão estabelecida! Mensagem enviada com sucesso.")

            form.current.reset()


        } catch (error) {
            console.error("Erro ao conectar:", error)
            setError("Conexão nao estabelecida! Falha ao enviar mensagem")
            
        } finally{
            setLoading(false)
        }
    }   
    return ( 
        <section id="contacts" className="mt-5 scroll-mt-24">
            <div className="mb-10">
                <p className="ml-5 mb-5 text-green-500 lg:text-3xl"> &gt;_ SYSTEM MENSAGE 04</p>
                <span className=" ml-5 text-2xl lg:text-4xl font-extrabold text-green-600">CONTATOS</span>

                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>

                <p className="text-green-500 ml-5 mb-10 mt-10 lg:text-2xl">&gt;_ PROTOCOLO_CONTATO.INIT</p>
            </div>

            <div className="lg:flex ml-10">

                <div className="lg:mb-5 flex flex-col gap-3 lg:max-w-[40%]  ">
                    <h1 className="text-green-500 text-xl font-bold">INICIAR UMA NOVA CONEXÃO.</h1>
                    <p className="text-green-200">Possui Ideias, Duvidas ou Propostas ? entre em contato vamos discutir as possibilidades!</p>

                    <div className="flex items-center gap-5">
                        <BiEnvelope  type='logo' name='gmail' className="fill-green-500 w-5 h-5" />
                        <p className="text-green-500">uriel.bezerra.rodrigues@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <BiMap className="fill-green-500 w-5 h-5" />
                        <p className="text-green-500"> foryaleza/ce</p>
                    </div>

                    <div className="text-green-500 border-green-300 border-2 bg-green-950/90 font-semibold leading-15 px-8 rounded-full flex items-center gap-3 w-max mt-5 lg:hover:bg-linear-to-r lg:hover:from-green-200 lg:hover:via-green-300 lg:hover:to-green-400 lg:hover:scale-110 lg:hover:text-black lg:shadow-none lg:hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] duration-300 mb-10">
                        <BiLogoWhatsapp className="fill-green-500 w-10 h-10" />
                        <a href="https://wa.me/5585987187800" className="font-semibold" target="_blank" >Conectar com Whatapp</a>
                    </div>
                </div>


                <div className="max-w-[90%] lg:w-150 lg:m-auto ">
                    <form onSubmit={onSubmit} ref={form} className="flex flex-col gap-3" >
                        <label htmlFor="nome" className="text-green-200 font-semibold">Nome:</label>
                        <input type="text" name="nome" className="bg-green-500/50 rounded-xl h-15 focus:outline-none focus:border-green-300 focus:border-2 focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] p-2 text-green-200 font-semibold" required placeholder="Seu Nome"/>

                        <label htmlFor="email" className="text-green-200 font-semibold" >Email:</label>
                        <input type="email" name="email" className="bg-green-500/50 rounded-xl h-15 focus:outline-none focus:border-green-300 focus:border-2 focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] p-2 text-green-200 font-semibold"required placeholder=" Seu Email"/>

                        <label htmlFor="assunto" className="text-green-200 font-semibold">Assunto</label>
                        <input type="text" name="assunto" className="bg-green-500/50 rounded-xl h-15 focus:outline-none focus:border-green-300 focus:border-2 focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] p-2 text-green-200 font-semibold" required placeholder="Assunto da mensagem" />

                        <label htmlFor="mensagem" className="text-green-200 font-semibold ">Mensagem:</label>
                        <textarea name="mensagem" className="bg-green-500/50 rounded-xl h-60 focus:outline-none focus:border-green-300 focus:border-2 focus:shadow-[0_0_15px_rgba(6,182,212,0.5)] p-2 text-green-200 font-semibold" required placeholder="Sua Mensagem" ></textarea>

                        <button type="submit" className="text-green-500 border-green-300 border-2 bg-green-950/90 font-semibold leading-15 px-8 rounded-xl mt-5 text-3xl lg:hover:bg-linear-to-r lg:hover:from-green-200 lg:hover:via-green-300 lg:hover:to-green-400 lg:hover:scale-105 lg:hover:text-black lg:shadow-none lg:hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] duration-300 cursor-pointer ">[ Conectar ]</button>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Contatos;