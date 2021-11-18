/**
calculateFoodOrder: This function should calculate the total amount of pet food that the store should order for the upcoming week. The numAnimals parameter represents the number of animals in the store, and avgFood represents the average amount of food (in kilograms) eaten by each animal each week. The function should return the total amount of pet food that should be ordered for the upcoming week, or -1 if numAnimals or avgFood is less than 0 or non-numeric.
*/

function calculateFoodOrder(numAnimals, avgFood) {

  return Number(numAnimals >= 0) && Number(avgFood >= 0)
    ? numAnimals * avgFood
    : -1;
}


/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * param week an array of Weekday objects
 * return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

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


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * param names the array of animal names
 * param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * param breeds the array of animal breeds
 * return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */

function createAnimalObjects(names, types, breeds) {
  let animalArr = [];
  if ((!names) || (!types) || (!breeds)) return animalArr;
  
  let len = names.length;
   if ((len==types.length) && (len==breeds.length)) {
   for (let i=0; i < len; i++) {
            animalArr.push(new Animal(names[i], types[i], breeds[i]));
       }
      } return animalArr
    };


/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
  this.name = name;
  this.traffic = traffic;
}

/**
* A prototype to create Item objects
*/
function Item (name, barcode, sellingPrice, buyingPrice) {
   this.name = name;
   this.barcode = barcode;
   this.sellingPrice = sellingPrice;
   this.buyingPrice = buyingPrice;
}
/**
* A prototype to create Animal objects
*/
function Animal (name, type, breed) {
  this.name = name;
   this.type = type;
   this.breed = breed;
}


/**
* Use this function to test whether you are able to run JavaScript
* from your browser's console.
*/
function helloworld() {
  return 'hello world!';
}