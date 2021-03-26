import CSS from 'csstype';

var classNames = require('classnames');

interface Props {
    children: JSX.Element,
    className: string,
}

const style: CSS.Properties = {
    "boxShadow": "0px 0px 15px -10px blue"
}

export default function Chip({ children, className }: Props) {
    return (<div className={classNames("py-1 px-2 mx-2 rounded-xl cursor-pointer transition-colors", className)} style={style}>{children}</div >)
}