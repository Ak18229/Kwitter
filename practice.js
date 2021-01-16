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

function addUser(){
 userName = document.getElementById("userName").value 
 firebase.database().ref("/").child(userName).update({
     purpose : "addUser"
 })
}