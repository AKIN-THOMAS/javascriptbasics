//calculator

const num1 = parseInt(window.prompt("Enter the First number>> "))
let operator = window.prompt("Enter an operator");
const num2 = parseInt(window.prompt("Enter the second number"))
let result;

if(operator == '+'){
    result = num1 + num2
    alert(num1 + ' + ' + num2 + ' = ' + result)
}
else if(operator == '-'){
    result = num1 - num2
    alert(num1 + ' - ' + num2 + ' = ' + result)
}
else if(operator == '*'){
    result = num1 * num2
    alert(num1 + ' * ' + num2 + ' = ' + result)
}
else if(operator == '/'){
    result = num1/num2
    alert(num1 + ' / ' + num2 + ' = ' + result)
}
else{
    alert("invaild Operator")
}