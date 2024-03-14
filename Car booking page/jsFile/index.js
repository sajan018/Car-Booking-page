const BookingBtn = document.querySelectorAll(".BookingBtn");
BookingBtn.forEach(function (e) {
    e.addEventListener('click', function () {
        console.log("hi");
        // for opening form.html after cliking the button
        var currentURL = window.location.href;
        var folderURL = currentURL.substring(0, currentURL.lastIndexOf("/") + 1);
        folderURL += "form.html"
        window.location.href = folderURL;
        

    })
})
