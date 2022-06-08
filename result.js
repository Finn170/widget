/**
 * Render the result page based on the data
 *
 * @param {Object} _formData { occupation, birthdate, age, yearlyIncome }
 * @param {*} premiumData { grossPremium, netPremium }
 */
export const render = (formData, premiumData) => {
document.querySelector(".widget-result").innerHTML = 
"Montly gross amount " + "€" + premiumData.grossPremium + " <br /> " 
+ "<hr></hr>"
+"Montly net amount " + "€" + premiumData.netPremium + " <br /> " + " <br /> " +

"Job: " + " <br /> " 
+ formData.occupation + " <br /> " + " <br /> " 
+ "Date of birth: " + " <br /> " + formData.birthdate  + " <br /> " + " <br /> " 
+ "Yearly income: " + " <br /> "  
+ "€" + formData.yearlyIncome;
};

