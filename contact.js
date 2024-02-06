const firebaseConfig = {
    apiKey: "AIzaSyBrB17Q5NVHY8V5ezkQuANrJDNiwBRr2mA",
    authDomain: "end-project-9cdeb.firebaseapp.com",
    databaseURL: "https://end-project-9cdeb-default-rtdb.firebaseio.com",
    projectId: "end-project-9cdeb",
    storageBucket: "end-project-9cdeb.appspot.com",
    messagingSenderId: "57620261230",
    appId: "1:57620261230:web:f41eac05069d3212b2397f"
  };

  //initializie firbase
  firebase.initializeApp(firebaseConfig);

  //refrence your database
  var EndProjectDB = firebase.database().ref('End-ProjectDatabase');
  document.getElementById('f').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name1");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var message = getElementVal("Message");

    saveMessages(name, email, phone, message);

    //enable alert
    document.querySelector(".alert").style.display = 'block';

  }
  const saveMessages = (name, email, phone, message) => {
      var newContactForm = EndProjectDB.push();

      newContactForm.set({
        name : name,
        email : email,
        phoneNumber : phone,
        Message : message
       
      });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }