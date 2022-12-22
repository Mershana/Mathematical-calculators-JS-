"use strict";

/* №1⊗jsPrStMC
Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения. */
let a = document.querySelector("#coefficient1");
let b = document.querySelector("#coefficient2");
let c = document.querySelector("#coefficient3");
let result = document.querySelector("#resultCoefficient");
let button = document.querySelector("button");

let discr = b ** 2 - 4 * a * c;

button.addEventListener('click', function(){
	if (discr > 0){
		x1 = (-b + Math.sqrt(discr) / (2 * a));
		x2 = (-b - Math.sqrt(discr) / (2 * a));
		
	}
});