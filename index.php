<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="public/logo_white.svg">
    <title>QR Code Generator</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/9c25ec09dc.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.php">
                <div class="logo">
                    <img src="public/logo_white.svg" alt="Company Logo">
                    <span>QR-Gen</span>
                </div>
            </a>
            <div class="social-icons">
            <a href="https://github.com/skosanke1" class="fa-brands fa-github fa-2xl" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.linkedin.com/in/stevenkosanke" class="fa-brands fa-linkedin fa-2xl" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </nav>
    </header>
    <main>
        <section class="container">
            <h1>QR Code Generator</h1>
            <div id="qr-result">
                <img src="public/QRexample.png" alt="QR Code" id="qr-code-image" download="qrcode.png">
            </div>
            <form id="qr-form" action="generate_qr.php" method="post">
                <input type="text" id="qr-text" name="qr_text" placeholder="Insert URL or code here" value="">
                <div class="button-container">
                    <button type="submit" name="generate_qr">Generate QR</button>
                    <button type="button" id="download-qr" disabled>Download QR</button>
                </div>
            </form>
        </section>
    </main>
    <script src="scanner.js"></script>
</body>
</html>
