// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0aWkQt4bakWHSkIP0PFLBhTBmwP8vn0A",
  authDomain: "mutlipage-69992.firebaseapp.com",
  databaseURL: "https://mutlipage-69992-default-rtdb.firebaseio.com",
  projectId: "mutlipage-69992",
  storageBucket: "mutlipage-69992.appspot.com",
  messagingSenderId: "142935198940",
  appId: "1:142935198940:web:e2c6bc958e412bc5d63819"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 


function singout(){
    window.location="index.html"
}

function send(){
    var newElement=document.createElement("p");
    newElement.textContent=document.getElementById("input").value;
    
   
    
   
    mydata.appendChild(newElement);
    
    document.getElementById("input").value="";
}