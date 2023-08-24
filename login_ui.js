       firebaseConfig = {
  apiKey: "AIzaSyDegx3w_FuITCkZyfBzeBEyZcstla6KiFU",
  authDomain: "lonely-heart-dating-app.firebaseapp.com",
  projectId: "lonely-heart-dating-app",
  storageBucket: "lonely-heart-dating-app.appspot.com",
  messagingSenderId: "631094889520",
  appId: "1:631094889520:web:5ad90851ef273bf62131f5",
  measurementId: "G-FX34E00V5E"
};
        firebaseApp = firebase.initializeApp(firebaseConfig);
        db = firebaseApp.firestore();
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'config.htm',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: 'tos.htm',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('privacy.htm');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      auth = firebase.auth()
       ui = new firebaseui.auth.AuthUI(auth);
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);