import React, { useContext, useEffect } from "react";
import { HomePage, LandingPage, LoginPage, SelectProfilePage } from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase";

function Routes() {
  const authContext = useContext(AuthContext);
  //const { user } = authContext;
  // console.log("Usuario: ", authContext);
  const user = null;
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //log in
        console.log(userAuth)
      }else{
        //loged out 
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={LoginPage} />           
            </>
        )
        :(  <Route exact path="/browse" component={HomePage} /> )
      }
      </Switch>
    </Router>
  );
}

export default Routes;
