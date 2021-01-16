
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCW005eTtuuam9x81wC27X9JBLA9qX8xhg",
      authDomain: "social-media-b7e93.firebaseapp.com",
      databaseURL: "https://social-media-b7e93.firebaseio.com",
      projectId: "social-media-b7e93",
      storageBucket: "social-media-b7e93.appspot.com",
      messagingSenderId: "622302646011",
      appId: "1:622302646011:web:d830bcc5ddd41a7552ea5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName")
document.getElementById("userName").innerHTML = "welcome : " + userName
function addRoom() {
      Room_name = document.getElementById("roomName").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", Room_name)

      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectRoomName (this.id)'>#" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += row
      //End code
            });
      });
}
getData();
function redirectRoomName(name){
localStorage.setItem("room_name", name)
window.location="kwitter_page.html"
}
function logout() {
      localStorage.removeItem("userName")
      localStorage.removeItem("Room_name")
window.location="index.html"
}