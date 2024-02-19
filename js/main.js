var qoute =[{"qoute":"its not what happens to you but how you react tp it that it matter",
"author":"epictets"}
,{
    "qoute":"resentment is like drinking posion and waiting for your enemy to die",
    "author":"nelson mandela"
}, 
{
    "qoute":"you miss 100% of shots you dont take",
    "author":"wayne gretze"
}]
function getQoute(){
    var newQoute= Math.floor(Math.random()*qoute.length)
    document.getElementById("quote").innerHTML=qoute[newQoute].qoute
    document.getElementById("author").innerHTML=qoute[newQoute].author

}