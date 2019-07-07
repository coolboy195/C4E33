  var config = {
    apiKey: "AIzaSyCwMDG9cnEQ6LMsb0o5y_sqjkl8c9somUk",
    authDomain: "coolboy195-hshop.firebaseapp.com",
    databaseURL: "https://coolboy195-hshop.firebaseio.com",
    projectId: "coolboy195-hshop",
    storageBucket: "",
    messagingSenderId: "990001732065",
    appId: "1:990001732065:web:55afa3522725c0ba"
  };
  firebase.initializeApp(config);

  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
  };

 async function login(){
   console.log('a')
    let snapshot = await getData();
    console.log(snapshot)
    
 }

 function getData() {

    return new Promise((resolve, reject) => {
      firebase.database().ref().child('products/0').on('value', function(snapshot) {
        var a = snapshotToArray(snapshot);
        resolve(a);
      });
    });
 }
