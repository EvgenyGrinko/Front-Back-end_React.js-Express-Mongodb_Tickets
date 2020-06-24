function getDateTime(str){
    const date = new Date(str);
    date.setHours(date.getHours() - 1);
    const locale = "en-GB";
    const options = { hour: "numeric", minute: "numeric"}
    return date.toLocaleDateString(locale) + " " + date.toLocaleTimeString(locale, options);
}

export default getDateTime;