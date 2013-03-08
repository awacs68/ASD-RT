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

function getData(){
    if(localStorage.length === 0){
           alert("There is no data in Local Storage so default data was added.");
           autoFillData();
  }
  var makeDiv = document.createElement("form");
  makeDiv.setAttribute("id", "items");
  var makeList = document.createElement("ul");
  makeDiv.appendChild(makeList);
  document.body.appendChild(makeDiv);
  $("items").style.display = "block"
  for(var i=0, len=localStorage.length; i<len;i++){
    var makeli = document.createElement("li");
    var linksLi = document.createElement("li")
    makeList.appendChild(makeli);
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var obj = JSON.parse(value);
    var makeSubList = document.createElement("ul");
    makeli.appendChild(makeSubList);
    getImage(obj.vehicle[1], makeSubList);
    for(var n in obj){
      var makeSubli = document.createElement("li");
      makeSubList.appendChild(makeSubli);
      var optSubText = obj[n][0]+" "+obj[n][1];
      makeSubli.innerHTML = optSubText;
      makeSubList.appendChild(linksLi);
    }
    makeItemLinks(localStorage.key(i), linksLi);
    }
  }