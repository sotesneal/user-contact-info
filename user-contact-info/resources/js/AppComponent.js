import React from "react";

import AddUser from "./components/AddUser";
import DataTable from "./components/DataTable";
import Search from "./components/SearchContact";

export default function AppComponent(){
    return(
        <div className="container">
            <h1>Contact Information</h1>
            <AddUser />
            <DataTable />
        </div>
    )
}