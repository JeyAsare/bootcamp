

function changePage(pageId){
    let page = document.getElementById(pageId);
    let pages = document.getElementsByClassName('gameplay');
    for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];
        currentPage.classList.remove('active');
    }
    page.classList.add('active');
}

function setDifficultyLevel(){
    let difView = '';

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        let difficultyLevel = bootcampQuiz.difficultyLevels[i];

        if (difficultyLevel.allowed === true) {
            difView = difView + `<button onclick="showQuestion(0, '${difficultyLevel.difficultyName}')" class = "difficulty-lvl-Btn">${difficultyLevel.difficultyName}</button>`;
            document.getElementById('intro-lvl-mesg').innerHTML = difficultyLevel.introMessage;
        } else {
            difView = difView + `<button class = "difficulty-lvl-Btn" disabled>${difficultyLevel.difficultyName}</button>`;
        }
    }
    document.getElementById('difficulty-lvls').innerHTML = difView;
}
