exports.formatTime = () => {
    const now = new Date();
    return now.toLocaleString('en-us', {
        dateStyle: 'short',
        timeStyle: 'medium',
        hour12: true
    })
}



