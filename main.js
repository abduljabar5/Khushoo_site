/**
 * Khushoo - Main JavaScript
 * Handles routing, navigation, and interactivity
 */

(function() {
  'use strict';

  // DOM Elements
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  // Pages
  const pages = {
    '/': document.getElementById('page-home'),
    '/privacy': document.getElementById('page-privacy'),
    '/terms': document.getElementById('page-terms')
  };

  // State
  let isMenuOpen = false;

  /**
   * Initialize the application
   */
  function init() {
    setupEventListeners();
    setupScrollHandler();
    handleRoute();
    setDynamicDates();
  }

  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Handle hash changes for routing
    window.addEventListener('hashchange', handleRoute);

    // Handle link clicks for smooth navigation
    document.querySelectorAll('[data-link]').forEach(link => {
      link.addEventListener('click', function(e) {
        // Close mobile menu when a link is clicked
        if (isMenuOpen) {
          closeMobileMenu();
        }
      });
    });

    // Handle anchor links (like #features, #download)
    document.querySelectorAll('a[href^="#"]:not([data-link])').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's a route link (starts with #/)
        if (href.startsWith('#/')) {
          return;
        }

        // Close mobile menu
        if (isMenuOpen) {
          closeMobileMenu();
        }

        // Handle anchor scroll
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Set up scroll handler for navbar styling
   */
  function setupScrollHandler() {
    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateNavbarStyle();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial check
    updateNavbarStyle();
  }

  /**
   * Update navbar style based on scroll position
   */
  function updateNavbarStyle() {
    if (window.scrollY > 20 || isMenuOpen) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /**
   * Toggle mobile menu
   */
  function toggleMobileMenu() {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    isMenuOpen = true;
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    navbar.classList.add('menu-open');
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    isMenuOpen = false;
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    navbar.classList.remove('menu-open');
    updateNavbarStyle();
  }

  /**
   * Handle route changes
   */
  function handleRoute() {
    // Get current hash route
    let route = window.location.hash.slice(1) || '/';

    // Normalize route
    if (route === '' || route === '/') {
      route = '/';
    }

    // Hide all pages
    Object.values(pages).forEach(page => {
      if (page) {
        page.classList.add('hidden');
      }
    });

    // Show the current page
    const currentPage = pages[route];
    if (currentPage) {
      currentPage.classList.remove('hidden');
    } else {
      // Default to home if route not found
      if (pages['/']) {
        pages['/'].classList.remove('hidden');
      }
    }

    // Update active nav links
    updateActiveLinks(route);

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu on route change
    if (isMenuOpen) {
      closeMobileMenu();
    }
  }

  /**
   * Update active state on navigation links
   */
  function updateActiveLinks(currentRoute) {
    // Desktop nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      const linkRoute = href.replace('#', '');

      if (linkRoute === currentRoute || (linkRoute === '/' && currentRoute === '/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Mobile nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href');
      const linkRoute = href.replace('#', '');

      if (linkRoute === currentRoute || (linkRoute === '/' && currentRoute === '/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Set dynamic dates on legal pages
   */
  function setDynamicDates() {
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const privacyDate = document.getElementById('privacy-date');
    const termsDate = document.getElementById('terms-date');

    if (privacyDate) {
      privacyDate.textContent = today;
    }

    if (termsDate) {
      termsDate.textContent = today;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
