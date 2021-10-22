import {React, useEffect, useState} from 'react'
import { useCookies } from 'react-cookie';
import '../SASS/EditProfile.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function EditProfile(props) {
    const [infoUser, setInfoUser] = useState([]);
    const [selectedFile, setSelectedFile] = useState([]);
    const [cookies] = useCookies();
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/user/info?userID=${cookies.userID}`, requestOptions)
        .then(response => response.json())
        .then(result => setInfoUser(result))
        .catch(error => console.log('error', error));
        
    },[])

    const fileUploadHandle = event => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
        console.log(selectedFile)
    }
    return (
        <div className="form-edit">
            <div className="form-left">
                <div className="title-form-edit">
                    <h2>User Profile</h2>
                </div>
                <div className="wrapper-feature">
                    <PersonOutlineIcon className="icon-user" fontSize="large" /><a href="#" className="user-info-feature">User Info</a>
                </div>
            </div>
            <div className="form-right">
                <div className="summary-info">
                    <img className="image-user" src={infoUser.avatar} alt="" />
                    <label class="custom-file-upload">
                        <input type="file" className="input-image" onChange={()=>fileUploadHandle}/>
                    </label>
                    <div className="info-user">
                        <p className="full-name">Sara Tancredi</p>
                        <p className="live-in">New York, USA</p>
                    </div>
                </div>
                <div className="wrapper-info">
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">First Name</label>
                        <input className="input-info" type="text" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Last Name</label>
                        <input className="input-info" type="text" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Email</label>
                        <input className="input-info" type="text" value={infoUser.email} disabled="true" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Phone Number</label>
                        <input className="input-info" type="text" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Address</label>
                        <input className="input-info" type="text"  />
                    </div>
                </div>
                <button className="save-changes">Save Changes</button>
            </div>
        </div>
    )
}

export default EditProfile
