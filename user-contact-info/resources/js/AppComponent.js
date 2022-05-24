import React from "react";

import AddUser from "./components/AddUser";
import ContactListDataTable from "./components/ContactListDataTable";
import Search from "./components/SearchContact";

export default function AppComponent(){
    return(
        <div className="container">
            {/* <h1></h1>
            <AddUser /> */}
            <ContactListDataTable />
        </div>
    )
}