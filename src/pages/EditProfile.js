import {React, useEffect, useState} from 'react'
import { useCookies } from 'react-cookie';
import '../SASS/EditProfile.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function EditProfile(props) {
    const [infoUser, setInfoUser] = useState([]);
    const [image,setImage]=useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [ url, setUrl ] = useState("");
    const [savechanges, setSaveChanges] = useState(false);
    const [loading, setLoading] = useState(true)

    const [cookies] = useCookies();
    
    useEffect(()=>{
        var formdata = new FormData();
        formdata.append("file", image);
        formdata.append("upload_preset", "cmb31rnj");

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://api.cloudinary.com/v1_1/ddjttjie8/image/upload", requestOptions)
        .then(response => response.json())
        .then(result => setUrl(result.url))
        .catch(error => console.log('error', error));
    },[image])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };
        fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/user/info?userID=${cookies.userID}`, requestOptions)
        .then(response => response.json())
        .then(result => setInfoUser(result), setLoading(false))
        .catch(error => console.log('error', error));
        
    },[savechanges]);

    const successUpdate = document.getElementById("success");

    function handleSaveChanges(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("userID", cookies.userID);
        urlencoded.append("firstName", firstName);
        urlencoded.append("lastName", lastName);
        urlencoded.append("address", address);
        urlencoded.append("phoneNumber", phoneNumber);
        urlencoded.append("avatar", url);


        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch('https://do-an-nganh-nodejs.herokuapp.com/api/user/info', requestOptions)
        .then(response => response.json())
        .then(result => {setSaveChanges(true); setTimeout(()=>successUpdate.show(),1500) })
        .catch(error => console.log('error', error));
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
                    <img className="image-user" src={infoUser.avatar}/>
                    <label className="custom-file-upload">
                        <input type="file" className="input-image" onChange={(e)=>setImage(e.target.files[0])} />
                    </label>
                    <div className="info-user">
                        <p className="full-name">{infoUser.email}</p>
                        <p className="live-in">{infoUser.address}</p>
                    </div>
                </div>
                <form className="wrapper-info" onSubmit={(e) => handleSaveChanges(e)}>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">First Name</label>
                        <input className="input-info" type="text" value={infoUser.firstName === "" ? firstName : infoUser.firstName} onChange={e=>setFirstName(e.target.value)} />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Last Name</label>
                        <input className="input-info" type="text" value={infoUser.lastName === ""? lastName : infoUser.lastName} onChange={e=>setLastName(e.target.value)}/>
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Email</label>
                        <input className="input-info" type="text" value={infoUser.email} disabled={true} />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Phone Number</label>
                        <input className="input-info" type="text" value={infoUser.phoneNumber === ""? phoneNumber : infoUser.phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Address</label>
                        <input className="input-info" type="text" value={infoUser.address === ""? address : infoUser.address} onChange={e=>{address===null ? setAddress(infoUser.address) : setAddress(e.target.value)}}  />
                    </div>
                    <dialog id="success">Update Successful! </dialog>
                    <button type="submit" className="save-changes" >Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
