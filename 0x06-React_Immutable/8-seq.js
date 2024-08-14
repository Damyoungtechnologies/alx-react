import { Seq } from "immutable";

export default function printBestStudents(object) {
    const seq = Seq(object);

    // Filter students with score > 70
    const filtered = seq.filter((student) => student.score > 70);

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Convert the filtered Seq back to a JS object
    const JSObject = filtered.toJS();

    // Capitalize the first and last names
    Object.keys(JSObject).forEach((key) => {
        JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
        JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    });

    // Print the final object to the console
    console.log(JSObject);
}
