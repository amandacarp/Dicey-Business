let diceList = [];
let diceIndex = 0;
let dieSum = 0;

class Die{
    constructor(){ 
        this.div = $('<div</div>');
        this.div.appendTo('body')
        this.value = this.roll();
        this.divProperties();  
        this.index = diceIndex
        diceIndex++ 
        $(this.div).click(() => {
            this.value = this.roll();
        })
    }

    divProperties(){
        this.div.attr('class', 'square')
        this.div.attr('id', diceIndex);
        this.div.text(this.value);  
          
    }

    roll(){
        return Math.floor((Math.random() * 6) + 1);
    }
}


$('#addDieBtn').click(() => {
    let newDieRoll = new Die;
    diceList.push(newDieRoll);
})

$('#rollNew').click(() => {
    for (let i = 0; i < diceList.length; i++) {
        diceList[i].value = Die.roll();
    }
});

$('#sumDie').click(() => {
    for (let i = 0; i < diceList.length; i++) {
        dieSum += diceList[i].value
    }
    alert(dieSum);
});