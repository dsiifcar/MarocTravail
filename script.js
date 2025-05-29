document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.getElementById('loadMoreJobs');
    const jobListingsContainer = document.getElementById('jobListings');

    let jobCount = 0; // Start with 0 displayed jobs
    const jobsToAdd = 6; // Show 6 jobs at a time for the initial load, then add by this increment
    const allJobs = [  // This will hold all our job data
        {
            title: 'Chef de Service Éducation Financière',
            company: 'Autorité Marocaine du Marché des Capitaux',
            location: 'Rabat',
            domaine: 'Finance, économie ou en ingénierie',
            formation: 'Bac +5',
            experience: 'De 5 à 8 ans',
            nombrePoste: '1'
        },
        {
            title: 'Cadre Gestionnaire de Facturation',
            company: 'ANP',
            location: 'Dakhla',
            domaine: 'Gestion, Finances, Comptabilité, Logistique, Commerce ou équivalent.',
            formation: 'Bac +5',
            experience: 'Debutant',
            nombrePoste: '1',
        },
        {
            title: 'Cadre Planification',
            company: 'Société Marocaine d’Ingénierie Touristique',
            location: 'Rabat',
            domaine: 'Statistique/ IA / data et/ou analyse financière',
            formation: 'Ingénieur',
            experience: 'De 1 à 2 ans',
            nombrePoste: '1',

        },
        
         
    ];

    function createJobCard(job, index) {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <p class="domaine">Domaine: ${job.domaine}</p>
            <a href="Blogs/job-board.html" class="view-more-button" data-index="${index}">Voir plus</a>
        `;
        return jobCard;
    }

   function addJobs(start, count) {
        const end = Math.min(start + count, allJobs.length); // Ensure we don't go beyond the total number of jobs
        for (let i = start; i < end; i++) {
            const job = allJobs[i];
            const jobCard = createJobCard(job, i);
            jobListingsContainer.appendChild(jobCard);
        }

        jobCount = end;  // Update jobCount to the new end value

        if (jobCount >= allJobs.length) {
            loadMoreButton.style.display = 'none'; // Hide the button when all jobs are loaded
        }


    }

    // Store job data in local storage for use on the job board page
    function storeJobData(index) {
      localStorage.setItem('selectedJobIndex', index);
    }


    jobListingsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-more-button')) {
            const jobIndex = event.target.dataset.index;
            storeJobData(jobIndex);
        }
    });

    // Event listener for "Plus d'offres" button
    loadMoreButton.addEventListener('click', function() {
        addJobs(jobCount, jobsToAdd);
    });

    // Initial load of jobs
     addJobs(0, jobsToAdd);  // Load initial set of jobs
});
