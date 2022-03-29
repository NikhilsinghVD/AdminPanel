import React from 'react';
import './Topbar.scss'
//import { NotificationsNone } from '@material-ui/icons';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';



const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topleft'>
                    <span className='logo'>Lamaadmin</span>
                </div>
                <div className='topright'>
                    <div className='topbarIconContainer'>
                        <NotificationsTwoToneIcon />
                        <span className='topIconBadge'>2</span>
                        <LanguageTwoToneIcon />
                        <span className='topIconBadge'>2</span>
                        <SettingsApplicationsTwoToneIcon />
                        <div>
                            <img src={"https://images.pexels.com/photos/5249319/pexels-photo-5249319.jpeg?cs=srgb&dl=pexels-maryia-plashchynskaya-5249319.jpg&fm=jpg"} alt="" className='topAvatar' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;