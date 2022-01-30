import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import {ThemeProvider} from "styled-components";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(()=>{
        const current_user = jwt_decode(localStorage.getItem('token'))
        check().then(() =>{
                user.setUser(current_user)
                console.log(current_user)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
    }, [])
    
    if(loading){
        return <Spinner animation={"grow"}/>
    }
  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
              <button onClick={themeToggler}>Switch Theme</button>
      <BrowserRouter>
          <NavBar />
          <AppRouter />
      </BrowserRouter>
      </ThemeProvider>
  );
});

export default App;
