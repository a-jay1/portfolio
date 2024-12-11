
const Heading = (props) => {

    const {title, width} = props;

    return (
        <>
            <div>
                <h1 className="">{title}</h1>
            </div>
            <div>
                <hr className="flex-grow border-gray-500"></hr>
            </div>
        </>
    )
}

export default Heading;