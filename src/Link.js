// class component -> this.props.nazwaPropsa
// function component (arg) -> props.nazwaPropsa

function Link(props) {
    return <a
        className="App-link"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
    >
        { props.name }
    </a>;
}

export default Link;
