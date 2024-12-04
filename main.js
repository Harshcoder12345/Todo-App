const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const body = document.querySelector('body')



const Submit = (e)=>{
    e.preventDefault();


    let li = document.createElement('li')
    li.className = "list-group-item my-3 fade-in push-list"
    li.innerText = input.value
    let button = document.createElement('button')
    button.innerText = "Delete"
    button.className = "btn btn-sm btn-danger float-end"
    li.appendChild(button)
    ul.appendChild(li)
    ul.appendChild(dltBtn)
    form.reset();
}

const Shortbtn = document.createElement('button')
Shortbtn.className = "btn btn-danger text-light text-centre my-2"
Shortbtn.innerText = "Sort";
Shortbtn.style.width = "200px"



// const ShortAlpha =()=>{
    
//     let listItems = document.getElementsByClassName('push-list')
//     let empty = [];

// for (let i = 0; i < listItems.length; i++) {
//     let itemText = listItems[i].textContent
//     empty.push(itemText)
    
    
// }
// console.log(empty)

    
// }


// const ShortAlpha = () => {
//     const listItems = document.getElementsByClassName('push-list');
// const listItemsArray = Array.from(listItems);


// Sort the array based on text content
//  listItemsArray.sort((a, b) => {
//   return a.textContent.localeCompare(b.textContent);
// });

// Re-append the sorted list items to the parent element
// const parentUl = listItemsArray[0].parentElement; 
// Assuming all list items have the same parent
// parentUl.innerHTML = ''; 
// Clear the parent element

// listItemsArray.forEach(li => {
//   parentUl.appendChild(li);
// });
// };

// let sorted = empty.sort((a,b)=>{a.localeCompare(b)})
    // console.log(sorted)



    const ShortAlpha = ()=> {

        let listItems = document.getElementsByClassName('push-list')
        // console.log(listItems)

        let listItemsArray = Array.from(listItems);
        // console.log(listItemsArray)

        listItemsArray.sort((a,b)=>{return a.textContent.localeCompare(b.textContent)})

        // console.log(listItemsArray)

        const parentUl = listItemsArray[0].parentElement
        console.log(parentUl)

        parentUl.innerText = ''

    
        listItemsArray.forEach((li)=>{
            parentUl.appendChild(li)
        })
         
         





        console.log("Sort method will run")
    }

Shortbtn.addEventListener('click', ShortAlpha)

ul.appendChild(Shortbtn)



const dltBtn = document.createElement('button')
dltBtn.className = "btn text-center btn-primary w-50 my-2"
dltBtn.innerText = "Delete All"

const RemoveAll = ()=>{
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    }

    // Remove removes all the DOM element hence can't be use

dltBtn.addEventListener("click", RemoveAll)

const Deletetask = (e)=>{
 
    if(e.target.className.includes('btn-sm')){
       e.target.parentElement.remove()
    }


}
form.addEventListener('submit', Submit)
ul.addEventListener('click', Deletetask)





let ModeBtn = document.createElement('button')
ModeBtn.innerText = "Mode"
ModeBtn.style.position = "absolute"
ModeBtn.className ='btn btn-secondary'
ModeBtn.style.right = "20px"
ModeBtn.style.top = "30px"

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



