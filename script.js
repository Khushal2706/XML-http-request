
function getDetails(id){
const divEle = document.querySelector(".card-container");

const request = new XMLHttpRequest();

request.open("GET",`https://dummyjson.com/users/${id}`);
request.send();

request.addEventListener("load", function(){
    if(request.status == 404) return;
  //  console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);

    displayUser("beforeend",data);

    const request2 = new XMLHttpRequest();

request2.open("GET",`https://dummyjson.com/users/${id-1}`);
request2.send();

request2.addEventListener("load", function(){
    if(request2.status == 404) return;
  //  console.log(JSON.parse(this.responseText));
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    displayUser("afterbegin",data2,"other");

    const request3 = new XMLHttpRequest();

request3.open("GET",`https://dummyjson.com/users/${id+1}`);
request3.send();

request3.addEventListener("load", function(){
    if(request3.status == 404) return;
  //  console.log(JSON.parse(this.responseText));
    const data3 = JSON.parse(this.responseText);
    console.log(data3);

    displayUser("beforeend",data3,"other");
});
});
});


function displayUser(pos, data, className = ""){
    const card = `<div class="user-card ${className}" >
    <img src=${data.image} alt="Profile Image" />
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
    </div>
  </div>`;

  divEle.insertAdjacentHTML(pos,card);
}
}
getDetails(99);
