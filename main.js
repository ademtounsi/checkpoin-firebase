var firebaseConfig = {
    apiKey: "AIzaSyC_NV9dRtPIbDh6YtQHS16oM4zqH4B-m8Y",
    authDomain: "names-cbd44.firebaseapp.com",
    databaseURL: "https://names-cbd44.firebaseio.com",
    projectId: "names-cbd44",
    storageBucket: "",
    messagingSenderId: "249576723034",
    appId: "1:249576723034:web:8a05e1d853f30852"
  };
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  document.getElementById("database").addEventListener("submit",function(e){
      e.preventDefault();
      submit();
  })
  function submit(){
    let ref = database.ref("names");
    let data = {
        name:document.getElementById("name").value,
        Email:document.getElementById("Email").value,
        phonenumber:document.getElementById("phone").value,
        unischool:document.getElementById("school").value,
        course:document.getElementById("course").value
    }
    ref.push(data)
  }