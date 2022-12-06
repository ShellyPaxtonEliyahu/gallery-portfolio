console.log('Starting up');

$(initPage)

function initPage() {
    renderPortfolio()

}

function renderPortfolio() {
    var projects = getProjects()
    const strHTMLs = projects.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">` +
        `<a class="portfolio-link" data-toggle="modal" ">` +
        `<div class="portfolio-hover">` +
        `<div class="portfolio-hover-content">` +
        `<i class="fa fa-plus fa-3x"></i>` +
        `</div>` +
        `</div>` +
        `</a>` +
        `<img class="img-fluid" src="img/me/${project.id}.png" onclick="onOpenModal('${project.id}')">` +
        `<div class="portfolio-caption">` +
        `<h4>${project.name}</h4>` +
        `<p class="text-muted">${project.title}</p>` +
        `</div>` +
        `</div>`)
    $('.portfolio').html(strHTMLs)
    // console.log(strHTMLs)
}

function renderModal(projectId) {
    var project = getProjectById(projectId)
    const strHTML = `<h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}</p>
   <img class="img-fluid d-block mx-auto" src="img/me/${projectId}.png" >
   <p>${project.desc}</p>
  <ul class="list-inline">
   <li>Date: ${new Date(project.publishedAt)}</li>
   <li>Client: Coding Academy</li>
   <li>Category: Games</li>
   </ul>
    <div class="buttons-container"><a href="${project.url}" target="_blank"><button class="btn btn-primary" data-dismiss="modal" type="button" >Try me</button></a>
  <button class="btn btn-primary" data-dismiss="modal" type="button" onclick="onCloseModal()">
   <i class="fa fa-times"></i> Close Project</button></div>`


    $('.modal-container').html(strHTML)
}

function onOpenModal(projectId) {
    renderModal(projectId)
    $('.modal-container').addClass('open')
}

function onCloseModal() {
    $('.modal-container').removeClass('open')
}

function onSubmit() {
    $elUserEmail = $('.email-address').val()

    $elSubject = $('.subject').val()

    $elMessage = $('.message')

}