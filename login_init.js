// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 firebaseConfig = {
  databaseURL: "https://lonely-heart-dating-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  apiKey: "AIzaSyDegx3w_FuITCkZyfBzeBEyZcstla6KiFU",
  authDomain: "neuralll.github.io",
  projectId: "lonely-heart-dating-app",
  storageBucket: "lonely-heart-dating-app.appspot.com",
  messagingSenderId: "631094889520",
  appId: "1:631094889520:web:5ad90851ef273bf62131f5",
  measurementId: "G-FX34E00V5E"
};

firebaseApp = firebase.initializeApp(firebaseConfig);
if (! window['auth']) { auth = firebaseApp.auth(); }