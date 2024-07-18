function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
  
    // Only completely visible elements return true:
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  window.onload = function () {
    try {

    } catch(e) {
        console.log(e);
    }
  }

  window.onscroll = function () {
    // if (document.querySelector("h2.splitting")) {
    //     const titles = document.querySelectorAll("h2.splitting");
  
    //     titles.forEach(function (title) {
    //       if (isScrolledIntoView(title) === true) {
    //         title.classList.add("active-split");
    //       } else {
    //         title.classList.remove("active-split");
    //       }
    //     });
    //   }
  }