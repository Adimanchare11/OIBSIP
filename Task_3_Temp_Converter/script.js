let celciusInput=document.querySelector('#celcius>input')
let fahrenheitInput=document.querySelector('#fahrenheit>input')
let kelvinInput=document.querySelector('#kelvin>input')

let btn=document.querySelector('.button button')
function round(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input',function(){
let ctemp=parseFloat(celciusInput.value)
let ftemp=(ctemp*(9/5))+32
let ktemp=ctemp+273.15
fahrenheitInput.value=round(ftemp)
kelvinInput.value=round(ktemp)
})

fahrenheitInput.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenheitInput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=ctemp+273.15
    celciusInput.value=round(ctemp)
    kelvinInput.value=round(ktemp)
})

kelvinInput.addEventListener('input',function(){
    let ktemp=parseFloat(kelvinInput.value)
    let ftemp=((ktemp-273.15)*(9/5))+32
    let ctemp=ktemp-273.15
    fahrenheitInput.value=round(ftemp)
    celciusInput.value=round(ctemp)
})

btn.addEventListener('click',()=>{
    celciusInput.value="" + "℃"
    fahrenheitInput.value=" ℉"
    kelvinInput.value=" K"
})