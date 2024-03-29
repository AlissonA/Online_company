import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({ // dados do firebase
        apiKey: "AIzaSyBbG_8VRVuAQcEHW6avYz5cO27pJ1wI_sE",
        authDomain: "online-company.firebaseapp.com",
        databaseURL: "https://online-company.firebaseio.com",
        projectId: "online-company",
        storageBucket: "online-company.appspot.com",
        messagingSenderId: "944553625909",
        appId: "1:944553625909:web:90afc33953153ea1d7647c",
        measurementId: "G-KDXKD7XBPC",
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  off() {
    this.ref.off();
  }
}
Fire.shared = new Fire();
export default Fire;
