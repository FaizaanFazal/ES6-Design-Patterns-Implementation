const businessList = new WeakMap();
 
// Here City uses the businessList member as it’s in same module
class City {
 constructor() {
   businessList.set(this, ['Pizza Hut', 'Dominos', 'Street Pizza']);
 }
 
 // public method to access the private ‘businessList’
 getBusinessList() {
   return businessList.get(this);
 }

// public method to add business to ‘businessList’
 addBusiness(business) {
   businessList.get(this).push(business);
 }
}
 
// export the City class as default module
export default City;