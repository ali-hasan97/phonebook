const Failure = ({failure}) => {
    const failureStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (failure === null) {
        return null
    }

    return (
        <div style={failureStyle}>
            {failure}
        </div>
    )
}

export default Failure