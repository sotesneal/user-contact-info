/**
 * Code reference/s:
 * https://www.npmjs.com/package/mui-datatables
 * 
 */

import React, { useState, useEffect } from "react";
import "../../css/App.css";
import MaterialTable from "material-table";

import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';

const empList = [
    {
        fName: "Juan",
        lName: "dela Cruz",
        delAddress: "Fort Bonifacio Global City, Makati City, Metro Manila",
        billAddress: "Fort Bonifacio Global City, Makati City, Metro Manila",
    },
    {
        fName: "Isagani",
        lName: "Vasquez",
        delAddress:
            "Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija",
        billAddress:
            "Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija",
    },
    {
        fName: "Sam",
        lName: "Santiago",
        delAddress: "Session Road, Baguio, Benguet",
        billAddress: "Prince Building, Makati City, Metro Manila",
    },
    {
        fName: "Malaya",
        lName: "Ignacio",
        delAddress: "V. Rama Avenue, Guadalupe, Cebu City, Cebu",
        billAddress: "V. Rama Avenue, Guadalupe, Cebu City, Cebu",
    },
];

export default function ContactListDataTable() {

    const [data, setData] = useState(empList);
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
                data={data}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) =>
                        new Promise((resolve, reject) => {
                            setData([...data, newRow]);
                            setTimeout(() => resolve(), 500);
                        }),
                    onRowUpdate: (newRow, oldRow) =>
                        new Promise((resolve, reject) => {
                            const updatedData = [...data];
                            updatedData[oldRow.data.id] = newRow;
                            setData = updatedData;
                            setTimeout(() => resolve(), 500);
                        }),
                }}
                options={{
                    sorting: true,
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "standard",
                    filtering: true,
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
  // const columns = ["","First Name", "Last Name", "Delivery Address", "Billing Address"];
//   const columns = [
//     {
//      name: "", // for edit icon column
//      label: "", 
//      options: {
//       filter: false,
//       sort: false,
//      }
//     },
//     {
//      name: "firstname",
//      label: "First Name",
//      options: {
//       filter: true,
//       sort: true,
//      }
//     },
//     {
//      name: "lastname",
//      label: "Last Name",
//      options: {
//       filter: true,
//       sort: true,
//      }
//     },
//     {
//      name: "deliveryaddress",
//      label: "Delivery Address",
//      options: {
//       filter: true,
//       sort: true,
//      }
//     },
//     {
//       name: "billingaddress",
//       label: "Billing Address",
//       options: {
//        filter: true,
//        sort: true,
//       }
//      },
//    ];

//   // Dummy data:
//   const data = [
//   ['Juan', 'dela Cruz', 'Fort Bonifacio Global City, Makati City, Metro Manila', 'Fort Bonifacio Global City, Makati City, Metro Manila'],
//   ['Isagani', 'Vasquez', 'Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija', 'Casa Castelo Bldg., Maharlika Highway, Cabanatuan, Nueva Ecija'],
//   ['Sam', 'Santiago', 'Session Road, Baguio, Benguet', 'Prince Building, Makati City, Metro Manila'],
//   ['Malaya', 'Ignacio', 'V. Rama Avenue, Guadalupe, Cebu City, Cebu', 'V. Rama Avenue, Guadalupe, Cebu City, Cebu'],
//   ['Max', 'Reyes', 'PVB Building, Justice Romualdez Street, Tacloban, Leyte', 'PVB Building, Justice Romualdez Street, Tacloban, Leyte'],
//   ['Shannon', 'Diaz', 'A. Pichon St., Davao City, Davao del Sur', 'A. Pichon St., Davao City, Davao del Sur'],
//   ['Jamie', 'Castro', '2/F JR Photo Lab Bldg., Quezon Avenue, Cotabato City, Maguindanao', '2/F JR Photo Lab Bldg., Quezon Avenue, Cotabato City, Maguindanao'],
//   ['Alex', 'Sanchez', 'F. Cabahug Street, Mabolo, Cebu City, Cebu', 'F. Cabahug Street, Mabolo, Cebu City, Cebu'],
//   ['Sean', 'Martinez', 'Estaka, Dipolog, Zamboanga del Norte', 'Estaka, Dipolog, Zamboanga del Norte'],
//   ['Mae', 'Tiu', 'CP Garcia Avenue corner M.H. Del Pilar Street, Tagbilaran, Bohol', 'CP Garcia Avenue corner M.H. Del Pilar Street, Tagbilaran, Bohol'],
//   ['Tina', 'Flores', 'Masangkay St. Sta Cruz, Manila', '584 McArthur Highway, Malanday, Valenzuela, Metro Manila'],
//   ['Jennifer', 'Ramos', 'Las Pinas, Metro Manila', '460 Solanda Street Intramuros 1000, Manila'],
//   ];

//   // Adding edit icon
//   for (const arr of data) {
//     arr.unshift(
//       <div align="center">
//         <Tooltip title="Edit contact information">
//           <IconButton>
//             <EditIcon/>
//           </IconButton>
//         </Tooltip>
//       </div>
//     )
//   }

//   const options = {
//     filterType: 'checkbox',
//   };

//   return (
//     <MUIDataTable
//       title={"Contact List"}
//       data={data}
//       columns={columns}
//       options={options}
//     />
//   );
}
