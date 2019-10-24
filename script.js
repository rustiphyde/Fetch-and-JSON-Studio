// TODO: add code here
window.addEventListener('load', function () {
  let container = document.getElementById('container');
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response => {
    response.json().then(function (json) {
      for (let i = 0; i < json.length; i++){
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
              <h3>${i +1}. ${json[i].firstName} ${json[i].lastName}</h3>
              <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills.join(', ')}</li>
              </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>
              `;
      }
    })
  })
})