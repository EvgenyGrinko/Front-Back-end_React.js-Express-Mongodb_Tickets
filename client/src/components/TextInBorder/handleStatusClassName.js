//Function for TextInBorder.jsx to handle its content
function handleStatusClassName(name){

    const prefix = "status";
    
    //if passed string with numbers, e.g. "121"
    if (isFinite(Number(name))) return prefix+"Location";

    //If passed some word ("assigned", "completed" or "unassigned")

    const shortName = name[0].toUpperCase() + name.slice(1,3);

    if (shortName === "Ass") return prefix+"Asd";
    if (shortName === "Com" || shortName === "Una") return prefix+shortName;
    else return "";

}

export default handleStatusClassName;