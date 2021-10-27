export function getColorByValue(value) {
    if (value >= 10) {
        return "red"
    } else if (value > 0 && value < 10) {
        return "yellow"
    } else {
        return "black"
    }

}