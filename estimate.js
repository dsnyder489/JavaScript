/*
 Dave Snyder
 9/25/18
 
 Filename: estimate.js
 */

// global variables
var totalCost = 0;
var estimatebtn = document.getElementById("estimatebtn");

// calculate for Get Estimate button
function calcEstimate()
{
    // get user input for number of each flower ordered and create subtotal
    var num1 = document.getElementById("blanketnum");
    var num2 = document.getElementById("hedgenum");
    var num3 = document.getElementById("bluenum");
    totalCost = (num1.value * 15) + (num2.value * 20.25) + (num3.value * 8.95);
    
    // check if international shipping is required, change shipping from 10 (in the us) to 25 (global shipping)
    var shipTotal = 0;
    var ship = document.getElementById("global");
    if (document.getElementById("global").checked)
    {
        shipTotal =  25
    }
    else
    {
        shipTotal =  10
    }
    
    // check if PA sales tax is required, if checked add 6% sales tax
    var tax = document.getElementById("PAres");
    if (document.getElementById("PAres").checked)
    {
        taxTotal = totalCost * .06
    }
    else
    {
        taxTotal = 0
    }
    
    // add up subtotal including total, tax, and shipping
    var finalTotal = totalCost + taxTotal + shipTotal;
    
    // place results of order in paragraph in estimate.htm with the various totals included
    document.getElementById("total").innerHTML = "$" + totalCost.toFixed(2) + " is your subtotal.  $" + taxTotal.toFixed(2) + " is your tax.  $" + shipTotal.toFixed(2) +
    " is your shipping fee.  $" + finalTotal.toFixed(2) + " is the order total.";
}
 
// sets all values to defaults
function resetForm()
{
    document.getElementById("blanketnum").value = 0;
    document.getElementById("hedgenum").value = 0;
    document.getElementById("bluenum").value = 0;
    calcEstimate();
    createEventListeners();
}

// creates event listeners
function createEventListeners()
{
    var form = document.getElementsByTagName("estimateform");
    if (form.addEventListener)
    {
        form.addEventListener("estimatebtn", calcEstimate, false);
    }
    else if (form.attachEvent)
    {
        form.attachEvent("estimatebtn", calcEstimate);
    }
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);
