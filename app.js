let diceList = [];
let dieSum = 0;

class Die{
    constructor(){ 
        this.div = $('<div</div>');
        this.div.appendTo('.dieContainer')
        this.value = this.roll();
        this.divProperties(); 
        $(this.div).click(() => {
            this.value = this.roll();
            this.div.text(this.value)
        })
        diceList.push(this)
        $(this.div).dblclick(() => {
            this.div.remove(); 
            let diceIndex = diceList.indexOf(this)
            diceList.splice(diceIndex, 1)
        })
    }

    divProperties(){
        this.div.attr('class', 'square')
        this.div.text(this.value);  
          
    }

    roll(){
        return Math.floor((Math.random() * 6) + 1);
    }

    reroll(){
        this.value = this.roll();
        this.div.text(this.value);
    }
}


$('#addDieBtn').click(() => new Die())

$('#rollNew').click(() => {
    // for (let i = 0; i < diceList.length; i++) {
    //     diceList[i].value = diceList[i].roll();
    //    diceList[i].div.text(diceList[i].value);
    // }
    diceList.forEach((die) => {
        die.reroll();
    })

});

$('#sumDie').click(() => {
    // for (let i = 0; i < diceList.length; i++) {
    //     dieSum += diceList[i].value
    // }
    diceList.forEach(die => dieSum += die.value)
    alert(dieSum);
    dieSum = 0; 
});