document.addEventListener('EducationPageLoad', function () {
    research_projects = document.getElementById('research-projects-container')
    new InfoBlock(research_projects,
        ['research', 'atlas', 'analysis'],
        'VBS Analysis',
        'Worked in a team to produce a world-leading observation of a rare physics process'
    )
    new InfoBlock(research_projects,
        ['research', 'atlas', 'analysis'],
        'Triboson Analysis',
        'Single-handedly produced the first ever measurement of a challenging physics process'
    )
    new InfoBlock(research_projects,
        ['research', 'atlas', 'upgrade'],
        'Algorithm Visualiser',
        'Single-handedly produced the first ever measurement of a challenging physics process'
    )
    new InfoBlock(research_projects, ['research', 'atlas', 'upgrade'], 'Algorithm Visualiser', 'brief here')
    new InfoBlock(research_projects, ['research', 'atlas', 'upgrade'], 'Algorithm Visualiser', 'brief here')
    new InfoBlock(research_projects, ['research', 'atlas', 'upgrade'], 'Algorithm Visualiser', 'brief here')
});
