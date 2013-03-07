// Author: Mark McAninch //
// ASD //
// Term: 1303 //

$('#form').on('pageinit', function(){
   
    var myForm = $('#ownerform');
        myForm.validate({
      invalidHandler: function(myForm, validator) {},
      submitHandler: function() {
    var data = myForm.serializeArray();
    storeData(data);
    }
  });
    var storeData = function(key){
    var id = Math.floor(Math.random()*1000001);  
  
        
    var item = {};
        item.fname = ["First Name:", $("#firstname").val()];
        item.lname = ["Last Name:", $("#lastname").val()];
        item.year = ["Year:", $("#year").val()];
        item.make = ["Make:", $("#make").val()];
        item.model = ["Model:", $("#model").val()];
        item.repairs = ["Repairs:", $("#repairs").val()];
      localStorage.setItem(id, JSON.stringify(item));
  alert("Information Saved!");
 };       
});