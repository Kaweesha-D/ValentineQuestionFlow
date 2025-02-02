function showSlide(slideId) {
    console.log("Switching to:", slideId); // Debugging

    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the selected slide
    document.getElementById(slideId).style.display = 'block';
}
