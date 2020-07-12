// 1
let greeting = 'hello';
let domain3lvl = 'owu';
let domain2lvl = 'ua';
let domain1lvl = 'com';
let one = '1';
let two = '10';
let affinage = '-999';
let Ubt = '123';
let pi = '3.14';
let e = '2.7';
let S = '16';
let isTrue = true;
let isFalse = false;

let arr = [greeting, domain3lvl, domain2lvl, domain1lvl, one, two, affinage, Ubt, pi, e, S, isTrue, isFalse];
for (let lmnt of arr) {
    console.log(lmnt);
    document.write(`${lmnt} <br>`);
    alert(lmnt);
    };

// 2
for (let lmnt of arr) {
    lmnt = Math.random();
    console.log(lmnt);
    document.write(`${lmnt} <br>`);
    alert(lmnt);
    };

// 3
const dd = 27;
const mm = 09;
const yyyy = 1994;
const surname = 'Забора';
const name = 'Богдан';
const patronym = 'Дмитриевич';
const I = [dd, mm, yyyy, surname, name, patronym];

for (let lmnt of I) {
    console.log(lmnt);
    document.write(`${lmnt} <br>`);
    alert(lmnt);
};

// 4
let mySurname = prompt('Моя фамилия:', surname);
let myName = prompt('Моё имя:', name);
let myPatronym = prompt('Моё отчество:', patronym);
let myNameIs = [mySurname, myName, myPatronym];

for (let lmnt of myNameIs) {
    console.log(lmnt);
    document.write(`${lmnt} <br>`);
    alert(lmnt);
};

// 5
let person = (`${mySurname} ${myName} ${myPatronym}`);
console.log(person);
document.write(`${person} <br>`);
alert(person);

// 6
let momsName = prompt('Мамина фамилия:', 'Забора');
let momsSurname = prompt('Мамино имя:', 'Алла');
let momsPatronym = prompt('Мамино отчество:', 'Владиславовна');
let mum = [momsName, momsSurname, momsPatronym];
let momsPerson = (`${momsName} ${momsSurname} ${momsPatronym}`);
console.log(momsPerson);
document.write(`${momsPerson} <br>`);
alert(momsPerson);

let dadsName = prompt('Папина фамилия:', 'Забора');
let dadsSurname = prompt('Папино имя:', 'Дмитрий');
let dadsPatronym = prompt('Папино отчество:', 'Иванович');
let dad = [dadsName, dadsSurname, dadsPatronym];
let dadsPerson = (`${dadsName} ${dadsSurname} ${dadsPatronym}`);
console.log(dadsPerson);
document.write(`${dadsPerson} <br>`);
alert(dadsPerson);

let grandmasName = prompt('Бабушкина фамилия:', 'Забора');
let grandmasSurname = prompt('Бабушкино имя:', 'Валентина');
let grandmasPatronym = prompt('Бабушкино отчество:', 'Максимовна');
let grandma = [grandmasName, grandmasSurname, grandmasPatronym];
let grandmaPerson = (`${grandmasName} ${grandmasSurname} ${grandmasPatronym}`);
console.log(grandmaPerson);
document.write(`${grandmaPerson} <br>`);
alert(grandmaPerson);

// 7
let x7 = +prompt('Введите первое число:');
let y7 = +prompt('Введите второе число:');
let z7 = +prompt('Введите третее число:');
console.log(x7, y7, z7);

// 8
let x8 = parseInt(prompt('Введите первое число:'));
let y8 = parseInt(prompt('Введите второе число:'));
let z8 = parseInt(prompt('Введите третее число:'));
let w8 = parseInt(prompt('Введите четвертое число:'));
let result8 = x8 + y8 + z8 + w8;
console.log(result8);

// 9
let x9 = parseFloat(prompt('Введите первое число:'));
let y9 = parseFloat(prompt('Введите второе число:'));
let z9 = parseFloat(prompt('Введите третее число:'));
let result9 = x9 + y9 + z9;
console.log(result9);

// 10
let x10 = parseFloat(Math.round(prompt('Введите первое число:')));
let y10 = parseFloat(Math.round(prompt('Введите второе число:')));
let z10 = parseFloat(Math.round(prompt('Введите третее число:')));
let result10 = x10 + y10 + z10;
console.log(result10);

// 11
let x11 = parseInt(prompt('Введите первое число:'));
let y11 = parseInt(prompt('Введите второе число:'));
let result11 = Math.pow(x11, y11);
console.log(result11);

// 12
let a12 = 100;
let b12 = '10';
let c12 = true;
let d12 = undefined;
console.log(typeof a12); 
console.log(typeof b12); 
console.log(typeof c12); 
console.log(typeof d12); 

// 13
let a13 = (5 !== 6);
let b13 = (5 === 6);
let c13 = (5 >= 6);
let d13 = (5 > 6);
let e13 = (10 === 10);
let f13 = (10 >= 10);
let g13 = (10 > 10);
let h13 = (10 < 10);
let i13 = (10 !== 10);
let j13 = (123 === '123');
let k13 = (123 == '123');
console.log(a13, b13, c13, d13, e13, f13, g13, h13, i13, j13, k13);

// Дополнительно:
console.log(false === (132 > 100 && 45 < 12 ));
console.log(true  === (34 > 33 && 23 < 90 ));
console.log(false === (99 > 100 && 45 > 12 ));
console.log(true  === (132 > 100 || 45 < 12 ));
console.log(true  === (111 > 11 || 45 < 111 ));
console.log(true  === ((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ));
console.log(true  === ((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ));
console.log(false === ((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ));
console.log(true  === ((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )));
console.log(true  === (!!'-1'));
console.log(true  === (!!-1));
console.log(true  === (!!'0'));
console.log(true  === (!!'null'));
console.log(true  === (!!'undefined'));
console.log(false === (!!(3/'owu')));
console.log(true  === ((111 > 11 || 45 < 111) ||  !!'0'));
console.log(false === ((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )));

// CLASS
// 1
let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true'
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

// 3
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

// 4
let height = parseInt('23см');
let width  = parseInt('10см');
let s = height * width;
console.log(s);

// 5
let heightC = parseInt('10м');
let dC = parseInt('4м');
let v = 3.1415 * (dC / 2) ** 2  * heightC;
console.log(v);

// 6
let n = 3;
let m = 4;
let k = Math.sqrt(3**2 + 4**2);
console.log(k);

// 7
let str7 = ('Hello World');
console.log(str7);
document.write(str7);
alert(str7);

// 8
alert(`${person}\n 25\n undefined\n`);

// 9
let str1 = ('Кто ');
let str2 = ('ты ');
let str3 = ('такой?');
let concatenation = ('<br/>' + str1 + str2 + str3 + '<br/>');
document.write(concatenation);

// 10
let strstr = "20";
let aa = 5;
document.write(strstr + aa + "<br/>");  // 205 // число в строке + числов в строке -> строка
document.write(strstr * "2" + "<br/>"); // 40  // число в строке * число в строке  -> число
document.write(strstr - aa + "<br/>");  // 15  // число в строке - число           -> число
document.write(strstr / 2 + "<br/>");   // 10  // число в строке / число           -> число

// 11
console.log( 3  === parseInt("3.14"));
console.log(-7  === parseInt("-7.875"));
console.log(435 === parseInt("435"));
console.log(NaN === parseInt("Вася"));
// Int - целочисленный тип переменных
// NaN !== NaN ?

// 12
let str12 = prompt("Enter something", "ho-ho")
console.log(str12);

// 13
let x13 = +prompt('Введите первое число', '');
let y13 = +prompt('Введите второе число', '');
alert(x13 + y13);

// 14
let name13 = prompt('Введите своё имя', 'Иван');
let surname13 = prompt('Введите свою фамилию', 'Иванов');
let age13 = prompt('Введите свой возраст', '32');
alert(`Доброго вечера ${name13} ${surname13}, мои поздравления что вам ${age13}`);

//ДОП 2
let color2 = prompt('Какой сейчас свет светафора?');
switch (color2) {
    case 'зелёный':
    alert('иди');
        break;
    case 'жёлтый':
    alert('подожди');
        break;
    case 'красный':
        alert('стой');
        break;
    default:
    alert('делай что хочешь');
        break;
}

// ДОП 3
        let color3 = prompt('Какой сейчас свет светафора?');
        let isRoadClear = confirm('А машин нет?');
        if ((color3 === 'зелёный') && (isRoadClear === true)) alert('иди');
            else if ((color3 === 'зелёный') && (isRoadClear === false)) alert('подожди пока нарушители проедут');
            else if ((color3 ===  'жёлтый') && (isRoadClear ===  true)) alert('жди');
            else if ((color3 ===  'жёлтый') && (isRoadClear === false)) alert('всё равно жди');
            else if ((color3 === 'красный') && (isRoadClear ===  true)) alert('стой жди');
            else if ((color3 === 'красный') && (isRoadClear === false)) alert('стой всё равно');
            else alert('делай что хочешь');