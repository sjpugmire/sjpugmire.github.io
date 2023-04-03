var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!" 
    document.getElementById('verify').style.color = 'green';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "Enjoy music and make memories!"
}

document.getElementById("verify").innerHTML = output;