import React from 'react';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {COLLECTIONS_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
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