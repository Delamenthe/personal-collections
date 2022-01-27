import React, {useContext} from 'react';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {COLLECTIONS_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate replace to={COLLECTIONS_ROUTE} />} />
        </Routes>
    );
};
export default AppRouter;