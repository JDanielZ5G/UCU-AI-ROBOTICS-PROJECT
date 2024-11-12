document.addEventListener('DOMContentLoaded', function() {
    const roboticsDiagram = document.getElementById('robotics-diagram');
    
    // Create an interactive diagram
    const diagramSVG = `
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="100" fill="#3498db" opacity="0.7" />
            <text x="150" y="150" text-anchor="middle" fill="white" font-size="16">Robotics</text>
            <g id="mechanical" transform="translate(75, 75)">
                <circle cx="0" cy="0" r="30" fill="#e74c3c" opacity="0.7" />
                <text x="0" y="0" text-anchor="middle" fill="white" font-size="10">Mechanical</text>
            </g>
            <g id="electrical" transform="translate(225, 75)">
                <circle cx="0" cy="0" r="30" fill="#f39c12" opacity="0.7" />
                <text x="0" y="0" text-anchor="middle" fill="white" font-size="10">Electrical</text>
            </g>
            <g id="computer" transform="translate(75, 225)">
                <circle cx="0" cy="0" r="30" fill="#2ecc71" opacity="0.7" />
                <text x="0" y="0" text-anchor="middle" fill="white" font-size="10">Computer</text>
            </g>
            <g id="control" transform="translate(225, 225)">
                <circle cx="0" cy="0" r="30" fill="#9b59b6" opacity="0.7" />
                <text x="0" y="0" text-anchor="middle" fill="white" font-size="10">Control</text>
            </g>
        </svg>
    `;
    
    roboticsDiagram.innerHTML = diagramSVG;
    
    // Add interactivity
    const components = ['mechanical', 'electrical', 'computer', 'control'];
    components.forEach(component => {
        const element = document.getElementById(component);
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    });
});