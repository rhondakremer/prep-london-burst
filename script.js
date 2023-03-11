const onImageClick = () => {
    var zplImg = document.getElementById('sad-zpl');
    var pngImg = document.getElementById('yay-png');
    var button = document.getElementById('zpl-button');
    var subtitle = document.getElementById('subtitle');
    if (zplImg.style.display != 'block') {
        zplImg.style.display = 'block';
        pngImg.style.display = 'none';
        button.innerHTML = 'Back to PNG';
    } else {
        zplImg.style.display = 'none';
        pngImg.style.display = 'block';
        button.innerHTML = 'Back to ZPL';
    }
    subtitle.innerHTML = "☠️";
}
