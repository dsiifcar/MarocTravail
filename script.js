document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.getElementById('loadMoreJobs');
    const jobListingsContainer = document.getElementById('jobListings');

    let jobCount = 0; // Start with 0 displayed jobs
    const jobsToAdd = 6; // Show 6 jobs at a time for the initial load, then add by this increment
    const allJobs = [  // This will hold all our job data
        {
            title: 'Ingénieur Logiciel',
            company: 'Acme Corp',
            location: 'Casablanca',
            domaine: 'Informatique',
            formation: 'Bac +5 en Informatique',
            experience: '3 ans minimum',
            nombrePoste: '2',
            description: 'Nous recherchons un ingénieur logiciel talentueux avec de l\'expérience en Java et React. Plus de détails ici...',
            applyLink: 'https://www.google.com'
        },
        {
            title: 'Responsable Marketing',
            company: 'GlobalTech Solutions',
            location: 'Rabat',
            domaine: 'Marketing',
            formation: 'Bac +5 en Commerce',
            experience: '5 ans minimum',
            nombrePoste: '1',
            description: 'Nous recherchons un responsable marketing créatif pour diriger nos campagnes marketing. Plus de détails ici...',
            applyLink: 'https://www.facebook.com'
        },
        {
            title: 'Spécialiste du Support Client',
            company: 'Zeta Services',
            location: 'Marrakech',
            domaine: 'Service Client',
            formation: 'Bac +2 en Communication',
            experience: '1 ans minimum',
            nombrePoste: '3',
            description: 'Fournir un excellent support client et résoudre efficacement les demandes. Plus de détails ici...',
            applyLink: 'https://www.linkedin.com'
        },
        {
            title: 'Data Scientist',
            company: 'Data Insights',
            location: 'Casablanca',
            domaine: 'Science des Données',
            formation: 'Doctorat en Statistiques',
            experience: '5 ans minimum',
            nombrePoste: '1',
            description: 'Rejoignez une équipe de recherche de pointe travaillant sur des algorithmes avancés. Plus de détails ici...',
            applyLink: 'https://www.example.com/datascientist'
        },
        {
            title: 'Infirmier(ère)',
            company: 'Clinique Espoir',
            location: 'Agadir',
            domaine: 'Santé',
            formation: 'Diplôme d\'État d\'Infirmier',
            experience: '2 ans minimum',
            nombrePoste: '5',
            description: 'Offrez des soins de qualité et un soutien empathique aux patients dans un environnement bienveillant. Plus de détails ici...',
            applyLink: 'https://www.example.com/nurse'
        },
        {
            title: 'Enseignant(e) de Français',
            company: 'École Lumière',
            location: 'Rabat',
            domaine: 'Éducation',
            formation: 'Licence de Français',
            experience: '3 ans minimum',
            nombrePoste: '2',
            description: 'Transmettez votre passion pour la langue française à des élèves motivés. Plus de détails ici...',
            applyLink: 'https://www.example.com/teacher'
        },
         {
            title: 'Développeur Full-Stack',
            company: 'Code Wizards',
            location: 'Tanger',
            domaine: 'Informatique',
            formation: 'Bac +5 en Informatique',
            experience: '4 ans minimum',
            nombrePoste: '3',
            description: 'Nous recherchons un développeur talentueux capable de gérer le front-end et le back-end de nos applications. Plus de détails ici...',
            applyLink: 'https://www.example.com/fullstack'
        },
        {
            title: 'Community Manager',
            company: 'Social Boost',
            location: 'Marrakech',
            domaine: 'Marketing Digital',
            formation: 'Bac +3 en Marketing',
            experience: '2 ans minimum',
            nombrePoste: '1',
            description: 'Animez nos réseaux sociaux et développez notre communauté en ligne. Plus de détails ici...',
            applyLink: 'https://www.example.com/communitymanager'
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
