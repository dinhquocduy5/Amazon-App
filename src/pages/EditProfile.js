import {React, useEffect, useState} from 'react'
import { useCookies } from 'react-cookie';
import '../SASS/EditProfile.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function EditProfile(props) {
    const [infoUser, setInfoUser] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [ url, setUrl ] = useState("");

    const [cookies] = useCookies();
    
    function uploadImage(e) {
        e.preventDefualt();
        console.info("TOI DAY ROI NE")
        const data = new FormData()
        data.append("upload_preset", "avatar")
        data.append("cloud_name","ddjttjie8")

        var requestOptions = {
            method:"post",
            body: data,
        };
        fetch("https://api.cloudinary.com/v1_1/ddjttjie8/image/upload",requestOptions)
            .then(resp => resp.json())
            .then(data => {
            setUrl(data.url)
        })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };
        fetch(`https://do-an-nganh-nodejs.herokuapp.com/api/user/info?userID=${cookies.userID}`, requestOptions)
        .then(response => response.json())
        .then(result => setInfoUser(result))
        .catch(error => console.log('error', error));
        
    },[])

    // const handleSaveChanges = () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    //     var urlencoded = new URLSearchParams();
    //     urlencoded.append("userID", cookies.userID);
    //     urlencoded.append("firstName", firstName);
    //     urlencoded.append("lastName", lastName);
    //     urlencoded.append("address", address);
    //     urlencoded.append("phoneNumber", phoneNumber);
    //     urlencoded.append("avatar", selectedFile);


    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: urlencoded,
    //     redirect: 'follow'
    //     };

    //     fetch('https://do-an-nganh-nodejs.herokuapp.com/api/user/info', requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // }
        

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
                    
                    <div className="info-user">
                        <p className="full-name">Sara Tancredi</p>
                        <p className="live-in">New York, USA</p>
                    </div>
                </div>
                <form className="wrapper-info" onSubmit={(e) => uploadImage(e)}>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">First Name</label>
                        <input className="input-info" type="text" value={infoUser.firstName === ""? "" : infoUser.firstName} onChange={e=>setFirstName(e.target.value)}/>
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Last Name</label>
                        <input className="input-info" type="text" value={infoUser.lastName === ""? "" : infoUser.lastName} onChange={e=>setLastName(e.target.value)}/>
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Email</label>
                        <input className="input-info" type="text" value={infoUser.email} disabled={true} />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Phone Number</label>
                        <input className="input-info" type="text" value={infoUser.phoneNumber === ""? "" : infoUser.phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Address</label>
                        <input className="input-info" type="text" value={infoUser.address === ""? "" : infoUser.address} onChange={e=>setAddress(e.target.value)}  />
                    </div>
                    <button type="submit" className="save-changes">Save Changes</button>
                </form>
                
            </div>
        </div>
    )
}

export default EditProfile
