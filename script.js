$('#description_cours').hide();
$('#description_centreInteret').hide();
$('#description_langue').hide();
$('#description_competence').hide();
$('#description_experience').hide();
$('#description_formation').hide();
$('#description_profil').hide();
$('#header_content_section').hide();


let btnDown = document.getElementById('headerInfoPersonnel');

btnDown.addEventListener('click', (e) => {

    $('#header_content_section').slideToggle();
});

document.getElementById('headerProfil').onclick = (e) => {
    $('#description_profil').slideToggle();
}
document.getElementById('headerFormation').onclick = (e) => {
    $('#description_formation').slideToggle();
}
document.getElementById('headerExperience').onclick = (e) => {
    $('#description_experience').slideToggle()
}
document.getElementById('headerCompetence').onclick = (e) => {
    $('#description_competence').slideToggle()
}
document.getElementById('headerLangue').onclick = (e) => {
    $('#description_langue').slideToggle()
}
document.getElementById('headerCentreInteret').onclick = (e) => {
    $('#description_centreInteret').slideToggle()
}
document.getElementById('headerCours').onclick = (e) => {
    $('#description_cours').slideToggle()
}