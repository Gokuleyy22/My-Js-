const WRAPPER = document.querySelector(".wrapper-main");
function init(n){
    let data = "";
    for(let i = 0; i < n; i++){
        data += `
        <div class="container container${i}">
        <div class="pageHead">
            <div class="idName">
                <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80" class="logo"/>
                <p>@randomImages</p>
            </div>
            <div class="followOption">
                <input type = "button" value = "Follow">
                <span class="material-symbols-outlined">more_vert</span>
            </div>
        </div>
        <img src="https://source.unsplash.com/random/300x300?sig=${i}" class="container-image image"/>
        <div class="pageDown1">
            <div class="like">
            <i class="fa-light fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <span class="material-symbols-outlined">bookmark</span>  
        </div>    
        </div>
        `;
    }
    WRAPPER.innerHTML += data;
}
 
function loadData(n){
    let data = "";
    for(let i = 0; i < n; i++){
        let random = Math.floor(Math.random()*1000);
        data += `
        <div class="container container${i}">
        <div class="pageHead">
            <div class="idName">
                <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80" class="logo"/>
                <p>@randomImages</p>
            </div>
            <div class="followOption">
                <input type = "button" value = "Follow">
                <span class="material-symbols-outlined">more_vert</span>
            </div>
        </div>
        <img src="https://source.unsplash.com/random/300x300?sig=${random}}" class="container-image image"/>
        <div class="pageDown1">
            <div class="like">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <span class="material-symbols-outlined">bookmark</span>  
        </div>    
        </div>
        `;
    }
    WRAPPER.innerHTML += data;
    
}

window.addEventListener("scroll", function () {
    const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (scrolledToBottom) {
        loadData(3);
    }
});

init(4);