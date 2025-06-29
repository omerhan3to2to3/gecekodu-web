// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Home button functionality
    const homeLink = document.getElementById('homeLink');
    const homeLinkMobile = document.getElementById('homeLinkMobile');
    
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    if (homeLinkMobile) {
        homeLinkMobile.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Events button functionality (scroll to cities section)
    const eventsLink = document.getElementById('eventsLink');
    const eventsLinkMobile = document.getElementById('eventsLinkMobile');
    const citiesSection = document.getElementById('cities');
    
    if (eventsLink && citiesSection) {
        eventsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to cities section
            citiesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    if (eventsLinkMobile && citiesSection) {
        eventsLinkMobile.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to cities section
            citiesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if it's open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    // Team button functionality (scroll to team section)
    const teamLink = document.getElementById('teamLink');
    const teamLinkMobile = document.getElementById('teamLinkMobile');
    const teamSection = document.getElementById('team');
    
    if (teamLink && teamSection) {
        teamLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to team section
            teamSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    if (teamLinkMobile && teamSection) {
        teamLinkMobile.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to team section
            teamSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if it's open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    }
});
