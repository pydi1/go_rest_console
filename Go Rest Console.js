let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let data = requestBodyEl.value;
data = {

    "name": "xyz",
    "email": "abc@mail.com", // Use unique value for each request 
    "status": "Active",
    "gender": "Male"

};
let options;

options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 82438c3f716b928290f28473f70e72a742602d01dee48c4de34fc2d17405422a",
    },
    body: data,
};
let url = requestUrlEl.value;

requestMethodEl.addEventListener("change", function(event) {
    options.method = event.target.value;
    console.log(options);
});
requestBodyEl.addEventListener("change", function(event) {

    if (url === "") {
        requestUrlErrMsgEl.textContent = "Required*";
        requestUrlErrMsgEl.style.color("red");
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
    options.body = event.target.value;
});


let validate = function() {
    event.preventDefault();

    console.log(url);
    console.log(options);
    console.log(options.body);

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            /* let status=jsonData.code;
             let y=jsonData;
              responseStatusEl.textContent=status;
              requestBodyEl.textContent=y;
              console.log(jsonData.code);*/
            let status = jsonData.code;
            console.log(jsonData);
            responseStatusEl.value = status;
            let y = JSON.stringify(jsonData);
            responseBodyEl.value = y;
            console.log(jsonData);


        });

}



consoleFormEl.addEventListener("submit", validate);