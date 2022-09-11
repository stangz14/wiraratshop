import React, { useState, useEffect, useContext, createContext } from "react";
import {firebase} from './firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export const logout = async () => {
  await firebase.auth().signOut()
}

const authContext = createContext();

function useProvideAuth(sessionUser) {
  const [user, setUser] = useState(sessionUser);
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setReady(true)
    });
    return () => unsubscribe();
  }, []);

  return { user, ready };
}

export function ProvideAuth({ children, sessionUser }) {
  const auth = useProvideAuth(sessionUser);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  let firebaseAuthConfig = {}
  if (renderAuth) {
    firebaseAuthConfig = {
      signInFlow: 'popup',
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        }, 
      ],
      credentialHelper: 'none',
    }
  }
  if (!renderAuth) {return null}
  return <div>
    <StyledFirebaseAuth
      uiConfig={firebaseAuthConfig}
      firebaseAuth={firebase.auth()}
    />
  </div>
}

const Inner = ({children}) => {
  const auth = useAuth();
  if (!auth.ready) {
    return <div>loading...</div>
  }
  return <div>
    {auth.user && <div>
      {children}
    </div>}
    {!auth.user && <div>
      <FirebaseAuth />
    </div>} 
  </div>
}

export const RequireLogin = ({children}) => {
  return <ProvideAuth sessionUser={null}> 
    <Inner>{children}</Inner>
  </ProvideAuth>
}
