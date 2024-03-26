function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

// using inline variable
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

    // using local variable
// uncomment to see how it works

      // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //   document.body.style.background = bgColor;

    }