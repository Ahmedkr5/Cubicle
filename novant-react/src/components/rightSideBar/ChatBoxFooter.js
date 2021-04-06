import React, { useState, ReactDOM } from 'react';
import '../../App.css';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneIcon from '@material-ui/icons/MicNone';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { makeStyles } from '@material-ui/core/styles';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';



const useStyles = makeStyles((theme) => ({
    chatfooter: {

        float: 'right',
        display: 'flex ',
        flexDirection: 'row',
       
    },
    input: {
        float: 'left',
        marginRight: '7px',
        marginLeft: '5px',
        marginTop: '5px',
        width: '90%',

    },
    iconButton: {
        float: 'right',
        padding: '8px 10px 5px 5px ',
    },
    commentBody: {
        backgroundColor: '#F0F2F5',
        marginLeft: '10px',
        padding: '1px 15px',
        borderRadius: '15px',
        width: '60%',
        maxHeight: '40px',
    },

}));
export default function ChatBoxFooter() {
    const classes = useStyles();
    const [displayEmoji, setdisplayEmoji] = useState('none');
    const [text, setText] = useState("");
    const showEmoji = () => {
        if (displayEmoji === 'none') {
            setdisplayEmoji('');
        }
        else
            setdisplayEmoji('none')
    }
    function handleChange(e) {

        setText(e.target.value);
    }
    const onEmojiClick = (emojiObject) => {
        setText(text + emojiObject.native);
    };
    return (
        <>
            <div style={{ display: displayEmoji }} >
                <Picker onChange={setText} cleanOnEnter onSelect={onEmojiClick} set='facebook' style={{ position: 'fixed', zIndex: '1000',bottom:'60px',left:'55%'}} i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />

            </div>

            <div className={classes.chatfooter} >
                <div className={classes.commentBody}>
                    <InputBase
                        className={classes.input}

                        placeholder='Aa'
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleChange}
                        value={text}
                    />
                </div>
                <div>
                    <IconButton type='submit' className={classes.iconButton} aria-label='emoji' color="primary" onClick={showEmoji} >
                        <EmojiEmotionsOutlinedIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <div>
                    <IconButton type='submit' className={classes.iconButton} aria-label='emoji' color="primary">
                        <PhotoLibraryIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <div>
                    <IconButton type='submit' className={classes.iconButton} aria-label='emoji' color="secondary">
                        <MicNoneIcon style={{ fontSize: 20 }} />
                    </IconButton>


                </div>

            </div>

        </>
    )
}