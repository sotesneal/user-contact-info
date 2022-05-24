/**
 * Code reference/s:
 * https://www.npmjs.com/package/mui-datatables
 * 
 */

import React, { useState, useEffect } from "react";
import "../../css/App.css";
import MaterialTable from "material-table";

const empList = [
    { fName: "Juan", lName: "dela Cruz", delAddress: "Fort Bonifacio Global City, Makati City, Metro Manila", billAddress: "Fort Bonifacio Global City, Makati City, Metro Manila"},
    { fName: "Isagani", lName: "Vasquez", delAddress: "Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija", billAddress: "Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija"},
    { fName: "Sam", lName: "Santiago", delAddress: "Session Road, Baguio, Benguet", billAddress: "Prince Building, Makati City, Metro Manila"},
    { fName: "Malaya", lName: "Ignacio", delAddress: "V. Rama Avenue, Guadalupe, Cebu City, Cebu", billAddress: "V. Rama Avenue, Guadalupe, Cebu City, Cebu"},
    { fName: 'Max', lName: 'Reyes', delAddress: 'PVB Building, Justice Romualdez Street, Tacloban, Leyte', billAddress: 'PVB Building, Justice Romualdez Street, Tacloban, Leyte'},
    { fName: 'Shannon', lName: 'Diaz', delAddress: 'A. Pichon St., Davao City, Davao del Sur', billAddress: 'A. Pichon St., Davao City, Davao del Sur'},
    { fName: 'Jamie', lName: 'Castro', delAddress: '2/F JR Photo Lab Bldg., Quezon Avenue, Cotabato City, Maguindanao', billAddress: '2/F JR Photo Lab Bldg., Quezon Avenue, Cotabato City, Maguindanao'},
    { fName: 'Alex', lName: 'Sanchez', delAddress: 'F. Cabahug Street, Mabolo, Cebu City, Cebu', billAddress: 'F. Cabahug Street, Mabolo, Cebu City, Cebu'},
    { fName: 'Sean', lName: 'Martinez', delAddress: 'Estaka, Dipolog, Zamboanga del Norte', billAddress: 'Estaka, Dipolog, Zamboanga del Norte'},
    { fName: 'Mae', lName: 'Tiu', delAddress: 'CP Garcia Avenue corner M.H. Del Pilar Street, Tagbilaran, Bohol', billAddress: 'CP Garcia Avenue corner M.H. Del Pilar Street, Tagbilaran, Bohol'},
    { fName: 'Tina', lName: 'Flores', delAddress: 'Masangkay St. Sta Cruz, Manila', billAddress: '584 McArthur Highway, Malanday, Valenzuela, Metro Manila'},
    { fName: 'Jennifer', lName: 'Ramos', delAddress: 'Las Pinas, Metro Manila', billAddress: '460 Solanda Street Intramuros 1000, Manila'},
];

export default function ContactListDataTable() {

    const [tableData, setTableData] = useState(empList);
    const columns = [
        { title: "First Name", field: "fName" },
        { title: "Last Name", field: "lName" },
        { title: "Delivery Address", field: "delAddress" },
        { title: "Billing Address", field: "billAddress" },
    ];

    return (
        <div className="App">
            <h1 align="center">Contact Information</h1>
            <MaterialTable
                title="Contact Information"
                data={tableData}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) =>
                        new Promise((resolve, reject) => {
                            setTableData([...tableData, newRow]);
                            setTimeout(() => resolve(), 500);
                        }),
                    onRowUpdate: (newRow, oldRow) =>
                        new Promise((resolve, reject) => {
                            console.log(newRow, oldRow);
                            const updatedData = [...tableData];
                            updatedData[oldRow.tableData.id] = newRow;
                            setTableData(updatedData);
                            setTimeout(() => resolve(), 500);
                        }),
                    onRowDelete: (selectedRow) =>
                        new Promise((resolve, reject) => {
                            const updatedData = [...tableData];
                            updatedData.splice(selectedRow.tableData.id, 1);
                            setTableData(updatedData);
                            setTimeout(() => resolve(), 1000);
                        }),
                }}
                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    // filtering: true,
                    paging: true,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "UserContactInfo",
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                }}
            />
        </div>
    );
}
