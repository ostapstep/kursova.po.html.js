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
	
	test();
	
	function test(){
		var formBlocks = $('.form-block');
		
		for(var i = 0; i < formBlocks.length; i++){
			console.log(formBlocks[i]);
			
			var inputs = $(formBlocks[i]).find('input');
			for(var j = 0; j < inputs.length; j++){
				console.log(inputs[j]);
			}
			
			var error = $(formBlocks[i]).find('.errormsg');
			console.log(error);
			console.log('\n\n\n\n');
		}
	}
}

function emptyOrNot(idOfElement, indexOfElement){
	if ($('#' + idOfElement).val() !== ""){
		checking(false);
	} else {
		checking(true);
	}
	
	function checking(isError){
		if(!isError){
			console.log("ok");
		}
		if (indexOfElement===3|| indexOfElement===4|| indexOfElement===5){
			showError(indexOfElement-1, isError);
		} else if (indexOfElement===1 || indexOfElement===2){
			showError(1, isError);
		} else if (indexOfElement===6 || indexOfElement===7|| indexOfElement===8){
			showError(5, isError);
		} else if (indexOfElement===9){
			showError(6, isError);
		} 
	}
	
	function showError(index, isError){
		if(isError){
			$('#errormsg' + index).html("Це поле не може бути порожнім");
			$('#' + idOfElement).css('border', '1px solid red');
		} else {
			$('#errormsg' + index).html('');
			$('#' + idOfElement).css('border', 'none');
		}
	}
}