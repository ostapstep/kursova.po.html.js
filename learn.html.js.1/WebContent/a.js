"use strict"

function inputsForAccount(){

	var PersonAccount = {
		"First_Name": 1,
		"Last_Name": 2,
		"Email_Address":3,
		"EMail_Password":4,
		"EMail_Password_Confirmetion":5,
		"Birth_Day":6,
		"Birth_Month":7,
		"Birth_Year":8,
		"Sex":9,
		"Mobile_Phone":10,
		"Additional_EMail":11,
		"Place_living":12,
		
	}

	for (var i in PersonAccount) {
		//console.log( i , PersonAccount[i]);
		emptyOrNot( i, PersonAccount[i]);
	}	
}

/*function inputsForAccount(){
	var myAccount={};
	myAccount={
	"First Name" : document.getElementById('FirstName').value,
	"Last Name" : document.getElementById('LastName').value,
	"E-mail Address": document.getElementById('EMail_Address').value,
	"E-Mail Password": document.getElementById('EMailPassword').value,
	"E-Mail Password Confirmetion": document.getElementById('EMailPasswordConfirmetion').value,
	"Birth Day" : document.getElementById('bday').value,
	"Birth Month" : document.getElementById('bmonth').value,
	"Birth Year" : document.getElementById('byear').value,
	"Sex" : document.getElementById('sex').value,
	"Mobile Phone" : document.getElementById('mPhone').value,
	"Additional E-Mail" : document.getElementById('additionalEMail').value,
	//"Human Check" : document.getElementById('humanCheck').value,
	"Place living" : document.getElementById('place').value
	//"Condition_And_Politic": document.getElementById('ConditionAndPolitic').value,	
	};
	return myAccount;
}
*/

function emptyOrNot(idOfElement, indexOfElement){
	//console.log(document.getElementById(idOfElement).value);
	if (document.getElementById(idOfElement).value!==""){
		console.log("ok");
		//document.getElementById(idOfElement).style.border = "1px solid gray";
	} 
	else {
		if (indexOfElement===3|| indexOfElement===4|| indexOfElement===5){
			document.getElementById('errormsg'+(indexOfElement-1)).innerHTML = "Це поле не може бути порожнім";
			document.getElementById(idOfElement).style.border = "1px solid red";
		} else if (indexOfElement===1 || indexOfElement===2){
			document.getElementById('errormsg1').innerHTML = "Це поле не може бути порожнім";
			document.getElementById(idOfElement).style.border = "1px solid red";
		} else if (indexOfElement===6 || indexOfElement===7|| indexOfElement===8){
			document.getElementById('errormsg5').innerHTML = "Це поле не може бути порожнім";
			document.getElementById(idOfElement).style.border = "1px solid red";
		} else if (indexOfElement===9){
			document.getElementById('errormsg6').innerHTML = "Це поле не може бути порожнім";
			document.getElementById(idOfElement).style.border = "1px solid red";
		} 
	}
}