let breed = "Angus"; // example breed
let age = 5; // example age in years
let weight = 1200; // example weight in pounds
let health_status = "Good"; // example health status

// determine market price
let breed_market_price_per_pound;
if (
  ["Angus", "Hereford", "Charolais", "Limousin", "Simmental"].includes(breed)
) {
  // top US breed
  switch (breed) {
    case "Angus":
      breed_market_price_per_pound = 2.8;
      break;
    case "Hereford":
      breed_market_price_per_pound = 2.4;
      break;
    case "Charolais":
      breed_market_price_per_pound = 2.6;
      break;
    case "Limousin":
      breed_market_price_per_pound = 2.7;
      break;
    case "Simmental":
      breed_market_price_per_pound = 2.5;
      break;
  }
} else {
  // average market price per pound for non-top breeds
  breed_market_price_per_pound = 2.2;
}

let market_value = weight * breed_market_price_per_pound;

// determine adjustment factors
let age_adjustment_factor;
if (age < 2) {
  age_adjustment_factor = 1.2; // price adjustment for younger age
} else if (age < 5) {
  age_adjustment_factor = 1.0;
} else if (age < 10) {
  age_adjustment_factor = 0.85; // price adjustment for older age
} else {
  age_adjustment_factor = 0.7; // price adjustment for significantly older age
}

let health_adjustment_factor;
switch (health_status) {
  case "Good":
    health_adjustment_factor = 1.2; // price adjustment for good health status
    break;
  case "Average":
    health_adjustment_factor = 1.0;
    break;
  case "Poor":
    health_adjustment_factor = 0.8; // price adjustment for poor health status
    break;
  default:
    health_adjustment_factor = 0.5; // price adjustment for very poor health status
}

let adjusted_value =
  market_value * age_adjustment_factor * health_adjustment_factor;

let additional_costs = 150; // example additional cost

let final_price = adjusted_value + additional_costs;

console.log("The price of the cow/bull is $" + final_price.toFixed(2));
