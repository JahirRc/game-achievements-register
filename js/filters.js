data = [
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Charmed.webp",
        "title": "Charmed",
        "description": "Acquire your first Charm.",
        "percentage": "75.6% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Blessed.webp",
        "title": "Blessed",
        "description": "Acquire all Charms and receive Salubra's Blessing.",
        "percentage": "18.8% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Enchanted.webp",
        "title": "Enchanted",
        "description": "Acquire half of Hallownest's Charms.",
        "percentage": "37.7% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Protected.webp",
        "title": "Protected",
        "description": "Acquire 4 Mask Shards.",
        "percentage": "45.4% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Masked.webp",
        "title": "Masked",
        "description": "Acquire all Mask Shards.",
        "percentage": "18.1% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Soulful.webp",
        "title": "Soulful",
        "description": "Acquire 3 Vessel Fragments.",
        "percentage": "41.3% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Worldsoul.webp",
        "title": "Worldsoul",
        "description": "Acquire all Vessel Fragments.",
        "percentage": "23.2% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Falsehood.webp",
        "title": "Falsehood",
        "description": "Defeat the False Knight.",
        "percentage": "69.6% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Strength.webp",
        "title": "Strength",
        "description": "Defeat the Failed Champion.",
        "percentage": "24.2% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Test_of_Resolve.webp",
        "title": "Test Of Resolve",
        "description": "Defeat Hornet in Greenpath.",
        "percentage": "60.8% of players has this achievement."
    },
    {
        "imgSrc": "img/Hollow_Knight/Achievement_Proof_of_Resolve.webp",
        "title": "Proof Of Resolve",
        "description": "Defeat Hornet in Kingdom's Edge.",
        "percentage": "35.9% of players has this achievement."
    }
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
                '<h1>'+item['percentage']+'</h1>'+
            '</div>'+
            '<span class="get-text"></span>'+
        '</div>';
        });
    
        container.innerHTML = characterHTML; // Set the generated HTML inside the container
    }
    
    // Call the function to load achievements when the page loads
    window.onload = loadAchievements();    

    const searchInput = document.getElementById('searchInput');
    const achievements = Array.from(document.querySelectorAll('.achievement'));
    
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim().toLowerCase();
        
        achievements.forEach(achievement => {
            const achievementText = achievement.querySelector('.achievement-text h1:first-child');
            const isVisible = achievementText.textContent.toLowerCase().includes(searchText);
            achievement.style.display = isVisible ? 'flex' : 'none';
        });
    });
    
    const sortButton = document.getElementById('sortByPercent');
    
    sortButton.addEventListener('click', () => {
        const sortedAchievements = achievements.slice().sort((a, b) => {
            const aPercentage = parseFloat(a.querySelector('.achievement-text h1:nth-child(3)').textContent.replace('%', ''));
            const bPercentage = parseFloat(b.querySelector('.achievement-text h1:nth-child(3)').textContent.replace('%', ''));
            return bPercentage - aPercentage;
        });
        
        // Remove existing achievements and append sorted achievements
        achievements.forEach(achievement => achievement.remove());
        sortedAchievements.forEach(achievement => document.querySelector('.achievements').appendChild(achievement));
    });
    
    
    const revertSortButton = document.getElementById('revertSort');
    
    revertSortButton.addEventListener('click', () => {
        achievements.forEach(achievement => document.querySelector('.achievements').appendChild(achievement));
    });
    
    const achievements2 = document.querySelectorAll('.achievement');
    const progressBar = document.getElementById('progressBar');
    const totalAchievements = achievements2.length; // Assuming you have calculated the total number of achievements
    let clickedAchievements = JSON.parse(localStorage.getItem('clickedAchievements')) || [];

    achievements2.forEach((achievement, index) => {
        if (clickedAchievements.includes(index)) {
            achievement.classList.add('clicked');
            achievement.querySelector('.get-text').textContent = 'Obtained'; // Add this line
        }

        achievement.addEventListener('click', () => {
            const achievementIndex = clickedAchievements.indexOf(index);
            if (achievementIndex !== -1) {
                clickedAchievements.splice(achievementIndex, 1);
                achievement.classList.remove('clicked');
                achievement.querySelector('.get-text').textContent = ''; // Add this line
            } else {
                clickedAchievements.push(index);
                achievement.classList.add('clicked');
                achievement.querySelector('.get-text').textContent = 'Obtained'; // Add this line
            }
            updateProgressBar();
            localStorage.setItem('clickedAchievements', JSON.stringify(clickedAchievements));
        });
    });

    function updateProgressBar() {
        const obtainedAchievements = clickedAchievements.length;
        const percentage = (obtainedAchievements / totalAchievements) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    window.onload = () => {
        updateProgressBar();
    };
});



