function toggleContent(sectionId) {
    var content = document.getElementById(sectionId);
    content.classList.toggle("expanded");
    content.classList.toggle("collapsed");
    var button = document.querySelector(`#button_${sectionId}`);
    button.innerHTML = content.classList.contains("expanded") ? 'Show less' : 'Show more';

    if (!content.classList.contains("expanded")) {
        // If content is collapsed, scroll to the explorations section
        document.getElementById(sectionId).scrollIntoView({ behavior: 'auto' });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("bbs_scrollbox");
    // Set the initial scroll position (adjust as needed)
    var initialScroll = 175; // Example: set the initial vertical scroll to 200 pixels
    // Set the initial scroll position
    container.scrollTop = initialScroll;
});
