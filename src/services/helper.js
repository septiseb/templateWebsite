export function splitTextAtDot(text) {
    // Calculate the halfway point
    let mid = Math.floor(text.length / 2);
    
    // Find the nearest dot to the halfway point
    let splitPos = mid;
    while (splitPos < text.length && text[splitPos] !== '.') {
        splitPos++;
    }

    // If no dot is found after the halfway point, search before it
    if (splitPos === text.length) {
        splitPos = mid;
        while (splitPos > 0 && text[splitPos] !== '.') {
            splitPos--;
        }
    }

    // Split the text into two parts and return them as an array
    return [text.slice(0, splitPos + 1), text.slice(splitPos + 1)];
}