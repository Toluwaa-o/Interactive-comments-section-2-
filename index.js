let mainPage = document.getElementById("page")
let existingComments = document.querySelector('.theComments');
let appComments = document.querySelectorAll('.comment');
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.comments.length; i++){
            if(data.comments[i].replies.length === 0){
                mainPage.insertAdjacentHTML('beforeend', `
    <div class='container'>
        <div class="comment">
            <div class="head">
              <img src="${data.comments[i].user.image.png}" alt="" class="avatar">
              <h2>${data.comments[i].user.username}</h2>
              <p>${data.comments[i].createdAt}</p>
            </div>
            <div class='message-control'>
            <div class="reply">
                <svg id="reply" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
                <p>Reply</p>
            </div>
            </div>
            <div class="comText">
              <p>${data.comments[i].content}</p>
            </div>
            <div class="rating">
                <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
                <p class="score">${data.comments[i].score}</p>
                <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>
        </div>
          <div class="write-comment reply-area" id='${i}-comment-reply' style="display: none;">
            <img src="${data.currentUser.image.png}" alt="" class="avatar">
            <textarea class='replyVal'></textarea>
            <button type="submit" class="reply-btn">Reply</button>
            </div>
    </div>`)
            }else {
                mainPage.insertAdjacentHTML('beforeend', `<div class='container'><div class="comment">
            <div class="head">
              <img src="${data.comments[i].user.image.png}" alt="" class="avatar">
              <h2>${data.comments[i].user.username}</h2>
              <p>${data.comments[i].createdAt}</p>
            </div>
            <div class='message-control'>
            <div class="reply"><svg id="reply" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
            <p>Reply</p></div>
            </div>
            <div class="comText">
              <p>${data.comments[i].content}</p>
            </div>
            <div class="rating">
            <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
            <p class="score">${data.comments[i].score}</p>
            <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>
          </div>
          <div class="write-comment reply-area" id='${i}-comment-reply' style="display: none;">
        <img src="${data.currentUser.image.png}" alt="" class="avatar">
        <textarea class='replyVal'></textarea>
        <button type="submit" class="reply-btn">Reply</button>
      </div></div>`)
          for(let j = 0; j < data.comments[i].replies.length; j++){
            if(data.comments[i].replies[j].user.username === "juliusomo"){
                mainPage.innerHTML+=`<div class="reply-text my-reply">
            <div class="head">
            <img src="${data.comments[1].replies[1].user.image.png}" alt="" class="avatar">
            <h1>${data.comments[1].replies[1].user.username}</h1>
            <p id="you-tag">You</p>
            <p class='createdTime'>${data.comments[1].replies[1].createdAt}</p>
            
            </div>
            <div class='message-control delEditSec'>
            <div class="delete">
            <svg id="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <p>Delete</p></div>
            
            <div class="edit">
            <svg id="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
            <p>Edit</p></div>
           </div>
            <div class="repText by-Me">
            <p><span class="replyingTo">@${data.comments[1].replies[1].replyingTo}</span> ${data.comments[1].replies[1].content}</p>
            </div>
            <div class="editedV">
            <textarea class='editedCmt'>${data.comments[1].replies[1].content}</textarea>
            <button class='update'>Update</button>
            </div>
            <div class="rating">
            <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
            <p class="score">${data.comments[1].replies[1].score}</p>
            <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>
            </div>`
            }else {
                mainPage.innerHTML+= `
    <div class="repliesRp">
        <div class="reply-text othersReply">
            <div class="head">
                <img src="${data.comments[i].replies[j].user.image.png}" alt="" class="avatar">
                <h2>${data.comments[i].replies[j].user.username}</h2>
                <p>${data.comments[i].replies[j].createdAt}</p>
            </div>
            <div class='message-control'>
             <div class="reply">
                <svg id="reply" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/></svg>
                <p>Reply</p>
             </div>
            </div>
            <div class="repText">
                <p><span class="replyingTo">@${data.comments[i].replies[j].replyingTo}</span> ${data.comments[i].replies[j].content}</p>
            </div>
            <div class="rating">
                <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
                <p class="score">${data.comments[i].replies[j].score}</p>
                <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>

        </div>
            <div class="write-comment reply-area indiSec" id='${j}-comment-reply' style="width: 95%; margin-left: auto; display: none;">
                <img src="${data.currentUser.image.png}" alt="" class="avatar">
                <textarea class='replyVal indiTxtAr'></textarea>
                <button type="submit" class="reply-btn indBtn">Reply</button>
            </div>
    </div>`
            }
            
                }
            }
            
        }
            
        
        mainPage.insertAdjacentHTML('beforeend', `<div class="write-comment">
        <img src="${data.currentUser.image.png}" alt="" class="avatar">
        <textarea placeholder="Add a comment..." id='for-comments'></textarea>
        <button type="submit" class="send">Send</button>
      </div>`)

                
      let reply = document.querySelectorAll(".reply");
      let replyBtn = document.querySelectorAll(".reply-btn");
      let replyArea = document.querySelectorAll(".reply-area")
      let comment = document.querySelectorAll(".comment");
      let container = document.querySelectorAll(".container");
      let textAreaVal = document.querySelectorAll(".replyVal");
      let sendEl = document.querySelector(".send");
      let confirmEl = document.querySelector(".confirmation");
      let bigComment = document.getElementById('for-comments')
      let otherComment = document.querySelectorAll('.repliesRp');
      
      

      

      sendEl.addEventListener('click', function(){
        bigCommentV = bigComment.value; 
        mainPage.insertAdjacentHTML('afterbegin', `<div class='container'><div class="comment my-reply">
        <div class="head">
          <img src="${data.currentUser.image.png}" alt="" class="avatar">
          <h2>${data.currentUser.username}</h2>
          <p id="you-tag">You</p>
          <p class='createdTime'>Now</p>
        </div>
        <div class='message-control'>
            <div class="delete">
            <svg id="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <p>Delete</p></div>
            
            <div class="edit">
            <svg id="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
            <p>Edit</p></div>
           </div>
        <div class="comText by-Me">
          <p>${bigCommentV}</p>
        </div>
        <div class="editedV">
        <textarea class='editedCmt'>${bigCommentV}</textarea>
        <button class='update'>Update</button>
        </div>
        <div class="rating">
        <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
        <p class="score">0</p>
        <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
        </div>
      </div>
      </div>`) 
      bigComment.value = "";
        editDel()
        adjustingRating()
        updateButtonFunction()
      })

      for(let k = 0; k < otherComment.length; k++){
        let indButton = document.querySelectorAll('.indBtn');
        let indiTXTArea = document.querySelectorAll('.indiTxtAr');
        let indiSection = document.querySelectorAll('.indiSec');
        indButton[k].addEventListener("click", function(){
            enteredReply = indiTXTArea[k].value
            otherComment[k].insertAdjacentHTML('beforeend', `<div class="reply-text my-reply by-Me">
            <div class="head">
            <img src="${data.currentUser.image.png}" alt="" class="avatar">
            <h2>${data.currentUser.username}</h1>
            <p id="you-tag">You</p>
            <p class='createdTime'>Now</p>
            
            </div>
            <div class='message-control'>
            <div class="delete">
            <svg id="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <p>Delete</p></div>
            
            <div class="edit">
            <svg id="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
            <p>Edit</p></div>
           </div>
            <div class="repText by-Me">
            <p><span class="replyingTo">@${data.comments[1].replies[k].user.username} </span>${enteredReply}</p>
            </div>
            <div class="editedV">
            <textarea class='editedCmt'>${enteredReply}</textarea>
            <button class='update'>Update</button>
            </div>
            <div class="rating">
            <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
            <p class="score">0</p>
            <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>
            </div>`)
            indiSection[k].style.display = 'none'
            indiTXTArea[k].value = ""
            editDel()
            adjustingRating()
            updateButtonFunction()
          })
      }

      for(let k = 0; k < container.length; k++){
        replyBtn[k].addEventListener("click", function(){
            enteredReply = textAreaVal[k].value
            container[k].insertAdjacentHTML('beforeend', `<div class="reply-text my-reply by-Me">
            <div class="head">
            <img src="${data.currentUser.image.png}" alt="" class="avatar">
            <h2>${data.currentUser.username}</h1>
            <p id="you-tag">You</p>
            <p class='createdTime'>Now</p>
            
            </div>
            <div class='message-control'>
            <div class="delete">
            <svg id="delete" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
            <p>Delete</p></div>
            
            <div class="edit">
            <svg id="edit" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
            <p>Edit</p></div>
           </div>
            <div class="repText by-Me">
            <p><span class="replyingTo">@${data.comments[k].user.username} </span>${enteredReply}</p>
            </div>
            <div class="editedV">
            <textarea class='editedCmt'>${enteredReply}</textarea>
            <button class='update'>Update</button>
            </div>
            <div class="rating">
            <svg id="plus" class="plus" width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
            <p class="score">0</p>
            <svg id="minus" class="minus" width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
            </div>
            </div>`)
            replyArea[k].style.display = 'none'
            textAreaVal[k].value = ""
            editDel()
            adjustingRating()
            updateButtonFunction()
          })
      }
      
      for(let k = 0; k<reply.length; k++) {
        reply[k].addEventListener("click", function(){
            let x = window.matchMedia('(min-width: 1000px)');
            if(x.matches){
                replyArea[k].style.display = "flex";
            }else {
                replyArea[k].style.display = "grid";
            }
        })
      }

      function adjustingRating(){
        let plusBtn = document.querySelectorAll(".plus");
        let minusBtn = document.querySelectorAll(".minus");
        let score = document.querySelectorAll(".score");

        for(let k = 0; k<minusBtn.length; k++){
            minusBtn[k].addEventListener("click", function(){
                let theScore = score[k].textContent;
                theScore = Number(theScore)-1;
                if(theScore < 0){
                    score[k].textContent = 0;
                }else {
                    score[k].textContent = theScore;
                }
            })
          }
    
          for(let k = 0; k<plusBtn.length; k++){
            plusBtn[k].addEventListener("click", function(){
                let theScore = score[k].textContent;
                theScore = Number(theScore)+1;
                score[k].textContent = theScore;
            })
          }
    
      }

      function editDel(){
        let editField = document.querySelectorAll(".editedV");
        let myReplies = document.querySelectorAll(".my-reply")
        let editer = document.querySelectorAll(".edit");
        let createdReply = document.querySelectorAll(".by-Me");
        for(let j = 0; j < editer.length; j++){
            editer[j].addEventListener('click', function(){
                    editField[j].style.display = "flex";
                    
            })
          }

        let deleter = document.querySelectorAll(".delete");
        for(let k = 0; k<deleter.length; k++){
            function deleteConfirmation(k){
                let yesBtn = document.getElementById("Yes-btn");
            deleter[k].addEventListener("click", function(){
                mainPage.style.opacity = 0.4;
                confirmEl.style.display = "block"
                yesBtn.addEventListener('click', function(){
                    myReplies[k].style.display = "none"
                    mainPage.style.opacity = 1;
                    confirmEl.style.display = "none";
                })
            })
            }
            deleteConfirmation(k)
          }
      }

      editDel()

      function updateButtonFunction(){
        let updateBtn = document.querySelectorAll(".update");
      for (let k = 0; k < updateBtn.length; k++){
        function updateTingy(k){
            updateBtn[k].addEventListener('click', function(){
                let timeCreated = document.querySelectorAll('.createdTime');
                let editCont = document.querySelectorAll('.editedCmt');
                let createdReply = document.querySelectorAll(".by-Me");
                let editField = document.querySelectorAll(".editedV");
                let messageCTRL = document.querySelectorAll(".delEditSec");
                    createdReply[k].textContent = editCont[k].value;
                    editField[k].style.display = "none"
                    createdReply[k].style.display = "flex"
                    timeCreated[k].textContent = "Now"
            })
        }
        updateTingy(k)
        }
      }
      updateButtonFunction()


      let noBtn = document.getElementById("No-btn");
      noBtn.addEventListener("click", function(k){
        mainPage.style.opacity = 1;
        confirmEl.style.display = "none";
    })
      adjustingRating()
    })