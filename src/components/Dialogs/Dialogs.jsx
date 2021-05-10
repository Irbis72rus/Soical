import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Massage from './Message/Massage';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Massage massage={m.message} />);
    let newMessageBody = state.newMessageBody;


    // let newMassageElement = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // debugger;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU' />
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter yor message'
                            // ref={newMassageElement}
                            >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add massage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;