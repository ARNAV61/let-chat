//YOUR FIRE BASE LINKS 
// const firebaseConfig = { apiKey: "AIzaSyAuo63esbj1Y-cUs5tQelErviSfinz8Uhw", authDomain: "class-93-7653c.firebaseapp.com", databaseURL: "https://class-93-7653c-default-rtdb.firebaseio.com", projectId: "class-93-7653c", storageBucket: "class-93-7653c.appspot.com", messagingSenderId: "566570787008", appId: "1:566570787008:web:151d8f86492103d3c40d25", measurementId: "G-RM6QGVMMCB" }; 

const firebaseConfig = {
  apiKey: "AIzaSyDvTFj_Li0kxM3QBDDcYmTOWi53m8UwQHM",
  authDomain: "social-media-32b62.firebaseapp.com",
  databaseURL: "https://social-media-32b62-default-rtdb.firebaseio.com",
  projectId: "social-media-32b62",
  storageBucket: "social-media-32b62.appspot.com",
  messagingSenderId: "238380040381",
  appId: "1:238380040381:web:10c3e0247bcc26edd8f7d4",
  measurementId: "G-SCGLTLBBXR"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

   
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  