'use strict'
const STORAGE_KEY = 'projectDB'

var gProjects = [
    { id: 'minesweeper', name: 'Minesweeper', title: 'Dont touch the mines!', desc: 'reveal all the numbers and mark all the mines to win the game', url: 'https://shellypaxtoneliyahu.github.io/minesweeper/', publishedAt: 'milisec', labels: ['table', 'click events'] },
    { id: 'inpicture', name: 'In-Picture-Game', title: 'Guess The Show', desc: 'guess every show correctly to win the game', url: 'https://shellypaxtoneliyahu.github.io/in-picture-game/', publishedAt: 'milisec', labels: ['images', 'click events'] },
    { id: 'touchnums', name: 'Touch-Nums-Game', title: 'Touch all the numbers', desc: 'touch the numbers by their order to clear the board and win', url: 'https://shellypaxtoneliyahu.github.io/touch-nums-game/', publishedAt: 'milisec', labels: ['table', 'click events'] }
]

function getProjects() {
    return gProjects
}

function getProjectById(projectId) {
    const project = gProjects.find(project => project.id === projectId)
    return project
}

