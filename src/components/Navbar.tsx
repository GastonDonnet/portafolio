import { Link } from "react-router-dom";
import "classnames"
import NavbarButton from './NavbarButton'
import useWindowDimensions from "./WindowDimensions";
import { useState } from "react";


export default function Navbar() {

    const [show, setShow] = useState(false)
    const { height, width } = useWindowDimensions();

    return (
        <>
            {width > 768

                ? <div className="w-full sticky top-0 flex flex-row items-center shadow-md bg-gray-100 bg-opacity-90 text-gray-700 h-14 z-10" style={
                    { backdropFilter: "blur(3px)" }
                }>
                    <Link className="ml-auto mx-2" to="/"><NavbarButton className="w-full" title="Inicio"></NavbarButton></Link >
                    <Link className="mx-2" to="/services"><NavbarButton className="w-full" title="Servicios"></NavbarButton></Link>
                    <Link className="mx-2" to="/projects"><NavbarButton className="w-full" title="Proyectos"></NavbarButton></Link>
                    <Link className="mx-2" to="/about"><NavbarButton className="w-full" title="Sobre mi"></NavbarButton></Link>
                    <Link className="mx-2" to="/contact"><NavbarButton className="w-full" title="Contacto"></NavbarButton></Link>
                </div >

                : <div className="w-full sticky top-0 flex flex-col items-center shadow-md bg-gray-100 bg-opacity-90 text-gray-700 z-10" style={
                    { backdropFilter: "blur(3px)" }
                }>
                    <button onClick={() => setShow(!show)} className="md:hidden w-full">
                        <img className="ml-auto mr-2 my-2 w-10" src={require("@/assets/svg/navbar.svg").default} alt="" />
                    </button>

                    {
                        show
                            ? <> <Link onClick={() => setShow(!show)} className="w-full" to="/"><NavbarButton className="w-full" title="Inicio"></NavbarButton></Link>
                                <Link onClick={() => setShow(!show)} className="w-full" to="/services"><NavbarButton className="w-full" title="Servicios"></NavbarButton></Link>
                                <Link onClick={() => setShow(!show)} className="w-full" to="/projects"><NavbarButton className="w-full" title="Proyectos"></NavbarButton></Link>
                                <Link onClick={() => setShow(!show)} className="w-full" to="/about"><NavbarButton className="w-full" title="Sobre mi"></NavbarButton></Link>
                                <Link onClick={() => setShow(!show)} className="w-full" to="/contact"><NavbarButton className="w-full" title="Contacto"></NavbarButton></Link>
                            </>
                            : null
                    }
                </div >
            }
        </>
    )
}