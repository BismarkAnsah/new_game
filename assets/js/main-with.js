const navLinks = document.querySelectorAll('.nav-link');
const tabPanes = document.querySelectorAll('.tab-pane');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const tabId = link.getAttribute('data-bs-target');
        switchTab(tabId);

        // Remove active class from all nav links
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        // Add active class to clicked nav link
        link.classList.add('active');
    });
});

function switchTab(tabId) {
    // Get the tab to switch to
    const tab = document.querySelector(`${tabId}`);

    // Deactivate all tabs
    tabPanes.forEach((pane) => {
        pane.classList.remove('active', 'show');
    });

    // Activate the selected tab
    tab.classList.add('active', 'show');
}












//onscroll
window.addEventListener('scroll', function () {
    const threshold = 0; // adjust this value to set the threshold for when to switch elements
    const timeTicket = document.querySelector('.time-ticket');
    const timeTicketMini = document.querySelector('.time-ticket-mini');

    if (window.pageYOffset > threshold) {
        timeTicket.classList.add('hide');
        timeTicketMini.classList.remove('hide');
    } else {
        timeTicket.classList.remove('hide');
        timeTicketMini.classList.add('hide');
    }
});

// toggle btn
let offloadDiv = document.querySelector('.hot-offload');
  let toggleButton = document.getElementById('toggle-offload');

  toggleButton.addEventListener('click', function() {
    if (offloadDiv.style.display === 'block') {
      offloadDiv.style.display = 'none';
    } else {
      offloadDiv.style.display = 'block';
    }
  });

  //hot cold
  const hotColdCheckbox = document.querySelector('.hotCold');
const coldHotList = document.querySelector('.coldHotList');

hotColdCheckbox.addEventListener('change', () => {
  if (hotColdCheckbox.checked) {
    coldHotList.style.display = 'block';
  } else {
    coldHotList.style.display = 'none';
  }
});


//balls history js
const button = document.querySelector('.drop-down-button98');
const list = document.querySelector('.ball-history-list-SSC');

button.addEventListener('mouseover', function() {
  list.style.display = 'block';
});

button.addEventListener('mouseout', function() {
  list.style.display = 'none';
});

list.addEventListener('mouseover', function() {
  list.style.display = 'block';
});

list.addEventListener('mouseout', function() {
  list.style.display = 'none';
});