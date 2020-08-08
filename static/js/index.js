let fadeOutInterval = null;

const resizeLogo = () => {
    let windowWidth = (+window.getComputedStyle(document.body).width.replace(/px/,''));
    let btnHeight = $('#menuBtn')['0']['clientHeight'];
    let btnWidth = $('#menuBtn')['0']['clientWidth'];

    if (windowWidth <= 500) {
        $('#logo')['0']['width'] = btnWidth*1.5;
        $('#logo')['0']['height'] = btnHeight;
    }
    else {
        $('#logo')['0']['width'] = 160;
        $('#logo')['0']['height'] = 50;
    }
}

window.onload = () => {
    resizeLogo();
}

window.onresize = () => {
    resizeLogo();
}

