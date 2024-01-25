let eduLoaded = false
document.addEventListener('EducationPageLoad', function () {
    eduLoaded = true
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
    EducationPageStyleHack();
});

function EducationPageStyleHack() {
    if ( !eduLoaded ) return;
    // get left elements, gives the height we want to set
    let left_upper = document.querySelector('.edu#left > #top');
    let left_lower = document.querySelector('.edu#left > #bottom');
    // get the right box that we will change the height of
    let right = document.querySelector('.edu#right > div');
    // set height to total height of left two (magic number to deal with margin, padding, border)
    right.style.maxHeight = (
        left_lower.getBoundingClientRect().bottom -
        left_upper.getBoundingClientRect().top - 22.5
    ) + 'px';
}
