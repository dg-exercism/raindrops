//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let factors = Array.from(Array(number), (space, i) => i + 1).filter(value => number % value === 0);
  let sound = factors.reduce((sounds, factor) => {
    if (factor === 3) {
      sounds += 'Pling'
    } if (factor === 5) {
      sounds += 'Plang'
    } if (factor === 7) {
      sounds += 'Plong'
    }
    return sounds
  }, '');
  return sound ? sound : String(number)
};
