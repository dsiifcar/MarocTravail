<script>
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('loadMoreJobs');
    const jobListingsContainer = document.getElementById('jobListings');

    let jobCount = 0;
    const jobsToAdd = 6;

    const allJobs = [
        {
            title: 'Chef de Service Éducation Financière',
            company: 'Autorité Marocaine du Marché des Capitaux',
            location: 'Rabat',
            domaine: 'Finance, économie ou en ingénierie',
            formation: 'Bac +5',
            experience: 'De 5 à 8 ans',
            nombrePoste: '1',
            link: 'Blogs/chef-service.html'
        },
        {
            title: 'Cadre Gestionnaire de Facturation',
            company: 'ANP',
            location: 'Dakhla',
            domaine: 'Gestion, Finances, Comptabilité, Logistique, Commerce ou équivalent.',
            formation: 'Bac +5',
            experience: 'Débutant',
            nombrePoste: '1',
            link: 'Blogs/cadre-facturation.html'
        },
        {
            title: 'Cadre Planification',
            company: 'Société Marocaine d’Ingénierie Touristique',
            location: 'Rabat',
            domaine: 'Statistique/ IA / data et/ou analyse financière',
            formation: 'Ingénieur',
            experience: 'De 1 à 2 ans',
            nombrePoste: '1',
            link: 'Blogs/cadre-planification.html'
        },
        // Add more jobs here with different `link` values
    ];

    function createJobCard(job, index) {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <p class="domaine">Domaine: ${job.domaine}</p>
            <a href="${job.link}" class="view-more-button" data-index="${index}">Voir plus</a>
        `;
        return jobCard;
    }

    function addJobs(start, count) {
        const end = Math.min(start + count, allJobs.length);
        for (let i = start; i < end; i++) {
            const job = allJobs[i];
            const jobCard = createJobCard(job, i);
            jobListingsContainer.appendChild(jobCard);
        }

        jobCount = end;

        if (jobCount >= allJobs.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    function storeJobData(index) {
        const job = allJobs[index];
        localStorage.setItem('selectedJob', JSON.stringify(job));
    }

    jobListingsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('view-more-button')) {
            const jobIndex = event.target.dataset.index;
            storeJobData(jobIndex);
        }
    });

    loadMoreButton.addEventListener('click', function () {
        addJobs(jobCount, jobsToAdd);
    });

    addJobs(0, jobsToAdd);
});
</script>
