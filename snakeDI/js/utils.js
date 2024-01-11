const mapKeyCode = (keyCode) => {
    let direction = {
        37:"left",
        38:"up",
        39:"right",
        40:"down",
        87:"up",
        65:"left",
        83:"down",
        68:"right"
    };
    return direction[keyCode];
};