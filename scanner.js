document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("qr-form");
    const qrText = document.getElementById("qr-text");
    const qrResult = document.getElementById("qr-result");
    const downloadButton = document.getElementById("download-qr");

    function updateQRCode(data) {
        if (data === "") {
            qrText.placeholder = "Please enter a valid input";
            downloadButton.disabled = true;
        } else {
            while (qrResult.firstChild) {
                qrResult.removeChild(qrResult.firstChild);
            }
            const qrImage = document.createElement("img");
            
            if (data === "initiate_qr_code_gen") {
                qrImage.src = "public/QRexample.png";
                qrImage.alt = "QR Code";
                qrResult.appendChild(qrImage);
                downloadButton.disabled = true;
            } else {
                const api_url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}`;
                qrImage.src = api_url;
                qrImage.alt = "QR Code";
                qrResult.appendChild(qrImage);
                downloadButton.disabled = false;
                downloadButton.style.backgroundColor = "#0073e6";
                downloadButton.style.cursor = "pointer";
                qrText.value = "";
                qrText.placeholder = "Regenerate QR code";
            }
        } 
    }

    function handleButtonHover() {
        if (downloadButton.disabled === true) {
            downloadButton.style.backgroundColor = "#ccc";
        } else {
            downloadButton.style.backgroundColor = "#0057b3";
        }
    }

    function handleButtonLeave() {
        if (downloadButton.disabled === true) {
            downloadButton.style.backgroundColor = "#ccc";
        } else {
            downloadButton.style.backgroundColor = "#0073e6";
        }
    }
    
    updateQRCode("initiate_qr_code_gen");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = qrText.value;
        updateQRCode(data);
    });

    downloadButton.addEventListener("click", function() {
        const qrImage = qrResult.querySelector("img");
        const link = document.createElement("a");
        link.href = qrImage.src;
        link.download = "qrcode.png";
        link.click();
    });

    downloadButton.addEventListener("mouseover", function() {
        handleButtonHover();
    });

    downloadButton.addEventListener("mouseleave", function() {
        handleButtonLeave();
    });
});
