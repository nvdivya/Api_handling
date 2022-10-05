let gtbn = document.getElementById('btn');
gtbn.addEventListener("click", getdata)
function getdata() {
    console.log("Button Clicked");
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR", true)
    xhr.send();
    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        displaydata(data);
    }
}
function displaydata(data) {
    let tdata = document.getElementById('tabledata')
    for(let i in data.coins){
    let row = `
           <tr>
           <td>${data.coins[i].id}</td >
           <td><img src=${data.coins[i].icon} style="height:50px; width:50px;" /></td>
           <td>${data.coins[i].price}</td >
           </tr > `
           tdata.innerHTML += row;
}
}
