// AutoTranslate V0.1
// Renovate Software LTD 2021

window.onload = (function(){start()}); // Only load the script on page load..
function start () {
console.log("AutoTranslate Version 0.1") // Version

// EngToGerman(); // Temporary..

let language = window.navigator.userLanguage || window.navigator.language; // Get the browser language.

// English UK
if (language == "en-GB") {
console.log(language + " - No need to change the page as it is already English!")
}

// English US
else if (language == "en-US") {
console.log(language + " - No need to change the page as it is already English!")
}

// German
else if (language == "de") {
EngToGerman();
}

// Not supported.
else {
console.log("Unsupported language: " + language)
}
}

// Translate English to German!
function EngToGerman() {
console.log("Translating English to German..");
console.log("Diese Seite verwendet AutoTranslate Version 0.1. Ihre Seite wurde vom Englischen ins Deutsche übersetzt. Bitte erwarten Sie Probleme.")
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Help us build the future.","Hilfe uns bauen das zukunft.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Now at a safe distance.","Jetzt in sicherer entfernung.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("You're on our desktop friendly website.","Sie befinden sich auf unserer Desktop-freundlichen Website.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Hello","Hallo");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("hello","hallo");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("My","Meine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("my","meine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Brother","Brudda");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("brother","brudda");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Build","Bauen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("build","bauen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("The","Das");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("the","das");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Future","Zukunft");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("future","zukunft");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Home","Zuhause");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("home","zuhause");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("About","Über");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("about","Über");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Contact","Kontakt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("contact","kontakt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Help","Hilfe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("help","hilfe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Account","Konto");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("account","konto");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("You","Sie");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("you","sie");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Security","Sicherheit");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("security","sicherheit");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("More","Mehr");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("more","mehr");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Us","Uns");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("us","uns");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("For","Zum");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("for","zum");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Now","Jetzt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("now","jetzt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("At","Beim");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("at","beim");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Safe","Sicher");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("safe","sicher");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("A","Ein");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("a","ein");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Welcome","Herzlich willkommen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("welcome","herzlich willkommen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Back","Zuruck");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("back","zuruck");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Not","Nicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("not","nicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sign","Zeichen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("sign","zeichen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Out","Aus");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("out","aus");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Keep","Behalten");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("keep","behalten");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Looking","Suchen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("looking","suchen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("We","Wir");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("we","wir");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Perhaps","Vielleicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("perhaps","vielleicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Info","Die Info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("info","die info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Yes","Ja");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("yes","ja");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("No","Neine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("no","neine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Your","Ihre");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Your","ihre");
}