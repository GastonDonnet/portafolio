const classNames = require('classnames')
interface Props {
    title: string,
    className?: string
}

export default function NavbarButton({ title, className }: Props) {
    return (
        <button className={classNames("font-semibold py-4 px-2 rounded-md transition-colors hover:bg-white hover:text-black  duration-500", className)}>
            {title}
        </button>
    )
}