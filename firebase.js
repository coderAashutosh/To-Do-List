var firebaseConfig = {
    apiKey: "AIzaSyBU8hgqdjIigU-cFH0StDLrnsUVeJuWuN4",
    authDomain: "to-do-list-app-2fe44.firebaseapp.com",
    projectId: "to-do-list-app-2fe44",
    storageBucket: "to-do-list-app-2fe44.appspot.com",
    messagingSenderId: "597339791945",
    appId: "1:597339791945:web:482cf7a365e5cdd097d598",
    measurementId: "G-BVMFT5RR4G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();