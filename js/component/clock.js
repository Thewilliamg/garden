export const updateClock = () =>{
    const now =new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    return (
    `Time: ${hours}:${minutes}:${seconds} /`
    )
}
//code for every second updateClock() repeat and let it paste
setInterval(()=>{
    document.querySelector("#clock").innerText = updateClock();
},1000)

// for example: after 5 seconds stop //
// setTimeout(() => { clearInterval(updateClock()); }, 5000);