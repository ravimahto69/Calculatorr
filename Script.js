let valuee = document.getElementById('inputbox')
let button = document.querySelectorAll('button')

let string = ""
let arr = Array.from(button)
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string) 
            valuee.value = string
            return
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            valuee.value = string
            return
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1)
            valuee.value = string
            return
        }
        else {
            if(string == "0"){
                string = ""
            }   
        }
        string = string + e.target.innerHTML
        valuee.value = string

    })
})