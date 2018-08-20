function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true; };
    this.disable = function() { self._enabled = false; };
  }

function Fridge(power){
    Machine.call(this, power);
    let food = [];
    this.getFood = () => food.slice();
    this.addFood = (...item) => {
        if (this._enabled) {
            if (food.length + item.length <= this._power / 100){
                food=food.concat(item);
            }
            else{
                console.log(`Not enough space in the fridge`)
            }
        }
        else {
            console.log('Fridge is switched off');
        }
    } 
}

Fridge.prototype = Object.create(Machine.prototype);