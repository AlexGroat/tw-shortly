const input = document.getElementById("link-input");
const form = document.getElementById("link-form");
const error = document.getElementById("error");

form.addEventListener("submit", formSubmit);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    error.innerHTML = "Please enter a url";
  } else if (!validURL(input.value)) {
    error.innerHTML = "Please enter a valid url";
  } else {
    error.innerHTML = "";
    alert('Success, link has been shortened!')
  }
}
