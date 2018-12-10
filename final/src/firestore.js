import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZh_vJ3HXfpmjUsNPZxWSVVEJlySicq3g",
  authDomain: "cmpe172-jdr.firebaseapp.com",
  databaseURL: "https://cmpe172-jdr.firebaseio.com",
  projectId: "cmpe172-jdr",
  storageBucket: "cmpe172-jdr.appspot.com",
  messagingSenderId: "575351954956"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;
