import React from 'react';
import NavPage from "../../src/components/NavPage";
import description from "../../src/dashboard/description.md"
import items from "../../src/dashboard/dashboards";


const Index = () => (
    <NavPage description={description} items={items}/>
);


export default Index;