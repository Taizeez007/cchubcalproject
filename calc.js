class Calc{
    constructor(prevOpTextElement, currOpTextElement){
        this.prevOpTextElement=prevOpTextElement
        this.currOpTextElement=currOpTextElement
        this.clear()
    }
    
    clear(){
        this.currOp =''
        this.prevOp =''
        this.operation = undefined
    }

    delete(){
        this.currOp =this.currOp.toString().slice(0,-1)
    }

    appendTextElement(number){
        if(number==='.'&&this.currOp.includes('.'))
        return this.currOp=this.currOp.toString() + number.toString()
    }

    selectOp(operation){
        if(this.currOp ==='') return
        if (this.prevOp!==''){
           this.compute()
        }
        this.operation=operation
        this.prevOp=this.currOp
        this.currOp=''
    }

    compute(){
        let computation
        const prev=parsefloat(this.prevOp)
        const curr = parseFloat(this.currOp)
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation){
            case '+':
                computation=prev+curr
                break
            case '-':
                computation=prev-curr
                break
            case '*':
                computation=prev*curr
                break    
            case '/':
                if (curr==0){
                return computation='NaN'}else {
                computation=prev/curr}                
                break
            case '%':
                if (curr==0){
                return computation='Error'}else {
                computation=prev%curr}
                break
            default:
                return
        }
        this.currOp=computation
        this.operation=undefined
        this.prevOp= ''
    }

    getDisplayText(number){
        const strNumber = number.toString()
        const intDigits = parseFloat(strNumber.split('.')[0])
        const decDigits= strNumber.split('.')[1]
        let intDisplay
        if (isNaN(intDigits)){
            intDisplay=''
        }else {
            intDisplay=intDigits.toLocaleString('en',{maximumFractiondigits:0})
        }
        if (decDigits!=null){
            return '${intDisplay}.${decDigits}'
        }
        else{
            return intDisplay
        }
    }

    updateDisplay(){
        this.currOpTextElement.innerText=this.getDisplayText(this.currOp)
        if (this.opertion!=null){
            this.prevOpTextElement.innerText ='${this.getDisplayText(this.prevOp)} ${this.operation}'
        } else{
            this.prevOpTextElement.innerText=''
        }
    }
}

const numButtons=document.querySelectorAll('[data-number]')
const opButtons=document.querySelectorAll('[data-op]')
const eqButton=document.querySelector('[data-equals]')
const delButton=document.querySelector('[data-del]')
const allclearButton=document.querySelector('[data-all-clear]')
const prevOpTextElement=document.querySelector('[data-prev-operand]')
const currOpTextElement=document.querySelector('[data-curr-operand]')

const calc= new Calc(prevOpTextElement, currOpTextElement)

numButtons.forEach((button)=> {
    button.addEventListener('click',() =>{
        calc.appendTextElement(button.innerText)
        calc.getDisplayText(button.innerText)
        calc.updateDisplay()
    })
})

opButtons.forEach((button)=> {
    button.addEventListener('click',() => {
        calc.selectOp(button.innerText)
        calc.updateDisplay()
    })
})

eqButton.addEventListener('click', button=>{
    calc.compute()
    calc.updateDisplay()
})

allclearButton.addEventListener('click',button=>{
    calc.clear()
    calc.updateDisplay()
})

delButton.addEventListener('click', button =>{
    calc.delete()
    calc.updateDisplay()
})