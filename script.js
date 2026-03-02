function predictNextDay(){
    const dateInput = document.getElementById("todayDate").value;
    const resultDiv = document.getElementById("result");

    if(!dateInput){
        resultDiv.innerText = `Please select a date!!`;
        return;
    }

    const loadingMessages = [
        "Processing 🔃...",
        "Contacting NASA 🚀...",
        "Connecting to International Space Sation 🛰️...",
        "Checking weather forecast ⛅...",
        "Browsing Internet 🌐...",
        "Calling Elon Musk 👽...",
        "Prompting ChatGPT 🤖...",
        "Checking Calender 📆...",
        "Failed to understand 😩...",
        "Praying to Jesus 🙏..."
    ];

    let index = 0;
    resultDiv.innerText = loadingMessages[index];

    const interval = setInterval(() => {
        index++;
        resultDiv.innerText = loadingMessages[index];
        if(index < loadingMessages.length){
            resultDiv.innerText = loadingMessages[index];
        }else{
            clearInterval(interval);

            const today = new Date(dateInput);
            today.setDate(today.getDate() + 1);

            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const tomorrowFormatted = today.toLocaleDateString(undefined, options);

            resultDiv.innerText = "Tomorrow is " + tomorrowFormatted + "!!!";
        }
    }, 2000);
}