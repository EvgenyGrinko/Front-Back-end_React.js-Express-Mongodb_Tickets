//Function for TextInBorder.jsx to handle its content
function handleStatusName(name){

    //if passed string with numbers, e.g. "121"
    if (isFinite(Number(name))) return Number(name);

    //If passed some word ("assigned", "completed" or "unassigned")
    const shortName = name.slice(0,3).toUpperCase();
    
    if (shortName === "ASS") return "ASD";
    if (shortName === "COM" || shortName === "UNA") return shortName;
    else return "";

}

export default handleStatusName;