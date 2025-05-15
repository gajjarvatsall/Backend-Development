const colButton = document.querySelectorAll('.button')
const body = document.querySelector('body')

colButton.forEach((button)=>{
  button.addEventListener('click',function(e){
    console.log(e.target.id)
    switch(e.target.id){
      case "grey":
        body.style.background = "grey";
        break;
      case "white":
        body.style.background = "white";
        break;
      case "blue":
        body.style.background = "blue";
        break;
      case "yellow":
        body.style.background = "yellow";
        break;
      default:

    }

  })
})