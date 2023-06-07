const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const notificationSuccessStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    const notificationErrorStyle = {
        color: "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    if (message.includes("removed")) {
        return (
            <div style={notificationErrorStyle}>{message}</div>
        )
    } else {
        return (
            <div style={notificationSuccessStyle}>{message}</div>
        )
    }

    // return (
    //     <div style={notificationStyle}>{message}</div>
    // )
}

export default Notification