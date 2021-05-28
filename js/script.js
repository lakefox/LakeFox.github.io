window.onload = () => {
  let size = (document.querySelector(".header").getBoundingClientRect().height+500);
  if (size > window.innerHeight-200) {
    size = window.innerHeight-200;
  }

  document.querySelector(".main").style.top = size+"px";
  if (window.innerWidth < 600) {
    document.querySelector(".header").style.fontSize = "13em";
  } else {
    document.querySelector(".header").style.fontSize = "30em";
  }
}

window.onresize = () => {
  let size = (document.querySelector(".header").getBoundingClientRect().height+500);
  if (size > window.innerHeight-200) {
    size = window.innerHeight-200;
  }

  document.querySelector(".main").style.top = size+"px";

  if (window.innerWidth < 600) {
    document.querySelector(".header").style.fontSize = "13em";
  } else {
    document.querySelector(".header").style.fontSize = "30em";
  }
}

window.onscroll = (e) => {
  document.querySelector(".header").style.opacity = 1-(window.pageYOffset/window.innerHeight+0.2);
}
