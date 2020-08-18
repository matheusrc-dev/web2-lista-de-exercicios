let move;

function goTop() {
    move = setInterval(() => {
        window.scrollTo(0, window.pageYOffset -10);
        console.log(window.pageYOffset);
        
        if(window.pageYOffset == 0) {
            stopScroll();
        }

    }, 1000);
}

function stopScroll() {
    clearInterval(move);
}
