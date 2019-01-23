  numbers =[0,9,4,7,6,8,4,7,7,7,8,8,8]
  function findMean(numbers) {
    //add all values together and divide by # of values in array
    // += means that you are adding the value on left to one on right
    let total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
  }
  
  function findMedian (numbers) {
    //array length divided by two
      let median = 0, numsLen = numbers.length;
      numbers.sort();
      if (
         numsLen % 2 === 0 // is even
      ) {
         // average of two middle numbers
          median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
      } else { // is odd
          // middle number only
          median = numbers[(numsLen - 1) / 2];
      }
      return median;
    }
  
  function findMode(numbers) {
    let modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
  }
  
  function buttonClicked() {
    
  }
  
  console.log("heyo!")
  console.log(findMedian(numbers))
  console.log(findMean(numbers))
  console.log(findMode(numbers))

document.addEventListener("DOMContentLoaded", function(e) {
  
  let buttonEvent=document.getElementById('button')
  buttonEvent.addEventListener("click", processClick);
  buttonEvent.addEventListener("click", buttonClick);
  
  let buttonTracker = {
     count: 0,
     getBreathMessage: function() {
       let breathMessage;
        switch (this.count) {
        case 1:
            breathMessage = "End Inhale";
            break;
        case 2:
            breathMessage = "Start Exhale";
            break;
        case 3:
            breathMessage = "End Exhale";
            break;
        default:
            breathMessage = "Start Over"
     }
     console.log("breathMessage happened")
     return breathMessage;
   }
   }
   
  function buttonClick() {
  buttonTracker.count++;
  document.getElementById("button").innerHTML = buttonTracker.getBreathMessage();
  console.log("buttonClick happened")
  }
   
   function processClick() {
   clickTracker.count++;
   document.getElementById("instruct").innerHTML = clickTracker.getMessage();
   console.log("processClick happened")
    }

let clickTracker = {
count: 0,
getMessage: function () {
  let message;
  for (let i= 0; i<5; i++)
   {
    switch (this.count) {
        case 1:
            message = "Nice and easy, through the nose...";
            break;
        case 2:
            message = "Hold your breath for two seconds.";
            break;
        case 3:
            message = "Exhale through the mouth.";
            break;
        case 4:
            message = "And repeat!";
            break;
        default:
            message = "Think of your mantra."
    }
    console.log("clickTracker happened.")
    return message;
}
}
};

    
  
}) //end of DOMContentLoaded function


//breaths must be put into an array, that array is how we will find mean, mode, etc