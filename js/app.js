$(document).ready(function () {
  //https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
  let randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  };
  let colorSection = function () {
    $('section').each(function () {
      $(this).css('background', randomColor());
      $(this).css('color', randomColor());
    });
  };
  window.setInterval(colorSection, 5000);
  colorSection();
});


