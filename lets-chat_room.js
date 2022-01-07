const firebaseConfig = {
      apiKey: "AIzaSyDGoPDV09QDcNUS_clsuqYa7J997U8RWG8",
      authDomain: "kwitter-7d79f.firebaseapp.com",
      databaseURL: "https://kwitter-7d79f-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d79f",
      storageBucket: "kwitter-7d79f.appspot.com",
      messagingSenderId: "655055270355",
      appId: "1:655055270355:web:16c10b1b82768ace0f3f26",
      measurementId: "G-D0WGCJ028K"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
