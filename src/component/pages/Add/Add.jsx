import React,{useState} from "react";
import './Add.scss';
import Axios from 'axios';

const Add = () => {
    const [data, setData] =useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        gender:'',
        city:'',
    });
    const [status, setStatus] = useState();
    function onTextFieldChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    };
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await Axios.post('http://localhost:3000/items',data)
        }catch(err){
            console.log(err);
        };
        setStatus(true)
    }

    if(status){
        return <Add/>
    }
    return (
        <div className="newuser">
            <h1>New User</h1>
            <form className="newuserForm">
                <div className="newUserItem">
                    <label>FirstName</label>
                    <input type="text" placeholder="Enter FirstName" name='firstname'
            onChange={(e)=>onTextFieldChange(e)}/>
                </div>
                <div className="newUserItem">
                    <label>LastName</label>
                    <input type="text" placeholder="Enter LastName" name='lastname'
            onChange={(e)=>onTextFieldChange(e)}/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" name='email'
            onChange={(e)=>onTextFieldChange(e)}/>
                </div>
                <div className="newUserItem">
                    <label>phone</label>
                    <input type="number" placeholder="Enter Mobile No." name='phone'
            onChange={(e)=>onTextFieldChange(e)}/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" onChange={(e)=>onTextFieldChange(e)} />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={(e)=>onTextFieldChange(e)}/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" onChange={(e)=>onTextFieldChange(e)}/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>City</label>
                    <select className="newUserSelect" name="city" id="active" onChange={(e)=>onTextFieldChange(e)}>
                        <option value="nagpur">Nagpur</option>
                        <option value="pune">Pune</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="aurangabad">Aurangabad</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <button className="newUserButton" onClick={(e)=> handleSubmit(e)}>Create</button>
                </div>
            </form>
        </div>
    );
}

export default Add;