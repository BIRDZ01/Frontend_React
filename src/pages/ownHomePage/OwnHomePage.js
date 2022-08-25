import React, {useState} from 'react';
import Post from "../../components/post/Post"
import DailyCheckIn from "../../components/dailyCheckIn/DailyCheckIn"
import "./OwnHomePage.css"

const OwnHomePage = (props) => {
const [profilePic,setProfilePic] = useState()
return(
    <div>
    <button onClick={props.onClick} className="logout">log out</button>
<img className="profile-pic" url={profilePic} alt="profile pic"></img>
<DailyCheckIn />
<Post />
<Post />
<Post />
<Post />

</div>
)
}

export default OwnHomePage