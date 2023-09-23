// 1. module pattern .. set type:module in package.json

import  {sum}  from './modules/module.js';
const result = sum(3, 5);
console.log(result);
    //city module
import City from './modules/city.js';
const city = new City();
console.log(city.getBusinessList());
