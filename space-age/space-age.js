//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let earth_years_old = 0
  let index = PLANETS.findIndex(x => x.planet === planet);
  if (index != -1){
    earth_years_old = seconds / (earth_years_seconds * PLANETS[index].earth_years);
  }
  return parseFloat(earth_years_old.toFixed(2));
};

const earth_years_seconds = 31557600

const PLANETS = [
  {planet: "mercury", earth_years: 0.2408467},
  {planet: "venus", earth_years: 0.61519726},
  {planet: "earth", earth_years: 1},
  {planet: "mars", earth_years: 1.8808158},
  {planet: "jupiter", earth_years: 11.862615},
  {planet: "saturn", earth_years: 29.447498},
  {planet: "uranus", earth_years: 84.016846},
  {planet: "neptune", earth_years: 164.79132},
]