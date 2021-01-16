 //YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCW005eTtuuam9x81wC27X9JBLA9qX8xhg",
      authDomain: "social-media-b7e93.firebaseapp.com",
      databaseURL: "https://social-media-b7e93.firebaseio.com",
      projectId: "social-media-b7e93",
      storageBucket: "social-media-b7e93.appspot.com",
      messagingSenderId: "622302646011",
      appId: "1:622302646011:web:d830bcc5ddd41a7552ea5e"
};
// Initialize Firebaser
firebase.initializeApp(firebaseConfig)
room_name = localStorage.getItem("room_name")
userName = localStorage.getItem("userName")
function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            Name:userName,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = ""
}
//End code
function getData() {
      firebase.database().ref("/" +room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name=message_data['Name']
                        message=message_data['message']
                        like=message_data['like']
                        name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>"
                        message_tag="<h4 class='message_h4'>"+message+"</h4>"
                        like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateThisLink(this.id)'>"
                        span_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button></hr>"

                        row=name_with_tag+message_tag+like_button+span_tag;
                        document.getElementById("output").innerHTML+=row;
                  }
            });
      });
}
getData()
;
function updateThisLink(message_id){
      button_id=message_id
      like=document.getElementById(button_id).value;
      updated_likes=Number(like) +1;

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}

function logout() {
      localStorage.removeItem("userName")
      localStorage.removeItem("Room_name")
window.location.replace("index.html")
}