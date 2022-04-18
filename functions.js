const currentGame = document.getElementById("currentGame")

function getAPI() {
    api = document.getElementById("apiInput").value;
    console.log(api);
    
    getUUID()

}

function getUUID(){
    fetch("https://api.hypixel.net/key?key=" + api)
    .then(result => result.json())
    .then(({ record }) => {
        console.log(record.owner)
        UUID = record.owner
    })
}

function getStatus(){
    fetch("https://api.hypixel.net/status?key=" + api + "&uuid=" + UUID)
    .then(result => result.json())
    .then(({ session }) => {
        console.log(session.gameType)
        game = session.gameType
        document.getElementById("currentGame").innerHTML = game
    })
}