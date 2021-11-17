function calculateFoodOrder(numAnimals, avgFood) {
  // IMPLEMENT THIS FUNCTION!
  return Number(numAnimals >= 0) && Number(avgFood >= 0)
    ? numAnimals * avgFood
    : -1;
}


function mostPopularDays(week) {
  if (!week) return null;
  let maxTraffic = week[0].traffic;

  for (let day of week) {
    if (day.traffic > maxTraffic) maxTraffic = day.traffic;
  }

  let maxDayArray = week.filter((day) => day.traffic > maxTraffic);

  if (maxDayArray.length == 1) return maxDayArray[0].name;
  return maxDayArray.map(({ name }) => name);
}
