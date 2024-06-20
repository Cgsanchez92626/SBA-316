// Menu data structure
var menuLinks = [
  { text: "home", href: "/Pages/index.html" },
  {
    text: "about me",
    href: "#",
  },
  {
    text: "services",
    href: "#",
  },
  {
    text: "account",
    href: "#",
    subLinks: [{ text: "sign in", href: "/Pages/Login.html" }],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const topMenuEl = document.getElementById("top-menu");
  const subMenuEl = document.getElementById("sub-menu");

  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");

  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

  menuLinks.forEach(function (link) {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);

    // Direct navigation for specific links
    if (link.text.toLowerCase() === "home") {
      a.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = link.href;
      });
    }
  });

  const topMenuLinks = topMenuEl.querySelectorAll("a");

  topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("a")) return;

    event.target.classList.toggle("active");

    topMenuLinks.forEach(function (link) {
      if (link !== event.target) {
        link.classList.remove("active");
      }
    });

    if (event.target.classList.contains("active")) {
      const linkObject = menuLinks.find(function (link) {
        return link.text === event.target.textContent.toLowerCase();
      });

      if (linkObject && linkObject.subLinks) {
        buildSubMenu(linkObject.subLinks);
        subMenuEl.style.top = "100%";
      } else {
        subMenuEl.style.top = "0";
      }
    } else {
      subMenuEl.style.top = "0";
    }
  });

  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";

    subLinks.forEach(function (subLink) {
      console.log(subLink);
      const a = document.createElement("a");
      a.setAttribute("href", subLink.href);
      a.textContent = subLink.text;
      subMenuEl.appendChild(a);
    });
    console.log("Submenu element after creation:", subMenuEl);
  }
});
