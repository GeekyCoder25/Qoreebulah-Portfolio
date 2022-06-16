const Headers = (props) => {
    return (
        <header className="headers">
            <p className="no">{props.no}</p>
            <p className="main-text">{props.text}</p>
        </header>
    );
}

export default Headers;