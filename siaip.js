console.clear();

/*

(1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
11, 12, paskaitos) 231008


1. Kintamieji - kur laikoma informacija
2. Palyginimas / salygos - "jei ...., priesingu atveju ..."
3. Ciklai - kartojimai...
4. Funkcijos - loginiu zingsniu visuma, kuria galima atkartoti, kai reikia
5. Ivykiai - kai vartotojas: paspaudzia mygtuka...

- Kintamuju uzrasymo budai
1. PascalCase
2. DB_PASSWORD
3. camelCase

- Iniciavimo budas:
1. const (constanta, nekintanti informacija)
2. let (kintanti informacija)
3. var (nenaudojama)

- KINTAMIEJI
    Primityvus duomenu tipai:
- number (skaiciai)
- string (tekstas)
- boolean (true / false)
- null , underfined
    Kompleksiniai duomenu tipai:
- array (masyvas / kolekcija / sąrašas / listas / matrica / arėjas)
- object (objektas - kompleksinei informacijai aprasyti)
- bigInt , symbol

- NUMBER
- teigiami / neigiami
- sveikieji / desimtainiai
- normalus / nenormalus

- Matematiniai operatoriai:
+ , * , / 
** kelimas laipsniu, % liekana
+=, -=, *=, /=, **=, %= //supaprastinti operatoriai
++, -- // prideda/ atima 1 (vienetu)
i++ vs ++i , i-- vs --i // pries / po panaudojimo, negalima taip ++sk++
Infinyti / begalybe
not-a-number = NaN
daugyba/galyba prioritetas pries +/-
jei norim kas eitu pirmiau, deti i skliaustus (2+2)
- && (and) visi turi buti "true", jog gauti "true"
- || (or) bent vienas turi buti "true", jog gauti "true"

- STRING
Iniciavimas kabutemis: "", '',
`` (backtick) reikia narsykles nuo 2017m
\ padaro sekanti simboli spauzdintinu
\n = new line (nusileidzia zemyn)
\r = return (grizta i eilutes pradzia)
//$ veikia tik su ` (backtick)

Teksto ilgis: kintamasis.length
Teksto ilgis: 'labas'.length

BOOLEAN - logine reiksme

Galimos reiksmes: true (1) / false (0);
Operacijos:
- && (and) visi turi buti "true", jog gauti "true"
- || (or) bent vienas turi buti "true", jog gauti "true"

ARRAY - sąrašas / masyvas / kolekcija / listas / matrica / arėjas
[] tuscias sarasas
Array zyme [1, 2, 3]
index: 0  1  2  3  4  5  6
array.js , 77 eilute, zodzio masyve pakeitimas

OBJECT - objektas
objectas { skliaustuos }
object, array gali tik viduj keisti info bet ne pacio arr
jonas = {};

FUNCTION - funkcija
perpanaudojamas logikos blokas

IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini: >, <, ===, >=, <=, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
&&, ||, !

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if() {}
if () {} ... else if() {}
if () {} ... else if() {} ... else {}


*/

//string
const name1 = "Anciu1";
console.log(name1)

let name = 'Anciu';
name = 'Anciu_Sim'
console.log(name)

const vardas = "Anciu2";
console.log(vardas, vardas.length);

const labas = 'Labas_Rytas';
//$ kintamojo reiksme, veikia tik su ` (backtick)
const lr = `${labas}!`;
console.log(lr);

//number
const k = -9 / 4;
console.log(k);

const n1 = 7;
const n2 = 5;

const div = n1 / n2;
console.log (div); 

const x = 10;
const y = 20;

const dalyba = x / y;
const liekamasis = x % y;

console.log(dalyba); // Išveda 0.5
console.log(liekamasis); // Išveda 10

//** kelimas kvadratu, laipsniu
const exp1 = 2 ** 2; 
console.log(exp1);

let wallet = 0;
console.log('wallet:', wallet);

wallet = wallet + 5;
console.log('wallet:', wallet);

wallet += 5;
console.log('wallet:', wallet);

wallet = wallet - 2;
console.log('wallet:', wallet);

wallet -= 2;
console.log('wallet:', wallet);

wallet = wallet * 4;
console.log('wallet:', wallet);

wallet += 2;
wallet *= 4;
console.log('wallet:', wallet);

wallet /= 5;
console.log('wallet:', wallet);

wallet = wallet ** 2;
wallet **= 2;
console.log('wallet:', wallet);

wallet /= 10000;
console.log('wallet:', wallet);

wallet %= 10;
console.log('wallet:', wallet);

//boolean
const arSviesu = true;
console.log(arSviesu);

//array
const tuscias = [];
console.log(tuscias, tuscias.length);

//object { skliaustuos }
// objectas { skliaustuos}
// object, array gali tik viduj keisti info bet ne pacio arr
// jonas = {};

const jonas = {
  isMarried: true,
  age: 99,
  name: 'Jonas',
};

console.log(jonas);
console.log(jonas['name']);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

const objectA = {
    a: 12,
    b: true,
}
const copyA = objectA //add new line to object
copyA.c = 'abc'
console.log(objectA)

// parodo kintamojo tipa
const kasYra = "Kaate";
console.log(typeof kasYra);

/* Object pavyzdys
object, array gali tik viduj keisti info bet ne pacio array
*/

// object, array gali tik viduj keisti info bet ne pacio arr
// jonas = {};

const aboutMe = {
    isMarried: false,
    age: 52,
    name: 'Anciu',
};

console.log(aboutMe);
console.log(aboutMe['name']);
console.log(aboutMe['name'], aboutMe.name);
console.log(aboutMe['age'], aboutMe.age);
console.log(aboutMe['isMarried'], aboutMe.isMarried);

aboutMe.age++;
console.log(aboutMe);

aboutMe.isMarried = true;
console.log(aboutMe);

aboutMe.name = 'Antanas';
console.log(aboutMe);

//FUNCTION
function tuscia() {
  // tuscias logikos pavadinimas, blokas
  // return undefined;
}
console.log(tuscia());

// Anciu turejo 9 jubilieju/-s!
const userName = 'Anciu';
const userAge = 52;
const userJubiliejai = (userAge - userAge % 10) / 10;
const user1Str = `${userName} turejo ${userJubiliejai} jubilieju/-s!`;
console.log(user1Str);

function calculator(){
let x = 5;
x = x + 10;
x = x / 2;
console.log(x);
}
calculator()

function calculator(){
    let x = 5;
    x = x + 10;
    x = x / 3;
    return x;
    x = x * 5;
    }
    const result = calculator()
    console.log(result);

// IF / ELSE
const day = 1; // = yra priskyrimo operatorius

if (day % 7 == 1) { // geriau priskirti ===
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Treciadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Sestadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja!');
}

/*
let age = 50; // number
let name = 'Antanas'; // string
let haveCar = false; // true/false boolean
let trash = null; // empty
let box; // underfined
let shop = {
    title: 'kIKIi',
    description: 'Good meels',
    shopItem: 50,
} // object
console.log(typeof box)

let j23 = 5 - 2;
let .. 
console.log(j23);

*/

//labas pasauli
function pasisveikinimas() {
    return "Hello, World!";
  }
  const greeting = pasisveikinimas();
  console.log(greeting);
  
// skaiciu i zodi
  function numberToString(number) {
    const text = String(number);
    return text;
  }
  const number = 67;
  const text = numberToString(number);
  console.log(text); // "42"
  
  //lyginis, nelyginis
  function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
console.log(evenOrOdd(8));
console.log(evenOrOdd(3));

  //lyginis, nelyginis ver2
  function evenOrOdd1(number) {
    if (number % 2 === 0) {
      return 'Even';
    }
    else {
      return 'Odd';
    };
    };
    console.log(even_or_odd(77));
    console.log(even_or_odd(33));
   
    //lyginis, nelyginis ver3
   function even_or_odd(number){
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }}
    console.log(even_or_odd(4));
    console.log(even_or_odd(1));