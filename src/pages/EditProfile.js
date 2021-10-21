import React from 'react'
import '../SASS/EditProfile.scss'

function EditProfile() {
    return (
        <div className="form-edit">
            <div className="form-left">
                <div className="title-form-edit">
                    <h3>User Profile</h3>
                </div>
                <a href="#" className="user-info-feature">User Info</a>
            </div>
            <div className="form-right">
                <div className="summary-info">
                    <img className="image-user" src="https://upload.wikimedia.org/wikipedia/en/4/4f/SaraTancredi.jpg" alt=""></img>
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
                        <input className="input-info" type="text" value="dinhquocduy5@gmail.com" disabled="true" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Phone Number</label>
                        <input className="input-info" type="text" value="0937394795" disabled="true" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Location</label>
                        <input className="input-info" type="text" value="Houston, Texas" disabled="true" />
                    </div>
                    <div className="ingredient-info">
                        <label className="title-of-ingredient">Postal Code</label>
                        <input className="input-info" type="text" value="80000" disabled="true" />
                    </div>
                </div>
                <button className="save-changes">Save Changes</button>
            </div>
        </div>
    )
}

export default EditProfile
