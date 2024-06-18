// Menu data structure
var menuLinks = [
    { text: "home", href: "/Pages/index.html" },
    {
      text: "about me",
      href: "#"
    },
    {
      text: "services",
      href: "#"
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "sign in", href: "/Pages/Login.html" },
      ],
    },
  ];
  
  // DOM Manipulation
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select and cache the <main> element
    var mainEl = document.querySelector("main");


  
    // Set the background color of mainEl using CSS custom property
    mainEl.style.backgroundColor = "var(--main-bg)";
  
    // Create the elements
    var img = document.createElement('img');
    var h1 = document.createElement('h1');
    var h4 = document.createElement('h4');
    var div = document.createElement('div');
    var hr = document.createElement('hr');
    var strong = document.createElement('strong');
    var em = document.createElement('em');


    // Set attributes
    img.id = 'myLogo';
    img.src = '/Images/PremierRealtyAssociates_logo jpg.jpg';
    // img.style = 'flex-ctr';
    img.height = '200px';
    img.width = '300px';
        // Append elements to main
    // const main = document.querySelector('main');
    // main.style.display = 'flex';
    img.style.flexDirection = 'column';
    img.style.alignItems = 'center'; // Center align items horizontally


    // Set inline styles
    img.style.display = 'flex';
    img.style.border = '2px solid black';
    img.style.padding = '10px';
    img.style.backgroundColor = '#f3eded';
    img.style.boxShadow = '10px 10px 1px rgba(117, 115, 115, 0.3)';
    img.style.animation = 'mymove 5s infinite';

    // Set the content of mainEl to <h1>CSREI Group</h1>
    h1.textContent = 'CSREI Group';
    h4.textContent = 'Providing Services in Commercial And Residential Real Estate Investment guidance';
    
    div.id = 'services';
    div.innerHTML = `
    <section>Residential</section>
    <section>Commercial</section>
    <section>Real Estate Investing</section>
    `;
    strong.appendChild(em);
    em.textContent = 'Coming Soon';
    // Append elements to main
    mainEl.appendChild(img);
    mainEl.appendChild(h1);
    mainEl.appendChild(h4);
    mainEl.appendChild(div);
    mainEl.appendChild(hr);
    mainEl.appendChild(document.createElement('div')).className = 'footer';
    mainEl.querySelector('.footer').appendChild(strong);

  
    // Add a class of flex-ctr to mainEl
    // mainEl.classList.add("flex-row");
  
    // Select and cache the <nav id="top-menu"> element
    var topMenuEl = document.getElementById("top-menu");
  
    // Set the height and background color of topMenuEl using CSS custom properties
    topMenuEl.style.height = "100%";
    topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  
    // Add a class of flex-around to topMenuEl
    topMenuEl.classList.add("flex-around");
  
    // Iterate over menuLinks array to create <a> elements and append to topMenuEl
    menuLinks.forEach(function (link) {
      var a = document.createElement("a");
      a.setAttribute("href", link.href);
      a.textContent = link.text;
      topMenuEl.appendChild(a);
    });
  
    // Select and cache the <nav id="sub-menu"> element
    var subMenuEl = document.getElementById("sub-menu");
  
    // Set the height and background color of subMenuEl using CSS custom properties
    subMenuEl.style.height = "100%";
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
    // Add a class of flex-around to subMenuEl
    subMenuEl.classList.add("flex-around");
  
    // Set CSS properties to hide initially
    subMenuEl.style.position = "absolute";
    subMenuEl.style.top = "0";
  
    // Select all <a> elements inside topMenuEl
    var topMenuLinks = topMenuEl.querySelectorAll("a");
  
    // Attach click event listener to topMenuEl for delegated event handling
    topMenuEl.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Exit early if the clicked element is not an <a> tag
      if (!event.target.matches("a")) return;
  
      // Toggle 'active' class for clicked <a> element
      event.target.classList.toggle("active");
  
      // Remove 'active' class from all other <a> elements
      topMenuLinks.forEach(function (link) {
        if (link !== event.target) {
          link.classList.remove("active");
        }
      });
  
      // Toggle visibility of subMenuEl based on 'active' class of clicked <a> element
      if (event.target.classList.contains("active")) {
        var linkObject = menuLinks.find(function (link) {
          return link.text === event.target.textContent.toLowerCase();
        });
  
        if (linkObject && linkObject.subLinks) {
          buildSubMenu(linkObject.subLinks);
          subMenuEl.style.top = "100%"; // Show submenu
        } else {
          subMenuEl.style.top = "0"; // No submenu, hide it
        }
      } else {
        subMenuEl.style.top = "0"; // Hide submenu on deactivating link
      }
    });
  
    // Function to build submenu
    function buildSubMenu(subLinks) {
      // Clear existing contents of subMenuEl
      subMenuEl.innerHTML = "";
  
      // Iterate over subLinks array to create <a> elements and append to subMenuEl
      subLinks.forEach(function (subLink) {
        var a = document.createElement("a");
        a.setAttribute("href", subLink.href);
        a.textContent = subLink.text;
        subMenuEl.appendChild(a);
      });
    }
  });