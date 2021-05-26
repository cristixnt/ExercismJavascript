//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (list) => parseInt(COLORS.indexOf(list[0].toLowerCase().toString()) + '' + COLORS.indexOf(list[1].toLowerCase().toString()));

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];