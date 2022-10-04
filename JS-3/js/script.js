// var bookMarkName = document.getElementById("bookMarkName");
// var bookMarkWebSite = document.getElementById("bookMarkWebSite");
// var bookMarkList = [];

// if (localStorage.getItem("list") != null) {
//     bookMarkList = JSON.parse(localStorage.getItem("list"))
//     displaySite()
// }

// function submit() {
//     var siteLink = {
//         name : bookMarkName.value,
//         url  : bookMarkWebSite.value,
//     }
//     bookMarkList.push(siteLink);

//     localStorage.setItem("list" , JSON.stringify(bookMarkList))

//     displaySite() 
// }

// function displaySite() {
//     var temp = "";
//     for ( i = 0; i < bookMarkList.length ; i++) {
        
//         temp +=

//      ` <div  class="w-100 d-flex flex-row align-items-center bg-light p-4 my-4">
            
//         <p class="fs-3 fw-bold w-25" >`+ bookMarkList[i].name +`</p>
//         <a href="http://`+ bookMarkList[i].url +`" target="_blank" class="btn btn-primary ">
//         visit 
//         </a>
//         <button onclick="deleteBookMark(`+ i +`)" class="btn btn-danger mx-2">Delete</button>

//     </div> `   

//     }
//     document.getElementById("BookMarkList").innerHTML = temp;
// }

// function deleteBookMark(i) {
//     bookMarkList.splice(i ,1);

//     localStorage.setItem("list" , JSON.stringify(bookMarkList)) 

//     displaySite()
//     console.log(bookMarkList);
// }




var num = 5789