var $div =  document.querySelector('div');

$div.addEventListener('mouseover', changeBackgroundColorToBlue);
$div.addEventListener('mouseout', changeBackgroundColorToWhite);

function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColorToWhite() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'white';
}

