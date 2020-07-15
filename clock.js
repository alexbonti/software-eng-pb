
log=(message)=>{
    console.log('[Clock] : ',message)
}
let time=0
setInterval(function(){
    time++;
    log(time)
},1000)

