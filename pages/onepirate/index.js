import React from 'react';
import NavPage from "../../src/components/NavPage";
import description from "../../src/views/Onepirate/description.md"
import pages from "../../src/views/Onepirate/pages";

const path = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Onepirate",
        link: "/sign"
    },
];

const Index = () => (
    <NavPage description={description} items={pages} path={path}/>
);


export default Index;