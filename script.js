var div=document.createElement("div");
div.style.textAlign="center";
var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button =document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);
div.append(input,button);
document.body.append(div);

var card = document.createElement("div");
card.setAttribute("class","card");
card.style.width="18rem";
card.style.textAlign="center";
card.style.marginTop="30px";
card.style.marginLeft="525px";
var list = document.createElement("ul");
list.classList.add("list-group","list-group-flush");
list.style.padding="30px";
var one=document.createElement("li");
one.setAttribute("class","list-group-item");
one.style.padding="15px";
var two=document.createElement("li");
two.setAttribute("class","list-group-item");
two.style.padding="30px";
var three=document.createElement("li");
three.setAttribute("class","list-group-item");
three.style.padding="15px";
list.append(one,two,three);
card.append(list);
document.body.append(card);


// let active=document.createElement("div");
// active.setAttribute("id","Active");
// let recovered=document.createElement("div");
// recovered.setAttribute("id","Recovered");
// let deaths=document.createElement("div");
// deaths.setAttribute("id","Deaths");

// let err=document.createElement("div");
// err.setAttribute("id","error");

async function foo(){
    try{
        let countryname=document.getElementById("country").value;
        // console.log(countryname);
        let url =`https://api.covid19api.com/dayone/country/${countryname}`;
        let res = await fetch(url);
        let data= await res.json();
        // console.log(data); 
        let index=data.length-1;
        one.innerHTML=`Total Active:${data[index].Active}`;
        two.innerHTML=`Total Recoverd:${data[index].Recovered}`;
        three.innerHTML=`Total Deaths:${data[index].Deaths}`;
        // active.innerHTML=`Total :${data[index].Active}`;       
        // recovered.innerHTML=`Total :${data[index].Recovered}`; 
        // deaths.innerHTML=`Total :${data[index].Deaths}`;                
    }
    catch(error){
    //    err.innerHTML=`Data Not Found!!!!`;
    alert("Data is not found!");
         }
    }
    
                            