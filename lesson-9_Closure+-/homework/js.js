function bezGlasnix() {
    let firstString = "";
    for (let i = 0; i < string.length; i++) {
        if (
            string[i] != "a" ||
            string[i] != "u" ||
            string[i] != "y" ||
            string[i] != "i" ||
            string[i] != "e"
        )
            return (firstString += string[i]);
    }
}