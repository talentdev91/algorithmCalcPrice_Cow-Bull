let breed = "Angus"; // example breed
let age = 5; // example age in years
let weight = 1200; // example weight in pounds
let health_status = "Good"; // example health status

let breed_market_price_per_pound;
if (breed === "Angus") {
  breed_market_price_per_pound = 2.8; // Angus market price per pound
} else if (breed === "Hereford") {
  breed_market_price_per_pound = 2.4; // Hereford market price per pound
} else if (breed === "Charolais") {
  breed_market_price_per_pound = 2.6; // Charolais market price per pound
} else {
  breed_market_price_per_pound = 2.2; // Average market price per pound for non-top breeds
}

let market_value = weight * breed_market_price_per_pound;

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
if (health_status === "Good") {
  health_adjustment_factor = 1.2; // price adjustment for good health status
} else if (health_status === "Average") {
  health_adjustment_factor = 1.0;
} else if (health_status === "Poor") {
  health_adjustment_factor = 0.8; // price adjustment for poor health status
} else {
  health_adjustment_factor = 0.5; // price adjustment for very poor health status
}

let adjusted_value =
  market_value * age_adjustment_factor * health_adjustment_factor;

let additional_costs = 150; // example additional cost

let final_price = adjusted_value + additional_costs;

console.log("The price of the cow/bull is $" + final_price.toFixed(2));
