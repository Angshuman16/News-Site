console.log("This is my Index.js file ");


let source = 'bbc-news';
let apiKey = 'da9f55d7cafe467ab9e3951a4829384b'

let newsAccordian=document.getElementById("newsAccordian");

//create an azax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function(){
    if(this.status === 200)
    {
        let json = JSON.parse(this.responseText);
        let articles= json.articles;
       // console.log(articles);
       let newsHtml="";
       articles.forEach(function(element,index) {
         
            
               let news= `<div class="card">
               <div class="card-header" id="headingOne">
                 <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <b>Breaking News ${index+1}: </b>${element["title"]}
                 </button>
               </div>
               </div>
               <div id="collapse${index}" class="collapse" aria-labelledby="headingcollapse${index}" data-bs-parent="#accordionExample">   
                 <div class="card-body">
                  ${element["content"]}.<a href="${element['url']}" target="_blank">Read More Here</a>
                 </div>
               </div>
             </div>`
          newsHtml+=news;

             
        });
        newsAccordian.innerHTML = newsHtml;
       
    }
    else{
        console.log("Some Error Occured")
    }
}
xhr.send()


