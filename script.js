// Function to generate a random light RGB color
function getRandomLightColor() {
    const r = Math.floor(Math.random() * 128) + 127;  // Ensure the red component is between 127 and 255
    const g = Math.floor(Math.random() * 128) + 127;  // Ensure the green component is between 127 and 255
    const b = Math.floor(Math.random() * 128) + 127;  // Ensure the blue component is between 127 and 255
    return `rgb(${r}, ${g}, ${b})`;
}

// Get all skill cards
const skillCards = document.querySelectorAll('.skill-card');
const navLinks = document.querySelectorAll('.nav-links a');
const projectCards = document.querySelectorAll('.project-card');
const buttons = document.querySelectorAll('.btn');

// Function to add random light color hover effect
function applyRandomLightColorHoverEffect(elements) {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Change background color to a random light RGB color on hover
            element.style.backgroundColor = getRandomLightColor();
        });

        element.addEventListener('mouseleave', () => {
            // Reset to original background color after hover
            element.style.backgroundColor = '';
        });
    });
}

// Apply the hover effect to skill cards, nav links, project cards, and buttons
applyRandomLightColorHoverEffect(skillCards);
applyRandomLightColorHoverEffect(navLinks);
applyRandomLightColorHoverEffect(projectCards);
applyRandomLightColorHoverEffect(buttons);
