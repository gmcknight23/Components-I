import "./index.less";
import "./components/article/article.js";
import "./components/menu/menu.js";

function menuMaker(LinksArray) {
  const menuWrapper = document.createElement("div");
  const menuList = document.createElement("ul");

  menuWrapper.appendChild(menuList);

  menuWrapper.classList.add("menu");

  LinksArray.forEach((linkText) => {
    const link = document.createElement("li");
    link.textContent = linkText;
    menuList.appendChild(link);
  });

  const hamMenu = document.querySelector(".menu-button");

  hamMenu.addEventListener("click", () => {
    menuWrapper.classList.toggle("menu--open");
  });

  return menuWrapper;
}

console.log(menuMaker(menuItems));
