
var somme=document.getElementById("total");
var spadriQte = document.getElementById("spadri-qte");
var klassetQte = document.getElementById("klasset-qte");
var cartableQte = document.getElementById("cartable-qte");
var spadriPrice= document.getElementById("spadri-price");
var klassetPrice=document.getElementById("klasset-price");
var cartablePrice=document.getElementById("cartable-price");
function addSpadri(){
    spadriQte.innerHTML =+spadriQte.innerHTML+1;
  spadriPrice.innerText=+ spadriPrice.innerText+120;
  somme.innerHTML=+somme.innerHTML+ 120;
  
}
document.getElementById("add-spadri").addEventListener("click",addSpadri);
function supprimeSpadri(){
    spadriQte.innerHTML =+spadriQte.innerHTML-1;
  spadriPrice.innerText=+spadriPrice.innerText-120;
  somme.innerHTML=+somme.innerHTML- 120;
}
document.getElementById("del-spadri").addEventListener("click",supprimeSpadri);

function addklasset(){
    klassetQte.innerHTML =+klassetQte.innerHTML+1;
    klassetPrice.innerText=+ klassetPrice.innerText+3;
    somme.innerHTML=+somme.innerHTML+3;
}
document.getElementById("add-klasset").addEventListener("click",addklasset);
function supprimeklasset(){
    klassetQte.innerHTML =+klassetQte.innerHTML-1;
    klassetPrice.innerText=+klassetPrice.innerText-3;
    somme.innerHTML=+somme.innerHTML-3;
}
document.getElementById("del-klasset").addEventListener("click",supprimeklasset);
function addKartaba(){
cartableQte.innerHTML =+cartableQte.innerHTML+1;
cartablePrice.innerText=+cartablePrice.innerText+35;
somme.innerHTML=+somme.innerHTML+35;
}
document.getElementById("add-cartable").addEventListener("click",addKartaba);
function supprimeKartaba(){
    cartableQte.innerHTML =+cartableQte.innerHTML-1;
    cartablePrice.innerText=+cartablePrice.innerText-35;
    somme.innerHTML=+somme.innerHTML-35;
    }
    document.getElementById("del-cartable").addEventListener("click",supprimeKartaba);





function removeSpadri() {
var spa= document.getElementById("row-spadri");
spa.remove();
somme.innerHTML=+somme.innerHTML-spadriPrice.innerText;

    
}document.getElementById("delete-spadri").addEventListener("click",removeSpadri);

function removeklaset(){
 
    document.getElementById("row-klasset").style.display="none";
    somme.innerHTML=+somme.innerHTML-klassetPrice.innerText;
}

document.getElementById("delete-klasset").addEventListener("click",removeklaset);


function removekartable(){
 
    document.getElementById("row-cartable").style.display="none";
    somme.innerHTML=+somme.innerHTML-cartablePrice.innerText;
}


document.getElementById("delete-cartable").addEventListener("click",removekartable);
function jaimeS(){
     document.getElementById("aime-spadri").style.color="red";
}
document.getElementById("aime-spadri").addEventListener("click",jaimeS)
