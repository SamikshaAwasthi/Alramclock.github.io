const currenttime = document.querySelector('h1');
selectmenu = document.querySelectorAll("select");
innercontent = document.querySelector('.inner');
setalrambutton = document.querySelector('.btn');

let alramTime, alramset,
    ringtone = new Audio("Ringtone/alramringtone1.mp3")


for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);

}

//this setinterval function displaye time and when time is equal to set alram time then alram is ring otherwise not 

setInterval(() => {
    let date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds()

    ampm = "AM";

    //when hour value is 0 then its change to 12 after set am and pm
    if (hour >= 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour == 0 ? hour = 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    currenttime.innerText = `${hour}:${min}:${sec} ${ampm}`;

    if (alramTime == `${hour}:${min} ${ampm}`) {
        ringtone.play();
    }
});

function setAlram() {
    if (alramset) {
        alramTime = "";
        ringtone.pause();
        innercontent.classList.remove("disable")
        setalrambutton.innerText = "Set Alarm";
        return alramset = false;

    }
    let time = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;

    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("please , select a valid time to set Alarm!");

    }

    alramTime = time;
    alramset = true;
    innercontent.classList.add("disable");
    setalrambutton.innerText="Clear Alram"
}
setalrambutton.addEventListener("click", setAlram);
