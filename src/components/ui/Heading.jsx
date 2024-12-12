
const Heading = (props) => {

    const {title, align} = props;
    const len = title?.length | 0;

    return (
        <div className="mt-12">
            <div className={`${align == 'right' ? 'text-end' : ''}`}>
                <h1 className="heading">{title}</h1>
            </div>
            <div className={`mt-[6px] mb-4 flex ${align == 'right' ? 'justify-end' : ''} heading-divider`}>
                <div style={{width: `${len*10}px`}} className={`divider-color`}></div>
            </div>
        </div>
    )
}

export default Heading;