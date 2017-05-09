function yearOne() {
    
    var userMesssage = document.getElementById("userMesssage");
    
    if ((document.getElementById("Wand").checked === false) &&  (document.getElementById("Robe").checked === false) && (document.getElementById("yearOneBooks").checked === false) && (document.getElementById("quillSet").checked === false)) {
        // show user message
        userMesssage.innerHTML = "SILLY MUGGLE! You must select at least one option to continue!";
        return false;}
      else { 
        
        userMesssage.innerHTML = "";   
    }
    
    var yearOne = document.orderForm.yearOne; // array of inputs
    var totalOrder = "";                // list all checked ids
    var totalCost = 0;                  // add values to calculate cost
    
    for (var i = 0; i < yearOne.length; i++){
        if (yearOne[i].checked) {
            totalOrder += yearOne[i].id + " ";       // add ids separated by spaces
            totalCost += parseInt(yearOne[i].value); // add value attributes, assuming they are integers
        }
    }
    // show total order and cost
    userMesssage.innerHTML = "Order: " + totalOrder + "<br />Cost: $" + totalCost;
   
}