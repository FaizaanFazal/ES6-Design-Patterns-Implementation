//3. Command Pattern implemention using calculator exampe

// operations
const addNumbers = (num1, num2) => num1 + num2;
const subNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num1 / num2;
 
// All Commands 
class CalculatorCommand {
 constructor(execute, undo, value) {
   this.execute = execute;
   this.undo = undo;
   this.value = value;
 }
}
// Command objects
const DoAddition = value => new CalculatorCommand(addNumbers, subNumbers, value); //constructor needs to be invoked using new keyword..so new  object is created
const DoSubtraction = value => new CalculatorCommand(subNumbers, addNumbers, value);
const DoMultiplication = value => new CalculatorCommand(multiplyNumbers, divideNumbers, value);
const DoDivision = value => new CalculatorCommand(divideNumbers, multiplyNumbers, value);
 
// AdvancedCalculator maintains list of commands so that they can be undone if needed
class AdvancedCalculator {
 constructor() {
   this.current = 0;
   this.commands = [];
 }
 
 execute(command) {
   this.current = command.execute(this.current, command.value);
   this.commands.push(command);
 }
 
 undo() {
   let command = this.commands.pop();
   this.current = command.undo(this.current, command.value);
 }
 
 getCurrentValue() {
   return this.current;
 }
}

// usage
const advCal = new AdvancedCalculator();
 
// invoking commands
advCal.execute( DoAddition(50));      //50
advCal.execute( DoSubtraction(25));   //25
advCal.execute( DoMultiplication(4)); //100
advCal.execute( DoDivision(2));       //50
 
// undo commands
advCal.undo();
// final result should be 100
console.log(advCal.getCurrentValue()); //100