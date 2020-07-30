import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyCgC9Bm89wXRL3aWwuKLYbmeDwfev2cWG0",
        authDomain: "bp-assignment-1.firebaseapp.com",
        databaseURL: "https://bp-assignment-1.firebaseio.com",
        projectId: "bp-assignment-1",
        storageBucket: "bp-assignment-1.appspot.com",
        messagingSenderId: "158750115016",
        appId: "1:158750115016:web:41ff2548b5407b0ab9d1fd",
        measurementId: "G-TY7T86W0VH"
      };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;