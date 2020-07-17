//initialize Github class
const github = new Github;


//intatiate UI class
const ui = new UI;


//search input
const searchUser = document.querySelector('#searchUser');


//loadAllEventListeners
loadAllEventListeners();


//loadAllEventListeners 
function loadAllEventListeners(){
    //search user input
    searchUser.addEventListener('keyup', findUsers)
}

//find users function
function findUsers(e){
    const userInput = e.target.value;
    
    if(userInput !== ''){
        github.getUser(userInput)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //display alert

            } else {
                //show profile
                ui.showProfile(data.profile)
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
}
