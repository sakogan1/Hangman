const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const words = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang"]

let select = Math.floor(Math.random() * words.length)
let selected = words[select].toUpperCase().split('')
let ind = []

console.log(selected)


function createWord(){
    for(i=0; i<selected.length;i++){
        ind[i]="_" + " "
        document.querySelector(`h1`).innerHTML = ind.join("")
    }
}
const out=[]

let selectedLength=selected.length
let anzahlVersucheSelector1 = 6
let anzahlVersucheSelector2 = 9
let anzahlVersucheSelector3 = 12

let keyboard=document.createElement(`div`)
keyboard.id="keyboard"
document.querySelector(`body`).appendChild(keyboard)

let textArea = document.createElement(`h1`)
textArea.className = "textArea"
document.querySelector(`body`).appendChild(textArea)
createWord()

let pic = document.createElement(`img`)
pic.src = "https://images.unsplash.com/photo-1567589967685-d431540f735e"
document.querySelector(`div`).appendChild(pic)

let count=0

let realCount=0

function getCount(){
    setInterval(() => {
        realCount = count
return realCount    
}, 100);
}



alphabet.forEach(key => {
    const alphabetToUpperCase = key.toUpperCase()
    let btn = document.createElement(`button`)
    btn.style.backgroundColor="lightgreen"
    
    let btnText =document.createTextNode(alphabetToUpperCase)
    console.log(btnText)
    btn.appendChild(btnText)
    let field = document.getElementById("keyboard") 
    field.appendChild(btn)

    btn.addEventListener(`click`,(event)=>{   
        
        let match = event.target.innerHTML
        console.log(ind)
       
        let out=ind
        
         console.log(out)
       
        for(i=0; i<selected.length;i++){
            if(selected[i]==match){
            ind[i]=match
            count=realCount-1
        }   
        }
        if(selected[i]!== match){
            count++
            console.log(count)
            console.log(realCount + " realcount")
            selectPrio()
        }
    document.querySelector(`h1`).innerHTML = out.join("")
    })

});

function selectPrio(){
    var e = document.querySelector(`select`);
    var result = e.options[e.selectedIndex].text;
    document.querySelector(`select`).style.display="none"  
  
    if(anzahlVersucheSelector1 === parseInt(result))
    {
        document.querySelector(`p`).innerHTML = "Sie haben bereits " + realCount + " von " + anzahlVersucheSelector1 + " Versuchen verbraucht"
    }
   else if(anzahlVersucheSelector2 === parseInt(result))
    {
        document.querySelector(`p`).innerHTML = "Sie haben bereits " + realCount + " von " + anzahlVersucheSelector2 + " Versuchen verbraucht"
    }
   else if(anzahlVersucheSelector3 === parseInt(result))
    {
        document.querySelector(`p`).innerHTML = "Sie haben bereits " + realCount + " von " + anzahlVersucheSelector3 + " Versuchen verbraucht"
    }
    if(realCount==result){
        
       setInterval(() => {
           hide()
           document.querySelector(`p`).innerHTML = "Danke fürs Spielen ! ! !"
           document.querySelector(`h3`).innerHTML = `<a href="index.html">Nochmal Spielen</a>`

       }, 1500); }
}

function hide(){
    setTimeout(() => {
        document.getElementById(`keyboard`).style.display = "none";
        document.querySelector(`h1`).style.display="none"
        document.querySelector(`div`).style.display="none"
    }, 500);
}


function showMe(){
    document.getElementById(`keyboard`).style.display = "block";
    document.querySelector(`h1`).style.display="block"
    document.querySelector(`div`).style.display="block"

}



