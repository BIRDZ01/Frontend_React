import React,{ useState } from 'react';
import "./profilePic.css"

const ProfilePic = () =>{

  
  
  const defaultPics = [
    "https://nas-national-prod.s3.amazonaws.com/styles/wysiwyg_slide/s3/rhonda-coe.jpg?itok=FObuUzw5",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg",
    "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&w=400",
  ]
  
  const randomDefaultPicNum = defaultPics[Math.floor(Math.random() * defaultPics.length)]
  const [profilePic, setProfilePic] = useState("")
const hasPic = () =>{
  if(profilePic == "") {
    setProfilePic(randomDefaultPicNum)
    
  }
}
  

      return (
        <img className="profilePic" onLoad={hasPic()} src={profilePic} alt="Profile Picture"></img>
      )
  }
  export default ProfilePic