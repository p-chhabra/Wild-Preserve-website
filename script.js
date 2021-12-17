let donateButton = document.getElementsByClassName("btn-sm")[0];
donateButton.addEventListener("click", function () {
  alert(
    "We have stopped taking donations for a while. Donation services will resume soon."
  );
});

let subscribeButton = document.getElementsByClassName("btn-sm")[1];
subscribeButton.addEventListener("click", function () {
  alert(
    "We don't have a Youtube channel yet. We are hoping to lauch one soon. We will update the latest information on our website."
  );
});

let searchTxt = document.getElementById("search-text");
let pageTxt_p = document.getElementsByTagName("p");
let pageTxt_h2 = document.getElementsByTagName("h2");
let pageTxt_h1 = document.getElementsByTagName("h1");
let inputTxt;

searchTxt.addEventListener("input", function () {
  inputTxt = searchTxt.value;
});

let searchButton = document.getElementsByClassName("search-btn")[0];

searchButton.addEventListener("click", function () {
  for (let index = 0; index < pageTxt_p.length; index++) {
    if (pageTxt_p[index].innerText.includes(inputTxt)) {
      console.log("Succesful");
      let el = document.getElementsByTagName("p")[index];
      el.scrollIntoView(true);
      inputTxt = null;
      break;
    }

    if (pageTxt_h1[index].innerText.includes(inputTxt)) {
      console.log("Succesful");
      let el = document.getElementsByTagName("h1")[index];
      el.scrollIntoView(true);
      inputTxt = null;
      break;
    }

    if (pageTxt_h2[index].innerText.includes(inputTxt)) {
      console.log("Succesful");
      let el = document.getElementsByTagName("h2")[index];
      el.scrollIntoView(true);
      inputTxt = null;
      break;
    }
  }
});

let nameForm = document.getElementsByClassName("name")[0];
let emailForm = document.getElementsByClassName("email")[0];
let reviewForm = document.getElementsByClassName("review")[0];
let teleForm = document.getElementsByClassName("tele")[0];

let submitBtn = document.getElementsByClassName("submit")[0];

submitBtn.addEventListener("click", function () {
  console.log("Botton Clicked");

  localStorage.setItem("Name", nameForm.value);
  localStorage.setItem("Email", emailForm.value);
  localStorage.setItem("Review", reviewForm.value);
  localStorage.setItem("Contact", teleForm.value);

  nameForm.value = null;
  emailForm.value = null;
  reviewForm.value = null;
  teleForm.value = null;
});
