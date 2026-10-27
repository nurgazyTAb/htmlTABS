console.log("JavaScript подключен");
console.log("Начало");
console.log(2 + 8);
console.log("Конец")
const petName = "Rocky";
let projecyCount = 5;
projecyCount = projecyCount + 4;
console.log(petName);
console.log(projecyCount);

console.log(typeof "Valley");
console.log(typeof 0);
console.log(typeof false);
console.log(typeof "87");

const htmlScore = 80;
const cssScore = 90;
console.log(htmlScore+cssScore);
console.log(htmlScore-cssScore);
console.log(htmlScore*cssScore);
console.log(htmlScore/cssScore);
console.log(htmlScore%cssScore);
console.log(htmlScore**cssScore);

console.log(2 + 3);
console.log("2" + "3");
console.log("2" + 3);

const num1 = "3";
const num2 = "2";
console.log(Number(num1));
console.log(Number(num2));
const num11 = Number (num1);
const num22 = Number (num2);

console.log(num11 + num22);
console.log(num11 - num22);
console.log(num11 * num22);
console.log(num11 / num22);
console.log(num11 % num22);
console.log(num11 ** num22);

console.log(3 >= 3);
console.log (2 >= 3) ;
console.log(3 === "3");
console.log(3 !== "3");

const hasAbout = true;
const hasContact = false;
console.log (hasAbout && hasContact);
console.log(hasAbout || hasContact);
console.log(!hasContact);

const projectCount1 = 2;
if (projectCount1 >= 3) {
console.log("Портфолио готово");
} else {
console.log("Добавьте проекты");
}

const projectCount2 = 4;
if (projectCount2 >= 5) {
console.log("Отличный прогресс")
} else if (projectCount2 >= 3) {
console.log ("Портфолио готово");
} else {
console.log("Добавьте проекты");
}

const projectScore3 = 75;
if (projectScore3 >= 75) {
console.log("Отличнo")
} else if (projectScore3 >= 65) {
console.log ("Хорошо");
} else if (projectScore3 >= 50) {
console.log("Прошел");
} else {
console.log("Попробуйте еще раз");
}

console.info ("Данные загружены");
console.warn("Контакты не заполнены");
console.error("Не удалось загрузить файл");
console.debug ("Промежуточное значение:", 3);

