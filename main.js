const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const body = document.querySelector('body')
// const deleteAll = document.querySelector('.deleteall')


// console.log(deleteAll)


let counts = document.getElementById("counting")

let a = 0
counts.innerHTML = a;


function Increacount() {
    a++;
    counts.innerHTML = a
    console.log("Increase it")
}
function decrement() {
    a--;
    counts.innerHTML = a
}



const Submit = (e)=>{
    e.preventDefault();

    Increacount();
    let li = document.createElement('li')
    li.className = "list-group-item my-2 fade-in push-list"
    li.innerText = input.value
    li.style.color = "red"
    let button = document.createElement('button')
    button.innerText = "Delete"
    button.className = "btn btn-sm btn-danger float-end"
    li.appendChild(button)
    ul.appendChild(li)
    ul.appendChild(dltBtn)

   
    
    form.reset();

   
}

const Shortbtn = document.createElement('button')
Shortbtn.className = "btn btn-danger text-light text-centre"
Shortbtn.style.position = "absolute"
Shortbtn.innerText = "Sort";
Shortbtn.style.right = "20px"
Shortbtn.style.top = "30px"

    const ShortAlpha = ()=> {

        const dltBtn = ul.querySelector('.btn-primary')

        let listItems = document.getElementsByClassName('push-list')
      

        let listItemsArray = Array.from(listItems);
        

        listItemsArray.sort((a,b)=>{return a.textContent.localeCompare(b.textContent)})

        

        const parentUl = listItemsArray[0].parentElement
        console.log(parentUl)

        parentUl.innerText = ''

        if(dltBtn){
            parentUl.appendChild(dltBtn)
        }

    
        listItemsArray.forEach((li)=>{
            parentUl.appendChild(li)
        })
         

        console.log("Sort method will run")
    }

Shortbtn.addEventListener('click', ShortAlpha)

body.appendChild(Shortbtn)


const RemoveAll = () => {
    const dltBtn = ul.querySelector('.btn-primary'); 

    


      
    a =0
    counts.innerHTML = a;
  
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
      
    }
  
    if (dltBtn) {
      ul.appendChild(dltBtn); 
    }
  };

    


const dltBtn = document.createElement('button')
dltBtn.className = "btn text-center btn-primary "
dltBtn.style.right = "100px"
dltBtn.style.top = "30px"
dltBtn.style.position = "absolute"
dltBtn.innerText = "Delete All"


dltBtn.addEventListener("click", RemoveAll)

form.appendChild(dltBtn)




const Deletetask = (e)=>{
 
    if(e.target.className.includes('btn-sm')){
       e.target.parentElement.remove()
       decrement()
    }


}
form.addEventListener('submit', Submit)
ul.addEventListener('click', Deletetask)





let ModeBtn = document.createElement('button')
ModeBtn.innerText = "Mode"
ModeBtn.style.position = "absolute"
ModeBtn.className ='btn btn-secondary'
ModeBtn.style.left = "20px"
ModeBtn.style.top = "25px"

body.appendChild(ModeBtn)
// console.log(ModeBtn)

let count = 0
const ThemeChange = (e)=> {
    if(count%2===0){
    body.style.backgroundColor = "gray"
    ModeBtn.innerHTML = 'Dark Mode'
    console.log(count)
    }else{
        body.style.backgroundColor = "white"
          ModeBtn.innerHTML = 'Light Mode'
        console.log(count)
    }
    count++
}
ModeBtn.addEventListener("click" , ThemeChange)





