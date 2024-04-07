function changeBackgroundColor() {

    var colors = ['#004d00', '#400000', '#000033', '#4d2600', '#330033', '#003333', '#2b1d00'];
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
  }