import React from 'react';
import {Link} from 'react-router-dom';
import logo from '/usr/src/app/src/wardrobe.jpg';
import './Home.css'


const HomePage = () => {
  return (
    <div className="container">
        <div>
            <h1>Pixel Wardrobe</h1>
            <h2>Fashion in the Metaverse</h2>
            <img src={logo} alt="wardrobe"></img>
        </div>
        <div className="images">
            <img src="http://www.jadams.com.tw/uploads/root/3D/CI_CLO.svg" alt="clo"></img>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt="blender"></img> */}
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Adobe_Logo_Standard.svg" alt="adobe"></img> */}
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg" alt="unreal"></img> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="unity"></img>

        </div>
        <div className='buttons-homepage'>
                    <Link to='/' className='link1'>Log in</Link>
                    <Link to='/' className='link2'>Sign up</Link>
                    <Link to='/' className='link3'>Demo</Link>
        </div>
    </div>
  )
}

export default HomePage