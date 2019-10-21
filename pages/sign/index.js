import React from 'react';
import NavPage from "../../src/components/NavPage";
import description from "../../src/views/Sign/description.md"
import pages from "../../src/views/Sign/pages";

const path = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Authentication",
        link: "/sign"
    },
];

const Index = () => (
    <NavPage description={description} items={pages} path={path}/>
);


export default Index;