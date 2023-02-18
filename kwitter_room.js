function logout()
{
    window.location="index.html"
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room"});
}
const firebaseConfig = {
  apiKey: "AIzaSyBraVtM5y08WI7o9V5nW7FVkC9Pszt4-no",
  authDomain: "schoole-chat.firebaseapp.com",
  databaseURL: "https://schoole-chat-default-rtdb.firebaseio.com",
  projectId: "schoole-chat",
  storageBucket: "schoole-chat.appspot.com",
  messagingSenderId: "97603208363",
  appId: "1:97603208363:web:547d6ce3553f813835a3ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);