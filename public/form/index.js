// const petForm = document.getElementById('pet-form');

// petForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let formData = new FormData(petForm);
//     let prms = configureParameters(formData);
//     const url = new URL(`/MatchThePet/matches/index.html?care=${prms.care}&pet-existence=${prms.pet_existence}&pet-character=${prms.character}&children-existence=${prms.children_existence}&pet-type=${prms.type}&training=${prms.training}`, window.location.href);
//     window.location.href = url.toString();
// });


// function configureParameters (formData) {
//     return {
//         care: formData.get('care-level'),
//         pet_existence: formData.get('pet-existence'),
//         character: formData.get('pet-character'),
//         type: formData.get('pet-type'),
//         children_existence: formData.get('children-existence'),
//         training: formData.get('training-level')
//     };
// }