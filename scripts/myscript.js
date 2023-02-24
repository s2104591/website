

        /*
            Author: Mariano Rico, 2021
			References : some of this content is from notes provided by Shekhar Kalra


        */ 		


	     function checkRegForm(){
            //alert("reg check");  

		     hideAllErrors();
			 
			
		 
		     var firstname=document.getElementById("firstname").value;
		     var surname=document.getElementById("surname").value;
		     var email=document.getElementById("email").value;
		     var emailconfirm=document.getElementById("emailconfirm").value;
		     var phone=document.getElementById("phone").value;
			 
			 if(firstname.length<3){
			    document.getElementById("firstnameError").style.display="inline";
				return false;
			 }
			 
			 
			 if(surname.length<3){
			    document.getElementById("surnameError").style.display="inline";
				return false;
			 }
			 
			 
			 if(checkEmail(email)==false){
			    document.getElementById("emailError").style.display="inline";
				return false;
			 }
			 
			 if(email!=emailconfirm){
			    document.getElementById("emailconfirmError").style.display="inline";
				return false;
			 }
			 
			 if(IsNumeric(phone)==false || phone.length<8){
			    document.getElementById("phoneError").style.display="inline";
				return false;
			 }
			 
			 
			 
		  
		     var cost=getMembershipCost();
			 alert("Registration submitted.\nMonthly membership will be $"+cost.toFixed(2));
			 return true;
		 }
	
	     function hideAllErrors(){
		     document.getElementById("firstnameError").style.display="none";
		     document.getElementById("surnameError").style.display="none";
		     document.getElementById("emailError").style.display="none";
		     document.getElementById("emailconfirmError").style.display="none";
		     document.getElementById("phoneError").style.display="none";
			 
			 
		 }
		 
		 //checks if email is in proper email format
		 //from Shekhar Kalra 
		function checkEmail(inputvalue){	
			var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
			if(pattern.test(inputvalue)) {         
				return true;
			}else{   
				return false;
			}
			
		}
		
		//checks via reg ex if age and phone numbers are numbers
		//from Shekhar Kalra 
		function IsNumeric(numstr)
		{
			mystring = numstr;
			if (mystring.match(/^\d+$/ ) ) {
			
				return true;
			}else{
				return false;
			}
		}
		
	    function getMembershipCost()
		{
			var cost=10;
		    var age= document.getElementById("myAge").value;
			var student=document.getElementById("student").checked;
			var employed=document.getElementById("employed").checked;
			var discount=0;
			
			if(age<=20) discount=0.10;
			if(student) discount+=0.05;
			if(employed==false) discount+=0.40;
			var comment="";
			var discountrate=discount*100;
			
			if(discount>0.01) comment=". You will receive a "+discountrate.toFixed(0)+"% discount"; 
			
			//alert("discount="+discount);
			
			
		
			cost=cost*(1-discount);			
			document.getElementById("membercost").innerHTML="Monthly Membership is $"+cost.toFixed(2)+comment;
			
			return cost;
			
			
		}

		//

		function checkContactUsForm(){
	       
			var contactusname=document.getElementById("contactusname").value;
			var contactusemail=document.getElementById("contactusemail").value;
			var contactusmessage=document.getElementById("contactusmessage").value.trim();
			
			
			


			//alert("checkContact form  01->"+contactusmessage);

			

			document.getElementById("contactusnameError").style.display="none";
			document.getElementById("contactusemailError").style.display="none";
            document.getElementById("contactusmessageError").style.display="none";

			

			if(contactusname.length<3){
				document.getElementById("contactusnameError").style.display="inline";
				return false;
			}

			if(contactusemail.length<3){
				document.getElementById("contactusemailError").style.display="inline";
				return false;
			}

			if( checkEmail(contactusemail)==false){
				document.getElementById("contactusemailError").style.display="inline";
				return false;

			}

			//var msglen=contactusmessage.length;
			if(contactusmessage.length<20){
				document.getElementById("contactusmessageError").style.display="inline";
				return false;

			}

			return true;
	   
	   }
   


	

