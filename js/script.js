function showContent(sectionId) {
    // Hide all content sections
    var sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show the requested section
    document.getElementById(sectionId).classList.add('active');

    // Update active navigation link
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active-link'));
    document.querySelector(`[onclick="showContent('${sectionId}')"]`).classList.add('active-link');
}
