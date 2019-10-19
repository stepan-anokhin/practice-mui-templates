import React from 'react';
import NavPage from "../../src/components/NavPage";
import description from "../../src/views/Dashboard/description.md"
import items from "../../src/views/Dashboard/dashboards";

const path = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Dashboards",
        link: "/dashboard"
    },
];

const Index = () => (
    <NavPage description={description} items={items} path={path}/>
);


export default Index;