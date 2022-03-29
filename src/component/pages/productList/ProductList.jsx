import React, { useState } from "react";
import './ProductList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { productRows } from '../../../dummyData';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data, setdata] = useState(productRows);

    const handleDelete = (id) => {
        setdata(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200, renderCell: (params) => {
                return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={params.row.img} alt="" style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", marginRight: "10px" }} />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'estock', headerName: 'Stock', width: 200 },
        {
            field: 'statuss',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/products" + params.row.id}>
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
        <div className="productList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[4]}
                checkboxSelection
            />
        </div>
    );
}

export default ProductList;