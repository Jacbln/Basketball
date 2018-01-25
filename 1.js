function myFunction() {
  if (window.pageYOffset > 100) {
    var containers = document.getElementsByClassName("container");
    for(index in containers) {
      containers[index].className = containers[index].className + " fade-in";
    }
  }
}

document.addEventListener("scroll", myFunction);
