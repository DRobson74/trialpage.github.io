console.log('This would be the main JS file.');
<script type="text/javascript" language="javascript">
/* Script Name: Caesarean Prediction Model - Nulliparous Intrapartum 
*/

//Single main function - checks which buttons and selects a drop down option and works out the predicted likelihood of Caesarean Section Delivery

function calculate() {




	// Declare variables.
	var DropDownBox;			// Used to determine which drop down option is selected
	var Age;				// Patient age	
	var radiobutton;			// Used to determine if checkbox is checked
	var button;				// Used to select a yes or no answer
	var selectedAge;			// Age of the Mother
	var IndigenousorTorresStraitIslander = 2;// Indigenous or Torres Strait Islander Mother
	var Smoker			= 2;	// Smoking Status	
	var AssistedConception			// Assisted Conception
	var MaternalCountryofBirth	= 0; 	// Maternal Country of Birth
	var NorthAfricaMiddleEast;		// North Africa & Middle East
	var SouthernCentralAsia;		// Southern Central Asia
	var SubSaharanAfrica;			// Sub Saharan Africa
	var NorthWestEurope;			// North West Europe
	var NorthEastAsia;			// North East Asia
	var NoneoftheAbove1;			// None of the Above
	var AntenatalCare		= 0;	// Antenatal Care Used
	var PrivateMidwife;			// Private Midwife
	var PublicMidwife;			// Public Midwife
	var GP;					// GP
	var PublicMedPrac;			// Public Medical Practitioner
	var NoneoftheAbove2;			// None of the Above
	var DeliveryataPrivateHospital	= 2; 	// Delivery at a Private Hospital
	var likelihood;				// Actual prediction of CSD
	var Asthma			= 2;	// Asthma
	var Depression			= 2;	// Depression
	var PreexistingHypertension	= 2;	// Pre-existingHypertension
	var TypeIDiabetesMellitus	= 2;	// Type I Diabetes Mellitus
	var TypeIIDiabetesMellitus	= 2;	// Type II Diabetes Mellitus
	var AH				= 2;	// Antepartum Haemorrhage
	var NPA				= 2;	// Non-Pharmacological Analgesia
	var PA				= 2;	// Pharmacological Analgesia
	var CTG				= 2;	// CTG
	var FSE				= 2;	// FSE
	var GD				= 2;	// GD
	var PreEc			= 2;	// PreEc
	var GestHTN			= 2;	// GestHTN
	var AH				= 2;	// Antepartum Haemorrhage
	var InducedLabour		= 2;	// Induced Labour
	var AROM 			= 2;	// Artificial Rupture of Membranes
	var Prost			= 2;	// Prostaglandins
	var Presentation		= 0;	// Presentation
	var Breech;				// Breech
	var Brow;				// Brow
	var Shoulder;				// Shoulder
	var Face;				// Face
	var NoneoftheAbove3;			// None of the Above
	var varx;				// Temp variable for calculation.
	var vary;				// Temp variable for calculation.
	var varz; 				// Temp variable for calculation.



// Check patient age dropdown box.
DropDownBox = document.getElementById("Age");
Age = DropDownBox.options[DropDownBox.selectedIndex].text;


// Checks to see which radiobutton is selected in Indigenous&/orTorresStraitIslander.
for (i = 1; i <= 2; i++) {				
radioButton = document.getElementById("indig" + i);
	if (radioButton.checked == true) {
		// Assigns value according to which radio button was selected.
		IndigenousorTorresStraitIslander = radioButton.value; 
	}
}
if (IndigenousorTorresStraitIslander == 2) {
		alert("No Indigenous status selected!");
		return;
}

 
// Checks to see which radiobutton is selected in Smoker.
for (i = 1; i <= 2; i++) {				
radioButton = document.getElementById("smoker" + i);
	if (radioButton.checked == true) {
		// Assigns value according to which radio button was selected.
		Smoker = radioButton.value; 
	}
}
if (Smoker == 2) {
		alert("No Smoker status selected!");
		return;
}


// Checks to see which radiobutton is selected in AssistedConception.
for (i = 1; i <= 2; i++) {				
radioButton = document.getElementById("AssistedConception" + i);
	if (radioButton.checked == true) {
		// Assigns value according to which radio button was selected.
		AssistedConception = radioButton.value; 
	}
}
if (AssistedConception == 2) {
		alert("No assisted conception status selected!");
		return;
}



// Checks to see which radiobutton is selected in MaternalCountryofBirth.
for (i = 1; i <= 6; i++) {
radioButton = document.getElementById("MaternalCountryofBirth" + i);
	if (radioButton.checked == true) {
		//Assigns value according to which radio button was selected.
		MaternalCountryofBirth = radioButton.value;
		if (MaternalCountryofBirth ==1) {
		NorthAfricaMiddleEast =1;
		NorthWestEurope =0;
		SouthernCentralAsia =0;
		SubSaharanAfrica =0;
		NorthEastAsia =0;
		}
		if (MaternalCountryofBirth ==2) {
		NorthAfricaMiddleEast =0; 
		NorthWestEurope =1;
		SouthernCentralAsia =0;
		SubSaharanAfrica =0;
		NorthEastAsia =0;
		}
		if (MaternalCountryofBirth ==3) {
		NorthAfricaMiddleEast =0; 
		NorthWestEurope =0;
		SouthernCentralAsia =1;
		SubSaharanAfrica =0;
		NorthEastAsia =0;
		}
		if (MaternalCountryofBirth ==4) {
		NorthAfricaMiddleEast =0;
		NorthWestEurope =0; 
		SouthernCentralAsia =0;
		SubSaharanAfrica =1;
		NorthEastAsia =0;
			}
		if (MaternalCountryofBirth ==5) {
		NorthAfricaMiddleEast =0;
		NorthWestEurope =0; 
		SouthernCentralAsia =0;
		SubSaharanAfrica =0;
		NorthEastAsia =1;
			}
		if (MaternalCountryofBirth ==6) {
		NorthAfricaMiddleEast =0;
		NorthWestEurope =0; 
		SouthernCentralAsia =0;
		SubSaharanAfrica =0;
		NorthEastAsia =0;
		NoneoftheAbove1 =1;
		}
		
	}

}
if (MaternalCountryofBirth == 0) {
		alert("No Maternal Country of Birth is selected!");
		return;
}



// Checks to see which radiobutton is selected in DeliveryataPrivateHospital.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("DeliveryataPrivateHospital" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			DeliveryataPrivateHospital = radioButton.value; 
		}
	}

if (DeliveryataPrivateHospital == 2) {
		alert("No Delivery at a Private Hospital status selected!");
		return;
}


// Checks to see which radiobutton is selected in AntenatalCare.
for (i = 1; i <= 5; i++) {
radioButton = document.getElementById("AntenatalCare" + i);
	if (radioButton.checked == true) {
		//Assigns value according to which radio button was selected.
		AntenatalCare = radioButton.value; 
		if (AntenatalCare ==1) {
			PrivateMidwife = 1;
			PublicMidwife =0;
			PublicMedPrac =0;
			GP =0;
		}
		if (AntenatalCare ==2) {
			PrivateMidwife = 0;
			PublicMidwife =1;
			PublicMedPrac =0;
			GP =0;
		}
		if (AntenatalCare ==3) {
			PrivateMidwife = 0;
			PublicMidwife =0;
			PublicMedPrac =0;
			GP =1;
		}
		if (AntenatalCare ==4) {
			PrivateMidwife = 0;
			PublicMidwife =0;
			PublicMedPrac =1;
			GP =0;
		}
		if (AntenatalCare ==5) {
			PrivateMidwife = 0;
			PublicMidwife =0;
			PublicMedPrac =0;
			GP =0;
			NoneoftheAbove2 =1;
		}
	}
}
if (AntenatalCare == 0) {
		alert("No Antenatal Care selected!");
		return;
}



// Checks to see which radiobutton is selected in Asthma.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("Asthma" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			Asthma = radioButton.value; 
		}
	}
if (Asthma == 2) {
	alert("No Asthma status selected!");
	return;
}



// Checks to see which radiobutton is selected in Depression.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("Depression" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			Depression = radioButton.value; 
		}
	}
if (Depression == 2) {
	alert ("No Depression status selected!");
	return;
}



// Checks to see which radiobutton is selected in PreexistingHypertension.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("PreexistingHypertension" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			PreexistingHypertension = radioButton.value; 
		}
	}
if (PreexistingHypertension == 2) {
	alert ("No Pre-existing Hypertension status selected!");
	return;
}



// Checks to see which radiobutton is selected in TypeIDiabetesMellitus.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("TypeIDiabetesMellitus" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			TypeIDiabetesMellitus = radioButton.value; 
		}
	}
if (TypeIDiabetesMellitus == 2) {
	alert ("No Type I Diabetes Mellitus status selected!");
	return;
}




// Checks to see which radiobutton is selected in TypeIIDiabetesMellitus.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("TypeIIDiabetesMellitus" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			TypeIIDiabetesMellitus = radioButton.value; 
		}
	}
if (TypeIIDiabetesMellitus == 2) {
	alert ("No Type II Diabetes Mellitus status selected!");
	return;
}


// Checks to see which radiobutton is selected in InducedLabour.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("InducedLabour" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			InducedLabour = radioButton.value; 
		}
	}
if (InducedLabour == 2) {
	alert ("No Induced Labour status selected!");
	return;
}


// Checks to see which radiobutton is selected in AROM.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("AROM" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			AROM = radioButton.value; 
		}
	}
if (AROM == 2) {
	alert ("No Artificial Rupture of Membranes status selected!");
	return;
}


// Checks to see which radiobutton is selected in Prost.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("Prost" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			Prost = radioButton.value; 
		}
	}
if (Prost == 2) {
	alert ("No Prostaglandins status selected!");
	return;
}


// Checks to see which radiobutton is selected in NPA.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("NPA" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			NPA = radioButton.value; 
		}
	}
if (NPA == 2) {
	alert ("No Non-Pharmacological Analgesia status selected!");
	return;
}


// Checks to see which radiobutton is selected in PA.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("PA" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			PA = radioButton.value; 
		}
	}
if (PA == 2) {
	alert ("No Pharmacological Analgesia status selected!");
	return;
}


// Checks to see which radiobutton is selected in CTG.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("CTG" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			CTG = radioButton.value; 
		}
	}
if (CTG == 2) {
	alert ("No CTG status selected!");
	return;
}


// Checks to see which radiobutton is selected in FSE.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("FSE" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			FSE = radioButton.value; 
		}
	}
if (FSE == 2) {
	alert ("No Foetal Scalp Electrode status selected!");
	return;
}


// Checks to see which radiobutton is selected in GestHTN.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("GestHTN" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			GestHTN = radioButton.value; 
		}
	}
if (GestHTN == 2) {
	alert ("No Gestational Hypertension status selected!");
	return;
}



// Checks to see which radiobutton is selected in PreEc.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("PreEc" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			PreEc = radioButton.value; 
		}
	}
if (PreEc == 2) {
	alert ("No Pre-eclampsia status selected!");
	return;
}


// Checks to see which radiobutton is selected in GD.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("GD" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			GD = radioButton.value; 
		}
	}
if (GD == 2) {
	alert ("No Gestational Diabetes status selected!");
	return;
}


// Checks to see which radiobutton is selected in AH.
	for (i = 1; i <= 2; i++) {				
	radioButton = document.getElementById("AH" + i);
		if (radioButton.checked == true) {
			// Assigns value according to which radio button was selected.
			AH = radioButton.value; 
		}
	}
if (AH == 2) {
	alert ("No Antepartum Haemorrhage status selected!");
	return;
}


// Checks to see which radiobutton is selected in Presentation.
for (i = 1; i <= 5; i++) {
radioButton = document.getElementById("Presentation" + i);
	if (radioButton.checked == true) {
		//Assigns value according to which radio button was selected.
		Presentation = radioButton.value; 
		if (Presentation ==1) {
			Breech = 1;
			Brow =0;
			Face =0;
			Shoulder = 0;
		}
		if (Presentation ==2) {
			Breech = 0;
			Brow =1;
			Face =0;
			Shoulder = 0;
		}
		if (Presentation ==3) {
			Breech = 0;
			Brow =0;
			Face =1;
			Shoulder = 0;
		}
		if (Presentation ==4) {
			Breech = 0;
			Brow =0;
			Face =0;
			Shoulder = 1;
		}
		if (Presentation ==5) {
			Breech = 0;
			Brow =0;
			Face =0;
			Shoulder =0;
			NoneoftheAbove3 = 1
		}
	}
}
if (Presentation == 0) {
		alert("No Presentation selected!");
		return;
}



//Calculate LIKELIHOOD.

varx = -0.316 + 0.775 + (0.047*Age) + (0.083*IndigenousorTorresStraitIslander)+ (-0.110*Smoker) + (0.205*AssistedConception) + (-0.180*NorthAfricaMiddleEast) + (-0.183*NorthEastAsia) + (-0.088*NorthWestEurope) + (0.402*SouthernCentralAsia) + (0.190*SubSaharanAfrica) + (0.405*DeliveryataPrivateHospital) + (-0.492*PrivateMidwife) +
(-0.552*PublicMidwife) + (-0.198*PublicMedPrac) + (-0.508*GP) + (0.254*Asthma) + (0.204*Depression) + (0.446*PreexistingHypertension) + (1.551*TypeIDiabetesMellitus) + (1.017*TypeIIDiabetesMellitus) + (-0.417*InducedLabour)+ (AROM*-0.839) + (0.198*Prost) + + (-0.873*CTG) + (-0.763*FSE) + (0.225*GD) + + (0.540*GestHTN) + (PreEc*0.981) + (AH*0.292) + (-1.643*NPA) + (-0.059*PA)  + (2.484*Breech) + (2.481*Brow) + (1.356*Face) + (3.040*Shoulder);

vary = 1 + Math.exp(varx)

varz = Math.exp(varx)/vary 


likelihood = 100*varz;

likelihood = likelihood.toFixed(2);

	
alert("Your likelihood of caesarean section delivery is " + likelihood + "%.");

	

	
		
	
} // End of predict()
	
</script>

