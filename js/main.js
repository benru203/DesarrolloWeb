window.onload = ()=>{
    let button = document.querySelector('button');
    button.addEventListener('click',(e)=>{
        e.preventDefault;
        let form = document.querySelector('.form');
        let inputs = form.querySelectorAll('input');
        for (let index = 0; index < inputs.length; index++) {
            if(!validator(inputs[index],'required|min:10')){            
                inputs[index].classList.add("errorClass");
                return false;
            }else{
                inputs[index].classList.remove("errorClass");
            }       
        }
        console.log('enviar datos');
    });
};

function validator(element, validator){
    let arrayValidator = validator.split("|");
    for (let index = 0; index < arrayValidator.length; index++) {
        if(arrayValidator[index] == 'required'){
            return (element.value.length == 0)?false:true;
        }
        if(arrayValidator[index].indexOf("min") != -1){
            let pos = arrayValidator[index].indexOf(":");
            let num = parseInt(arrayValidator[index].substring(pos+1));
            return (element.value.length == num)?false:true;        
        }
        if(arrayValidator[index].indexOf("max") != -1){
            let pos = arrayValidator[index].indexOf(":");
            let num = parseInt(arrayValidator[index].substring(pos+1));
            return (element.value.length == num)?false:true;        
        }
    }
    return true;
}