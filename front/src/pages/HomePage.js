import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
        <div>
            <h1>Pixel Wardrobe</h1>
            <p>Fashion in the Metaverse</p>
        </div>
        <div className='buttons-homepage'>
                <button>
                    <Link to='/' className='link'>Log in</Link>
                </button>
                <button>
                    <Link to='/' className='link'>Sign up</Link>
                </button>
                <button>
                    <Link to='/' className='link'>Demo</Link>
                </button>            
        </div>
    </div>
  )
}

export default HomePage