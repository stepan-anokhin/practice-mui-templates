import React from 'react';
import NavPage from "../src/components/NavPage";
import description from '../src/landing/description.md'
import templates from '../src/landing/templates'


const Index = () => (
    <NavPage description={description} items={templates}/>
);


export default Index;