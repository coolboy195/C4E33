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


      // Snapshot to Array

      function snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });
        return returnArr;
      };


    // Tracking


    async function tracking_check(clicked_id){
        let tracking = await tracking_data();
        alert(`Tracking ID: ${tracking.tracking_ID}\n
        Name: ${tracking.name}\n
        Price: ${tracking.price}\n
        `);
    }


    function tracking_data() {
        
        let trackingID = document.getElementById('trackingID')
        return new Promise((resolve, reject) => {
          firebase.database().ref().child('products/tracking/' + trackingID).on('value', function(snapshot) {
            var a = snapshotToArray(snapshot);
            resolve(a);
          });
        });
    }
    

    // Render product
    
    function renderHtml(data) {
      let htmlContent = `
      <div id='ea' class='item'>
      <div class='size'>
      <img class='pic' src='${data.image}' alt=''</div>
      <div id='box1' class='col'><div><h4>${data.name}</h4><h5><a style='color: red'>Price: ${data.price}</a></h5><h5><a id='${data.productId}' onClick='buynow(this.id)'>BUY NOW</a></h5></div></div></div>`

      var itemList = document.getElementById("itemList")

      itemList.innerHTML += htmlContent
    }
    
        
     async function renderItem(category){
        var items = await getData_View(category);
        console.dir(category)

        itemList.innerHTML = ""
        if (itemList.innerHTML == "") {

          items.forEach(item => {
            renderHtml(item)
          })
        } 
     }

     function getData_View(category) {
    
        return new Promise((resolve, reject) => {
          firebase.database().ref().child(`products/${category}/`).on('value', function(snapshot) {
            var a = snapshotToArray(snapshot);
            resolve(a);
          });
        });
     }

     function getData_buynow_ea() {
    
      return new Promise((resolve, reject) => {
        firebase.database().ref().child('products/ea').on('value', function(snapshot) {
          var a = snapshotToArray(snapshot);
          resolve(a);
        });
      });
   }
    

   // Buynow item

    async function buynow(items){
             console.log(items)
    }



