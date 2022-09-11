import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import { useState, useEffect } from "react";

// REPLACE THIS CONFIG WITH YOUR OWN
const configFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC8cuPL_cvmJmNiCxT2HugVNYH9VpDs8VU",
    authDomain: "wiraratshop-af1d1.firebaseapp.com",
    projectId: "wiraratshop-af1d1",
    storageBucket: "wiraratshop-af1d1.appspot.com",
    messagingSenderId: "952981961546",
    appId: "1:952981961546:web:4a47e07d1ea1b3e97e5fb3",
    measurementId: "G-FWH0VWGLBX"
  };
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {}
}
configFirebase()

export const useLiveData = (path) => {
  const [data, setData] = useState(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const fbRef = firebase.database().ref(path)
    const updated = (snap) => {
      setData(snap.val())
      setReady(true)
    }
    fbRef.on('value', updated)
    return () => {fbRef.off('value', updated)}
  }, [path])
  return {data, ready}
}

export const loadData = async (path) => {
  const snap = await firebase.database().ref(path).once('value')
  return snap.val()
}

export const saveData = (path, value) => {
  firebase.database().ref(path).set(value)
}

export const multiUpdate = (updates) => {
  firebase.database().ref().update(updates)
}

export const addData = async (path, value) => {
  const ref = firebase.database().ref(path).push()
  await ref.set(value)
  return ref.key
}

export const deleteData = (path) => {
  firebase.database().ref(path).remove()
}

export {firebase}