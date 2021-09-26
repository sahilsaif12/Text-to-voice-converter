let speech=new SpeechSynthesisUtterance()
speech.lang="en-us"
allVoice=[]
let voiceSelect=document.getElementById('voices')

/// creating voice options: 
window.speechSynthesis.onvoiceschanged=()=>{
    allVoice=window.speechSynthesis.getVoices()
    // console.log(allVoice)
    speech.voice=allVoice[0]
    
    allVoice.forEach((element,index) => {
        voiceSelect[index]=new Option(element.name,index)
    });
}
/// changing voice :
voiceSelect.addEventListener('change',()=>{
    speech.voice=allVoice[voiceSelect.value]
})
/// volume button :
let volume=document.getElementById('volume')
volume.addEventListener("input",function(){
    speech.volume=volume.value
    let volumeValue=document.getElementById('volumeValue')
    volumeValue.innerHTML=volume.value
    if (volume.value==0 || volume.value==1) {
        volumeValue.innerHTML=`${volume.value}.0`
    }
})

/// rate button :
let rate=document.getElementById('rate')
rate.addEventListener("input",function(){
    speech.rate=rate.value
    let rateValue=document.getElementById('rateValue')
    rateValue.innerHTML=`${rate.value}.0`
    if (rate.value==10) {
        rateValue.innerHTML=rate.value
        rateValue.style.letterSpacing="2px"
    }
        
})

/// pitch button :
let pitch=document.getElementById('pitch')
pitch.addEventListener("input",function(){
    speech.pitch=pitch.value
    let pitchValue=document.getElementById('pitchValue')
    pitchValue.innerHTML=pitch.value
    
    if (pitch.value==0 || pitch.value==1 || pitch.value==2) {
        pitchValue.innerHTML=`${pitch.value}.0`
    }
    else{
        pitchValue.innerHTML=pitch.value
    }
})

/// play button :
let play=document.getElementsByClassName('play')[0]
play.addEventListener("click",()=>{
    let textarea=document.getElementById('textarea')
    speech.text=textarea.value
    window.speechSynthesis.speak(speech)
})

/// pause button :
let pause=document.getElementsByClassName('pause')[0]
pause.addEventListener('click',()=>{
    window.speechSynthesis.pause()
})
/// resume button :
let resume=document.getElementsByClassName('resume')[0]
resume.addEventListener('click',()=>{
    window.speechSynthesis.resume()
})
/// cancel button :
let cancel=document.getElementsByClassName('cancel')[0]
cancel.addEventListener('click',()=>{
    window.speechSynthesis.cancel()
})

