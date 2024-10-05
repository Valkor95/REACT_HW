import React from 'react';
import {useRoutes} from "react-router-dom";
import routerConfig from "./routerConfig.jsx";

const RoutesComponent = () => {

    const routing = useRoutes(routerConfig)

    return (
        <>
            {routing}
        </>
    );


}
export default RoutesComponent;
