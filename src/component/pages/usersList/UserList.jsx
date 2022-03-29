import React, { useState } from "react";
import './UserList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { userRows } from '../../../dummyData';
import { Link } from "react-router-dom";


const UserList = () => {
    const [data, setdata] = useState(userRows);

    const handleDelete = (id) => {
        setdata(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User name', width: 200, renderCell: (params) => {
                return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={params.row.avatar} alt="" style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", marginRight: "10px" }} />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Last name', width: 200 },
        {
            field: 'statuss',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users" + params.row.id}>
                            <button style={{
                                border: "none", borderRadius: "10px",
                                padding: "5px 10px", backgroundColor: "#3bb077",
                                color: "white", cursor: "pointer", marginRight: "15px"
                            }}>Edit</button>
                        </Link>
                        <DeleteOutlinedIcon
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>

                )
            }
        }

    ];

    return (
        <div className="userlist">
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[4]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default UserList;