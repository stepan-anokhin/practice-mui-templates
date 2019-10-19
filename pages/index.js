import React from 'react';
import NavPage from "../src/components/NavPage";
import description from '../src/views/Home/description.md'
import templates from '../src/views/Home/templates'

const path = [
    {name: "Home", link: "/"},
];

const Index = () => (
    <NavPage description={description} items={templates} path={path}/>
);


export default Index;