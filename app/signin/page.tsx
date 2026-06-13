"use client";

import { initializeUI } from "@firebase-oss/ui-core";
import { FirebaseUIProvider, SignInAuthScreen } from "@firebase-oss/ui-react";
import "@firebase-oss/ui-styles/dist.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhRkgQY9dNuBkwQre4SYm3wG4BDLo8_R8",
  authDomain: "richard-playground-382018.firebaseapp.com",
  projectId: "richard-playground-382018",
  storageBucket: "richard-playground-382018.firebasestorage.app",
  messagingSenderId: "248858822102",
  appId: "1:248858822102:web:b2668a54ea781616ed5077",
};

const app = initializeApp(firebaseConfig);

const ui = initializeUI({
  app,
});

export default function Page() {
  return (
    <FirebaseUIProvider ui={ui}>
      <SignInAuthScreen onSignIn={() => {}} />
      aaa
    </FirebaseUIProvider>
  );
}
