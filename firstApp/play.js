const person = {
    name:'Sbu',
    age:29,
    great(){
        console.log('Hi, I am '+ this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

// for (let hobbie of hobbies) {
//     console.log(hobbie);
// }

// console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

//const copiedArray = hobbies.slice(); //coppy an array
// const copiedArray = [...hobbies];
// const copiedObject = {...person}; //spread operator v9
// console.log(copiedArray);
// console.log(copiedObject);

 const printName = ({name}) => {   //Destructing syntax
    console.log(name);
 };

printName(person);
