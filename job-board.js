document.addEventListener('DOMContentLoaded', function() {

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

    // Retrieve the job data index from local storage
    const selectedJobIndex = localStorage.getItem('selectedJobIndex');

    if (selectedJobIndex !== null) {
      const job = allJobs[selectedJobIndex];

      document.getElementById('jobBoardTitle').textContent = `Job Board - ${job.title}`; // Update page title
      document.getElementById('jobTitle').textContent = job.title;
      document.getElementById('company').textContent = `Entreprise: ${job.company}`;
      document.getElementById('location').textContent = `Lieu: ${job.location}`;
      document.getElementById('domaine').textContent = `Domaine: ${job.domaine}`;
      document.getElementById('formation').textContent = `Formation: ${job.formation}`;
      document.getElementById('experience').textContent = `Expérience: ${job.experience}`;
      document.getElementById('nombrePoste').textContent = `Nombre de Postes: ${job.nombrePoste}`;
      document.getElementById('description').textContent = job.description;
      document.getElementById('applyButton').href = job.applyLink;
    }  else {
      document.getElementById('jobTitle').textContent = "Job Not Found";
    }

    localStorage.removeItem('selectedJobIndex'); // Clear local storage after use
});