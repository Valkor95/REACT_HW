import React from 'react';
import { Route, Routes } from "react-router-dom";
import routerConfig from "./routerConfig.js";

const RoutesComponent = () => {

    const routes = () => {
        return routerConfig.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
        ));
    };

    return (
        <Routes>
            {routes()}

            <Route
                path="*"
                element={
                    <main style={{ padding: '1rem' }}>
                        <h1>There is nothing here!</h1>
                    </main>
                }
            />
        </Routes>
    );
}

export default RoutesComponent;
