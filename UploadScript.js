/// Created By Mr Karami   
// GitHub :https://github.com/sohilww/AjaxFileUploder
var progressbar;
function uploadFile(inputElement, fileName, url, hiddenInput, progressbars) {
    var file = document.getElementById(inputElement).files[0];
    progressbar = progressbars;
    var formData = new FormData();
    formData.append(fileName, file);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", progressHandler, false);
    xhr.upload.addEventListener("load", completeHandler, false);
    xhr.open("Post", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rsult = JSON.parse(xhr.responseText);
            if (rsult.Status) {
                $(hiddenInput).val(rsult.Message);
            }

        }
    };
    xhr.send(formData);
}
function progressHandler(event) {
    var percent = ((event.loaded / event.total) * 100) + "%";
    $(progressbar).show();
    $(".progress-bar", $(progressbar)).width(percent);
}
function completeHandler() {
    // myApp.hidePleaseWait(); //hide dialog
}