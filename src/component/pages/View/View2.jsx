import React,{useState,useEffect } from "react";
import './View.scss';
import {TableHead, TableRow, TableCell,Table,TableBody,
    TableContainer,Paper, } from '@material-ui/core';
import Axios from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const View2 = () => {
    const [data,setData]=useState([]);
    const [status, setStatus] = useState();
    const [isError , setIsError] = useState();
    const [isLoading , setIsLoading]= useState();
    useEffect(()=>{
        setIsLoading(true);
        setIsError(true);
        async function productlist() {
            try{
                const mydata = await Axios.get("http://localhost:3000/items")
                //console.log(mydata.data);
                setData(mydata.data)
            }catch(err){
               console.log(err)
            }};
        productlist();
        setIsLoading(false);
        setIsError(false);
    },[]);

    async function postDelete(id ,e){
        e.preventDefault();
        try{
          await Axios.delete(`http://localhost:3000/items/${id}`) 
          setStatus(true);
        }catch(err){
            console.log(err);
        }
    };
    
    if(status){
        return <View2/>
    }
    
    let renderTableRows = data.map(item => {
            return (
                <TableRow key={item.id}
                style={{backgroundColor:'lightcyan', color: 'red'}}>
                  <TableCell >{item.firstname}</TableCell>
                  <TableCell >{item.lastname}</TableCell>
                  <TableCell >{item.email}</TableCell>
                  <TableCell >{item.phone}</TableCell>
                  <TableCell >{item.gender}</TableCell>
                  <TableCell >{item.city}</TableCell>
                  <TableCell >
                      <DeleteOutlineIcon style={{color:"red",marginRight:"10px",cursor:"pointer"}} onClick={(e)=> postDelete(item.id,e)}/> 
                  </TableCell>
                </TableRow>
            )
        });
    
    if (isError) {
        return <>...Api Fetch Error</>
    }else if (isLoading){
        return <>...Loading</>
    } else {
        return  (
            <div className="head">
            <div className='list'>
            <TableContainer component={Paper}>
            <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow style={{backgroundColor:'lightcoral'}}>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                         </TableHead>
                <TableBody>
                      {renderTableRows}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
            </div>
        )
    }
}

export default View2;