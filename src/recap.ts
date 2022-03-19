const myName = 'Miguel';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  private age;
  name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}

const nicolas = new Persona(15, 'Miguel');
