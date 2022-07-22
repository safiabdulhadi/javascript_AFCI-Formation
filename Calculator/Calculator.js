"use strict";

export default class Calculator{
    constructor(){
        this.create();
        this.clear();
    }
    create(){
        const calc = document.createElement("div");
        calc.classList.add("calculator-grid");
        const output = document.createElement("div");
        output.classList.add("output");
        const prev = document.createElement("div");
        prev.classList.add("previous-operand");
        const current = document.createElement("div");
        current.classList.add("current-operand");
        output.append(prev, current);
        calc.append(output);
        this.previous = prev;
        this.current = current;
        const btns = ["AC", "DEL", "÷", 1,2,3, "*", 4,5,6, "+", 7,8,9, "-", ".", 0, "="];
        for(let b of btns){
            const btn = document.createElement("button");
            btn.textContent = b;
            calc.append(btn);
            if(typeof b === "number" || b === "."){
                btn.addEventListener("click", this.appendNumber.bind(this));
                btn.addEventListener("click", this.updateDisplay.bind(this));
                continue;
            }
            switch(b){
                case "AC":
                    btn.classList.add("span-two");
                    btn.addEventListener("click", this.clear.bind(this));
                    break;
                case "DEL":
                    btn.addEventListener("click", this.delete.bind(this));
                    break;
                case "=":
                    btn.classList.add("span-two");
                    btn.addEventListener("click", this.compute.bind(this));
                    break;
                default:
                    btn.addEventListener("click", this.chooseOperation.bind(this));
            }
            btn.addEventListener("click", this.updateDisplay.bind(this));
        }
        this.calc = calc;
    }
    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(e){
        if(e.target.innerText === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + e.target.innerText.toString();
    }
    chooseOperation(e){
        if(this.currentOperand === "") return;
        if(this.previousOperand !== ""){
            this.compute();
        }
        this.operation = e.target.innerText;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    compute(){
        let total;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current))return;

        switch(this.operation){
            case "+":
                total = prev + current;
                break;
            case "-":
                total = prev - current;
                break;
            case "*":
                total = prev * current;
                break;
            case "÷":
            case "/":
                total = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = total;
        this.operation = undefined;
        this.previousOperand = "";
    }
    updateDisplay(){
        this.current.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previous.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else{
            this.previous.innerText = "";
        }
    }
    getDisplayNumber(number){
        const strNumber = number.toString();
        const intDigits = parseFloat(strNumber.split(".")[0]);
        const decimDigits = strNumber.split(".")[1];
        let display;
        if(isNaN(intDigits)){
            display = "";
        } else{
            display = intDigits.toLocaleString("fr", {maximumFractionDigits:0});

        }
        if(decimDigits != null){
            return `${display},${decimDigits}`;

        }
        return display;
    }
}