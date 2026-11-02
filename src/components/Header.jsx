import { useState } from "react";

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setMenuAberto(!menuAberto);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="flex bg-black/85 fixed w-full top-0 left-0 z-50 justify-between items-center border border-b-green-500 p-2">

            {/* LOGO */}
            <div>
                <span className="text-lg font-bold text-green-600">
                    &lt;DEV/&gt;
                </span>
            </div>

            {/* BOTÃO HAMBÚRGUER */}
            <button
                type="button"
                onClick={alternarMenu}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuAberto}
                className="relative w-8 h-8 flex items-center justify-center lg:hidden"
            >
                <span
                    className={`absolute w-8 h-1 bg-green-600 rounded transition-all duration-300
                    ${menuAberto ? "rotate-45" : "-translate-y-2"}`}
                />

                <span
                    className={`absolute w-8 h-1 bg-green-600 rounded transition-all duration-300
                    ${menuAberto ? "opacity-0" : "opacity-100"}`}
                />

                <span
                    className={`absolute w-8 h-1 bg-green-600 rounded transition-all duration-300
                    ${menuAberto ? "-rotate-45" : "translate-y-2"}`}
                />
            </button>

            {/* MENU DE NAVEGAÇÃO */}
            <nav
                className={`
                    flex flex-col fixed bg-black/90
                    w-[50%] h-96 p-4 rounded gap-5
                    right-0 top-14
                    duration-300 transition-all
                    backdrop-blur-xl border-2 border-green-500

                    ${menuAberto
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0 pointer-events-none"
                    }

                    lg:static lg:flex-row lg:translate-x-0
                    lg:opacity-100 lg:pointer-events-auto
                    lg:bg-transparent lg:w-auto lg:h-10
                    lg:items-center lg:justify-end lg:gap-10
                    lg:p-0 lg:pr-10 lg:border-none
                    lg:rounded-none lg:backdrop-blur-none
                `}
            >
                <a
                    href="#home"
                    onClick={fecharMenu}
                    className="text-green-500 hover:text-green-200 hover:p-1 hover:border-b hover:border-b-green-200 w-fit duration-300"
                >
                    HOME
                </a>

                <a
                    href="#about"
                    onClick={fecharMenu}
                    className="text-green-500 hover:text-green-200 hover:p-1 hover:border-b hover:border-b-green-200 w-fit duration-300"
                >
                    ABOUT
                </a>

                <a
                    href="#skills"
                    onClick={fecharMenu}
                    className="text-green-500 hover:text-green-200 hover:p-1 hover:border-b hover:border-b-green-200 w-fit duration-300"
                >
                    SKILLS
                </a>

                <a
                    href="#projects"
                    onClick={fecharMenu}
                    className="text-green-500 hover:text-green-200 hover:p-1 hover:border-b hover:border-b-green-200 w-fit duration-300"
                >
                    PROJECTS
                </a>

                <a
                    href="#contacts"
                    onClick={fecharMenu}
                    className="text-green-500 hover:text-green-200 hover:p-1 hover:border-b hover:border-b-green-200 w-fit duration-300"
                >
                    CONTACTS
                </a>
            </nav>

        </header>
    );
}
 
export default Header;