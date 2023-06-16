let navStyle = () => {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("nav").style.cssText =
      "background-color: #fff;box-shadow: #F2F2F2 0px 5px 10px;";
  } else {
    document.getElementById("nav").style.cssText =
      "background-color: transparence;box-shadow: none";
  }
};
window.onload = () => {
  navStyle();
};
window.onscroll = () => {
  navStyle();
};
