function AddNewWeFeild(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQFeild(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('AQField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let AqOb = document.getElementById("Aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    AqOb.insertBefore(newNode, aqAddButtonOb);

}
function cancelNewAQFeild(){
    newNode.close;
}

//Genarate Resume 
function generateresume(){
    
    let nameField = document.getElementById("nameField").value;

    let nameTemp1 = document.getElementById("nameTemp1");
    nameTemp1.innerHTML = nameField;

    document.getElementById("nameTemp2").innerHTML = nameField;

    document.getElementById("contactTemp").innerHTML = document.getElementById("contactField").value;

    document.getElementById("AddressTemp").innerHTML = document.getElementById("AddressField").value;

    document.getElementById("fbTemp").innerHTML = document.getElementById("FacebookFeild").value;

    document.getElementById("InstaTemp").innerHTML = document.getElementById("InstagramField").value;

    document.getElementById("LinkeTemp").innerHTML = document.getElementById("LinkedinField").value;
    
    document.getElementById("ObjTemp").innerHTML = document.getElementById("ObjectiveField").value;
    
    let wes = document.getElementsByClassName("weField");
    
    let str="";
 
    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("WEtemp").innerHTML = str;

    let AQs = document.getElementsByClassName("AQField");
    
    let str1="";
 
    for(let e of AQs)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("Aqtemp").innerHTML = str1;

    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";

    let file = document.getElementById("ImageField").files[0];
    
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function(){
    document.getElementById("imgTemp").src = reader.result;
    };
}

function printresume(){
    window.print();
}

function createresume(){

    document.getElementById("resume-form").style.display="block";
    
}



