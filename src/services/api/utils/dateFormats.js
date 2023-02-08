export const formatDateRelative = (strDate, baseDate = new Date()) => {
    const date = new Date(strDate);
    const diff = baseDate - date;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return 'few seconds ago';
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} days ago`;
    }

    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${dayOfMonth}/${year}`

}