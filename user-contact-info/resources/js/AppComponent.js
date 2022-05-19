import React from "react";

import HelloInterns from "./components/HelloInterns"
import AddUser from "./components/AddUser";
import DataTable from "./components/DataTable";

export default function AppComponent(){
    return(
        <>
            <HelloInterns />
            <AddUser />
            <DataTable />
        </>
    )
}