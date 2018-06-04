document.addEventListener("DOMContentLoaded", function(event) {
  let _mileage = 0,
      _fatigue = 0,
      _fatigueLimit = 10;

  class Horse {
    constructor(mileage, fatigue) {
      _mileage = mileage;
      _fatigue = fatigue;
    }

    static Run(distance){
      console.log('Run('+ distance +')');
      _mileage += +distance;
      this.calculateFatigue();
      let messageMileageResult = 'Horse mileage: ' + _mileage;
      let messageFatigueResult = 'Horse fatigue: ' + _fatigue;

      console.log(messageMileageResult);
      console.log(messageFatigueResult);
      result.innerText = messageMileageResult + ", " + messageFatigueResult;
    }

    static Relax() {
      _fatigue = 0;
      _mileage = 0;
    }

    static calculateFatigue() {
      if(_fatigue > _fatigueLimit) {
        this.Relax();
      }
      else {
        _fatigue = Math.floor(_mileage/10);
      }
    }
  }

  var initialText = "There are no mileage",
      result = document.getElementById('result'),
      distance = document.getElementById('txtDistance'),
      button = document.getElementById('btnRun');

  result.innerText = initialText;
  button.addEventListener('click', function(){
    Horse.Run(distance.value);
  })
  console.log(initialText);
});
