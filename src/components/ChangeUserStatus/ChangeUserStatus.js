import React, { useState } from 'react';
import './ChangeUserStatus.css';

function ChangeUserStatus({ maxLength, name, status, update }) {
    const [isOpen, setIsOpen] = useState(false);
    const [userStatus, setUserStatus] = useState(status);

    const openTextarea = () => {
        setIsOpen(true);
        setUserStatus(status);
    }

    const closeTextarea = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        update({ target: { name: name, value: userStatus } });
        closeTextarea();
    }

    return (
        <div className='user-status'>
            <a href='#changestatus'
                className='user-status__open'
                onClick={openTextarea}>
                Сменить статус
            </a>

            {isOpen &&
                <div className='user-status__container'>
                    <div className='user-status__textarea-container'>
                        <p className='user-status__text'>Статус</p>
                        <textarea
                            className='user-status__textarea'
                            maxLength={maxLength}
                            name={name}
                            value={userStatus}
                            onChange={(e) => setUserStatus(e.target.value)} />
                        <div className='user-status__buttons-container'>
                            <button className='user-status__button-save' onClick={handleSubmit}>Сохранить</button>
                            <button className='user-status__button-cancel' onClick={closeTextarea}>Отмена</button>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export { ChangeUserStatus };