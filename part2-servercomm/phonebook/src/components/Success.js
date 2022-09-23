const Success = ({success}) => {
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (success === null) {
        return null
    }

    return (
        <div style={successStyle}>
            {success}
        </div>
    )
}

export default Success