data = [
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Charmed.webp",
        "title": "Charmed",
        "description": "Acquire your first Charm.",
        "percentage": "75.6% of players has this achievement."
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
    {
        "imgSrc": "",
        "title": "",
        "description": "",
        "percentage": ""
    },
];

document.addEventListener("DOMContentLoaded", function() {
    function loadAchievements(){
        const container = document.querySelector('.individual-ach'); // Corrected the selector here
    
        let characterHTML = '';
    
        data.forEach((item, index) => {
            characterHTML += '<div class="achievement">'+
            '<img src="'+item['imgSrc']+'"/>'+
            '<div class="achievement-text">'+
                '<h1>'+item['title']+'</h1>'+
                '<h1>'+item['description']+'</h1>'+
                '<h1>'+item['percentage']+' of players has this achievement.</h1>'+
            '</div>'+
            '<span class="get-text"></span>'+
        '</div>';
        });
    
        container.innerHTML = characterHTML; // Set the generated HTML inside the container
    }
    
    // Call the function to load achievements when the page loads
    window.onload = loadAchievements();    
});
