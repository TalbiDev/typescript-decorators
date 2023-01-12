// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Person {
  private reports = [];

  public email: string;

  constructor(public fn: string, public ln: string){
    this.reports = [];
  }
    addReports(person: Person){
      this.reports.push(person);
    }
  
}

const person = new Person('said', 'talbi');