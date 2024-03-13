//task1
document.write('<h2> Task1 (Slice) </h1> <br>')

var numbers = [1, 2, 3, 5, 7, 10, 15, 25, 50]
document.write('Numbers: ', numbers, '<br>')

var numbersCopy = numbers.slice(3)
document.write('Slice: ', numbersCopy, '<br>')
document.write('After Slice: ', numbers, '<br>')

//task2
document.write('<h2> Task2 (Splice) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersSplice = numbers.splice(5)

document.write('Splice: ', numbersSplice, '<br>')
document.write('After Splice: ', numbers, '<br>')

//task3
document.write('<h2> Task3 (Shift) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersShift = numbers.shift();

document.write('Shift: ', numbersShift, '<br>')
document.write('After Shift: ', numbers, '<br>')

//task4
document.write('<h2> Task4 (Unshift) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersUnshift = numbers.unshift(11);
document.write('Unshift: +11 <br>')

document.write('After Unshift: ', numbers, '<br>')

//task5
document.write('<h2> Task5 (Push) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersPush = numbers.push(25);
document.write('Push: +25 <br>')

document.write('After Push: ', numbers, '<br>')

//task6
document.write('<h2> Task6 (Pop) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersPop = numbers.pop();
document.write('Pop: ', numbersPop, '<br>')

document.write('After Pop: ', numbers, '<br>')

//task7
document.write('<h2> Task7 (2nd-Slice) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersSlice2 = numbers.slice(2)
document.write('Slice: ', numbersSlice2, '<br>')

document.write('After Slice: ', numbers, '<br>')

//task8
document.write('<h2> Task8 (2nd-Splice) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')
var numbersSplice2 = numbers.splice(1,2)

document.write('Splice: ', numbersSplice2, '<br>')

document.write('After Splice: ', numbers, '<br>')

//task9
document.write('<h2> Task9 (2nd-Shift) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')

var numbersShift2 = numbers.shift()
document.write('1st Shift: ', numbersShift2, '<br>')

var numbersShift3 = numbers.shift()
document.write('2nd Shift: ', numbersShift3, '<br>')

var numbersShift4 = numbers.shift()
document.write('3rd Shift: ', numbersShift4, '<br>')

document.write('After Shift: ', numbers, '<br>')

//task10
document.write('<h2> Task10 (2nd-Push) </h1> <br>')

document.write('Numbers: ', numbers, '<br>')

var numbersPush2 = numbers.push(numbersShift2);
document.write('1st Push: ', numbers, '<br>')

var numbersPush3 = numbers.push(numbersShift3);
document.write('2nd Push: ', numbers, '<br>')

var numbersPush4 = numbers.push(numbersShift4);
document.write('3rd Push: ', numbers, '<br>')

document.write('After Push: ', numbers, '<br>')

document.write('<br> <a id="copyright" href="https://afaq.dev/">Made by Afaq</a>')