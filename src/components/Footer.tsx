import "classnames"
import NavbarButton from './NavbarButton'


export default function Footer() {
    return (
        <div className="static bottom-0 w-full flex flex-row items-center bg-gray-100 bg-opacity-90 text-gray-400 h-7 z-10">
            <span className="ml-auto mr-4 font-thin">powered by <a className="text-gray-500 hover:text-gray-400" href="mailto:dgastonalain@gmail.com">dgastonalain</a></span>
        </div >
    )
}