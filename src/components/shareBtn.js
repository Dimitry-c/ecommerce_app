import React, { useState, useEffect } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { Share, Close  } from '@material-ui/icons';
import facebook_icon from '../assets/share_btn/facebook_icon.svg';
import gmail_icon from '../assets/share_btn/gmail_icon.svg';
import telegram_icon from '../assets/share_btn/telegram_icon.svg';
import whatsapp_icon from '../assets/share_btn/whatsapp_icon.svg';
import sms_icon from '../assets/share_btn/sms_icon.svg';




function ShareBtn() {

    const [is_open, set_is_open] = useState(false);

    const actions = [
        { icon: <img src={facebook_icon} />, name: 'Facebook' },
        { icon: <img src={whatsapp_icon} />, name: 'Whatsapp' },
        { icon: <img src={gmail_icon} />, name: 'Gmail' },
        { icon: <img src={telegram_icon} />, name: 'Telegram' },
        { icon: <img src={sms_icon}/>, name: 'Messages' }
    ];

    const direction = {
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right'
    };


    useEffect(() => {

    }, [is_open]);

    return (
        <div className="share-btn">
            <SpeedDial
                ariaLabel="speed-dial openIcon"
                className={'share-button'}
                icon={<Share/>}
                onBlur={() => set_is_open(false)}
                onClick={() => set_is_open(!is_open)}
                onClose={() => set_is_open(false)}
                onFocus={() => set_is_open(true)}
                onMouseEnter={() => set_is_open(true)}
                onMouseLeave={() => set_is_open(false)}
                open={is_open}
                direction={direction.up}
            >
                {actions.map(action => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    // onClick={this.handleClick}
                    />))
                }
            </SpeedDial>
        </div>
    )

}

export default ShareBtn;