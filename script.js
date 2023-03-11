const onImageClick = () => {
    var zplImg = document.getElementById('sad-zpl');
    var pngImg = document.getElementById('yay-png');
    if (zplImg.style.display === 'none') {
        zplImg.style.display = 'block';
        pngImg.style.display = 'none';
    } else {
        zplImg.style.display = 'none';
        pngImg.style.display = 'block';
    }
}