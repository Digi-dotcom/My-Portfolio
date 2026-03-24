'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle('active'); 
}

// Sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// Sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () { 
    elementToggleFunc(sidebar); 
  });
}

// Custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

if (select) {
  select.addEventListener('click', function () { 
    elementToggleFunc(this); 
  });

  // Add event in all select items
  selectItems.forEach(item => {
    item.addEventListener('click', function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// Filter function
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === 'all' || item.dataset.category === selectedValue) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// Add event in all filter button items for large screen
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];
  
  filterBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove('active');
      this.classList.add('active');
      lastClickedBtn = this;
    });
  });
}

// Contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Add event to all form input field
if (form && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener('input', function () {
      // Check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Add event to all nav link
navigationLinks.forEach(link => {
  link.addEventListener('click', function () {
    let pageName = this.innerHTML.toLowerCase();
    
    pages.forEach(page => {
      if (page.dataset.page === pageName) {
        page.classList.add('active');
        window.scrollTo(0, 0);
      } else {
        page.classList.remove('active');
      }
    });

    navigationLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Optional: Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});