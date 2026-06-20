let generatedOTP = "";
let timer;
let timeLeft = 120;

// Store previous OTPs
const usedOTPs = new Set();

const generateBtn = document.getElementById("generateBtn");
const verifyBtn = document.getElementById("verifyBtn");
const otpInput = document.getElementById("otpInput");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

generateBtn.addEventListener("click", generateOTP);
verifyBtn.addEventListener("click", verifyOTP);

function generateOTP() {

    clearInterval(timer);

    message.textContent = "";
    otpInput.value = "";

    let otp;

    do {
        otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();
    }
    while (usedOTPs.has(otp));

    generatedOTP = otp;

    usedOTPs.add(otp);

    alert("Your OTP is: " + generatedOTP);

    timeLeft = 120;

    startTimer();
}

function startTimer() {

    updateTimer();

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            generatedOTP = "";

            message.style.color = "red";
            message.textContent =
                "OTP Expired! Generate a new OTP.";

        }

    }, 1000);
}

function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function verifyOTP() {

    const enteredOTP = otpInput.value.trim();

    if (!generatedOTP) {

        message.style.color = "red";
        message.textContent =
            "Please generate OTP first.";

        return;
    }

    if (timeLeft <= 0) {

        message.style.color = "red";
        message.textContent =
            "OTP Expired.";

        return;
    }

    if (enteredOTP === generatedOTP) {

        clearInterval(timer);

        message.style.color = "green";
        message.textContent =
            "OTP Verified Successfully ✅";

        generatedOTP = "";

    } else {

        message.style.color = "red";
        message.textContent =
            "Invalid OTP ❌";

    }
}