document.addEventListener('DOMContentLoaded', function() {
    // Part 1: Manipulating topbar element
    const topBarEl = document.getElementById('topbar');
    topBarEl.style.height = '100%';
    topBarEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-bar-bg');
    topBarEl.classList.add('flex-around');

    // Part 2: Manipulating topnav element
    const topNavEl = document.getElementById('topnav');
    topNavEl.style.height = '100%';
    topNavEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-nav-bg');
    topNavEl.classList.add('flex-around');

    // Part 3: Manipulating topNavEl links and adding event listener
    const topMenuLinks = topNavEl.querySelectorAll('a');
    
    // Append a new link for Sign-In
    const newLink = document.createElement('a');
    newLink.href = '/Pages/Login.html';
    newLink.classList.add('nav-link');
    newLink.textContent = 'Sign-In';

    // Append the new link to topNavEl
    topNavEl.appendChild(newLink);

    // Event listener for topNavEl clicks
    topNavEl.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Toggle between Sign-In and Sign Out based on some condition (not fully implemented here)
        if (event.target.tagName === 'A') {
            if (event.target.textContent === 'Sign-In') {
                event.target.textContent = 'Sign Out';
            } else {
                event.target.textContent = 'Sign-In';
            }
        }
    });
});
