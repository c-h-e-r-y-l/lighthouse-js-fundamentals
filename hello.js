const sayHello = function(name) {
  console.log("Hello " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand"); 

const sayHello2 = function(name) {
  return "hello, " + name;
}

const greeting = sayHello2("John");
console.log(greeting);