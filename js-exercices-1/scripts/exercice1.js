'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];

/********** EXERCICE 0 ***********************/
console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];
console.log(` *** question 1 *** `);
numbers.forEach(elt => console.log(elt));
console.log(` *** question 2 *** `);
console.log(persons[1].name);
console.log(` *** question 3 *** `);
persons.forEach(elt => console.log(`${elt.name} a ${elt.age} ans`));
console.log(` *** question 4 *** `);
const myForEach=(array,func) => {
    for(let elt of array){
        func(elt);
    }
}

console.log(` *** question 5 *** `);
myForEach(numbers,console.log);
myForEach(persons,elt=>console.log(`${elt.name} a ${elt.age} ans`));

/*********************************************/

/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);
console.log(` *** question 1 *** `);
console.log(numbers.map(elt=>elt*10));
console.log(` *** question 2 *** `);
const multiples=(n,l)=>l.map(elt=>elt*n);
console.log(multiples(10, numbers));
console.log(` *** question 3 *** `);
const mutiples5=(l)=>(multiples(5,l));
console.log(mutiples5(numbers));
console.log(` *** question 4 *** `);
const multiplesFactory=fact=>l=> multiples(fact,l);
const multiples100 = multiplesFactory(100);
console.log(typeof(multiples100));
console.log(multiples100(numbers));
/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);
console.log(` *** question 1 *** `);
const capitalize=ch =>`${ch[0].toUpperCase()}${ch.substring(1)}`;
console.log(capitalize('test'));
console.log(` *** question 2 *** `);
console.log(persons.map(elt=>capitalize(elt.name)));
console.log(` *** question 3 *** `);
const myMap=(l,fct)=>{
    const res =[];
    for(let i in l){
        res.push(fct(l[i]));
    }
    return res;
}
console.log(` *** question 4 *** `);
console.log(myMap(persons, person => capitalize(person.name)));
console.log(` *** question 5 *** `);
const myMap2=(l,fct)=>{
    const res=[];
    l.forEach(elt=>res.push(fct(elt)));
    return res;
}
console.log(` *** question 6 *** `);
console.log(myMap2(persons, person => capitalize(person.name)));

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);


/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);


/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);



/*********************************************/
