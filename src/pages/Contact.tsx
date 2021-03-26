export default function Contact() {
    return (<div className="min-h-full m-auto p-8 container flex flex-row flex-wrap">

        <div className="p-4 m-4 md:my-8 mx-auto md:w-1/2 shadow-xl hover:shadow-md hover:bg-gray-50 rounded-xl self-center text-center transition duration-500">
            <a href="https://www.linkedin.com/in/gastondonnet/">
                <img className="mx-auto h-20 md:h-40 select-none" src={require("@/assets/svg/linkedin.svg").default} alt="Linkedin" />
            </a>
            <div className="my-1 select-all">/gastondonnet</div>
        </div>
        <div className="p-4 m-4 md:my-8 mx-auto md:w-1/2 shadow-xl hover:shadow-md hover:bg-gray-50 rounded-xl self-center text-center transition duration-500">
            <a href="https://github.com/GastonDonnet/">
                <img className="mx-auto h-20 md:h-40 select-none" src={require("@/assets/svg/github.svg").default} alt="Github" />
            </a>
            <div className="my-1 select-all">/GastonDonnet</div>
        </div>
        <div className="p-4 m-4 md:my-8 mx-auto md:w-1/2 shadow-xl hover:shadow-md hover:bg-gray-50 rounded-xl self-center text-center transition duration-500">
            <a href="mailto:dgastonalain@gmail.com">
                <img className="mx-auto h-20 md:h-40 select-none" src={require("@/assets/svg/email.svg").default} alt="Email" />
            </a>
            <div className="my-1 select-all">dgastonalain@gmail.com</div>
        </div>
    </div>)
}