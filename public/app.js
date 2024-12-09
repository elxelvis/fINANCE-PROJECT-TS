//interfaces
/*interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'Elena',
    age: 12,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)
console.log(me) */
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
/*let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 300)
docTwo = new Payment('Phiona', 'coding work', 300)

let docs: HasFormatter[] =[]
docs.push(docOne)
docs.push(docTwo)

console.log(docs)



 const invOne = new Invoice('Elisha', 'work on the Elisha project', 300)
 const invTwo = new Invoice('Phiona', 'work on the Phiona project', 300)

 let invoices: Invoice[] = []
 invoices.push(invOne)
 invoices.push(invTwo)

 invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
 })*/
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
