// menu toggler
const menuToggleBtn = document.querySelector('.toggle-menu');
const smallScreenNav  = document.querySelector('.menu-small');
menuToggleBtn.addEventListener('click',()=>{
  
    smallScreenNav.classList.toggle("close")
    if(menuToggleBtn.classList.contains('fa-bars')){
        menuToggleBtn.classList.remove("fa-bars")
        menuToggleBtn.classList.add('fa-xmark')
    }
    else{
        menuToggleBtn.classList.remove('fa-xmark')
        menuToggleBtn.classList.add('fa-bars')
    }
       
      
    // menuToggleBtn.classList.remove("fa-bars ")
    // menuToggleBtn.classList.add('fa-xmark')

})
// see more see less functions
const data = [
    {
        "name":"Htet Wai Yan Soe (GWI)",
        "img":"./images/people/ppl1.avif",
        "status":"MM Tech Guru",
        "bio":"Ko Htet Wai Yan Soe (GWI) is currently working as an instructor for softward development.Ko Htet Wai Yan Soe (GWI) is currently working as an instructor for softward development."
    },
    {
        "name":"Yudho Ahmad Diponegoro",
        "img":"./images/people/ppl2.avif",
        "status":"AWS Startup Solutions Architect",
        "bio":"Yudho Ahmad Diponegoro is a senior solutions architect at AWS Web Services Company."
    },
    {
        "name":"Lwin Moe Paing",
        "img":"./images/people/ppl3.avif",
        "status":"Frontend Engineer",
        "bio":"Lwin Moe Paing was a senior react native developer at UAB Bank and MO Money (Shwe Bank).But for now, he's working at a senior frontend engineer at Binary Lab."
    },
    {
        "name":"Zaw Hlyan Htet",
        "img":"./images/people/ppl4.avif",
        "status":"Senior Software Engineer",
        "bio":"Ko Zaw Hlyan Htet is a full stack developer at Develp Now company and he will discuss under the title of 'Optimizing Data Fetching with React Query'"
    },
    {
        "name":"Thet Khine",
        "img":"./images/people/ppl5.avif",
        "status":"Solution Architect",
        "bio":"Sayar Thet Khine graduated from University of Computer Studies Yangon at 2009 and he is working at a solution architect as a financial company."
    },
    {
        "name":"Myat Min Soe",
        "img":"./images/people/ppl6.avif",
        "status":"Lead Software Engineer",
        "bio":"Ko Myat Min Soe has over 10 years of experience in software engineering and currently working  at Innorithm as a lead software engineer"
    },
]
const section = document.querySelector(".speakers");
function createUI(index){
    const divCover = document.createElement('div');
    divCover.classList.add("speaker")
    divCover.innerHTML = `<div class="speaker-imgs">
    <img src="./images/people/chessboard.png" alt="" class="chessboard">
    <img src=${data[index].img} alt="" class="speaker-img">              
    </div>
    <div class="text-controll">
    <h4 class="speaker-name">${data[index].name}</h4>
    <p class="speaker-status">${data[index].status}</p>
    <hr class="line speaker-line">
    <p class="speaker-bio">
        ${data[index].bio}
    </p>
    </div> `
  
    // section.innerHTML= divCover;
     section.appendChild(divCover)
}
const divCover = document.querySelector('.speakers-container')

function updateGridColumns() {
    const windowWidth = window.innerWidth;
    const gridContainer = document.querySelector(".speakers")
    const initialColumns = getComputedStyle(gridContainer).gridTemplateColumns;
    const loopCount = windowWidth<800?2:data.length;
    // Example: Adjust grid-template-columns based on window width
    if (windowWidth < 800) {
        section.innerHTML=""
        gridContainer.style.gridTemplateColumns = '1fr';
        for(let i=0;i<loopCount;i++){
           createUI(i)
        }
        const btnElement = divCover.querySelector(".btn");
        makeBtn("moreContent",'More <i class="fa-solid fa-angle-down icon"></i>')
       
        if(btnElement){
            divCover.removeChild(btnElement)
        }
       
       
    } else if (windowWidth > 800) {
        section.innerHTML=""
        const btnElement =divCover.querySelector(".btn");
        if(btnElement){
            divCover.removeChild(btnElement)
        }
        for(let i=0;i<loopCount;i++){
            createUI(i)
        }
        gridContainer.style.gridTemplateColumns = '1fr 1fr';
    } else {
        section.innerHTML=""
        const btnElement = divCover.querySelector(".btn");
        if(btnElement){
            divCover.removeChild(btnElement)
        }
        gridContainer.style.gridTemplateColumns = initialColumns; // Restore initial value
    }
}

function addContents(){
    const width= window.innerWidth;
    const height = window.innerHeight;
    for(let i=0;i<data.length;i++){
    
        createUI(i);
    }
}

let isMoreContentShown = false;
function showMoreBtn() {
    const speakers = document.querySelector(".speakers");
    const morebtn = divCover.querySelector(".btn");
    if (isMoreContentShown) {
        // If more content is currently shown, toggle to less content
        morebtn.innerHTML = 'More <i class="fa-solid fa-angle-down icon"></i>';
        const speakers = document.querySelector(".speakers");
        speakers.innerHTML = "";
        for (let i = 0; i < 2; i++) {
            createUI(i);
        }
    }
         else {
        // If less content is currently shown, toggle to more content
         morebtn.innerHTML = 'Less <i class="fa-solid fa-angle-up icon"></i>';
        for (let i = 2; i < data.length; i++) {
            createUI(i);
        }
    }
   
    // Toggle the state
    isMoreContentShown = !isMoreContentShown;
   
    }

// <button class="moreContent">More <i class="fa-solid fa-angle-down icon"></i></button> -->
function makeBtn(className,context){
  
    const btnTag = document.createElement('button')
    btnTag.classList.add("btn");
    btnTag.classList.add(className)
    btnTag.innerHTML = context;
    divCover.appendChild(btnTag);
    btnTag.addEventListener('click',()=>{
        console.log(data.length);
        showMoreBtn()
    })
    
}
window.addEventListener('DOMContentLoaded',()=>{
    updateGridColumns()
})
window.addEventListener('resize',()=>{
    updateGridColumns();
})