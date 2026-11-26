javascript
function showMessage() {
    alert("Welcome to my Portfolio!");
}
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerText =
        "Thank you " + name + "! Your message is ready.";

}