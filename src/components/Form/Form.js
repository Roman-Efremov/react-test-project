import React, { useState } from 'react';
import { ChangeUserStatus } from '../ChangeUserStatus/ChangeUserStatus';
import { CityList } from '../CityList/CityList';
import './Form.css';

function Form({ cities }) {
    const [state, setState] = useState({
        status: '',
        city: '',
        password: '',
        passwordConfirm: '',
        email: '',
        agreement: false
    });
    
    const [error, setError] = useState({
        passwordError: '',
        passwordConfirmError: '',
        emailError: ''
    });

    const [time, setTime] = useState('');

    const updateState = (e) => {
        const target = e.target;

        setState({
            ...state,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        });
    };

    const updateError = (validationRules) => {
        let passwordErrorText = '';
        let passwordConfirmErrorText = '';
        let emailErrorText = '';

        if (!validationRules.password) {
            passwordErrorText = state.password.length == 0 ? 'Укажите пароль' : 'Используйте не менее 5 символов';
        }
        if (!validationRules.passwordConfirm) {
            passwordConfirmErrorText = state.passwordConfirm.length == 0 ? 'Укажите пароль' : 'Пароли не совпадают';
        }
        if (!validationRules.email) {
            emailErrorText = state.email.length == 0 ? 'Укажите E-mail' : 'Неверный E-mail';
        }

        setError({
            passwordError: passwordErrorText,
            passwordConfirmError: passwordConfirmErrorText,
            emailError: emailErrorText,
        });
    };

    const updateTime = () => {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let today = new Date();
        let date = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        setTime('последнее изменение ' + date + ' в ' + time);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^\S+@\S+$/;
        const validationRules = {
            city: state.city,
            password: state.password.length >= 5,
            passwordConfirm: state.password.length >= 5 && state.passwordConfirm == state.password,
            email: emailPattern.test(state.email),
        };

        updateError(validationRules);

        const isValidForm = Object
            .values(validationRules)
            .every(key => key);

        if (isValidForm) {
            updateTime();
            console.log(JSON.stringify(state));
        }
    };

    return (
        <form className='status-form' onSubmit={handleSubmit}>
            <div className='status-form__header'>
                <h1>Здравствуйте, <b>{'Человек №3596941'}</b></h1>
                <ChangeUserStatus
                    maxLength={200}
                    name='status'
                    status={state.status}
                    update={updateState} />
            </div>

            <div className='status-form__status-box'>
                <p>{state.status}</p>
            </div>

            <div className='status-form__field'>
                <p className='status-form__input-text'>Ваш город</p>
                <CityList
                    list={cities}
                    name='city'
                    onChange={updateState} />
            </div>

            <hr></hr>
            <div className='status-form__field'>
                <p className='status-form__input-text'>Пароль</p>
                <div className='status-form__input-container'>
                    <input
                        type='password'
                        name='password'
                        value={state.password}
                        onChange={updateState}
                        style={{
                            border: error.passwordError ? '1px solid #FF0000' : '1px solid #999999'
                        }} />
                    {error.passwordError && (<p className='status-form__error'>{error.passwordError}</p>)}
                </div>
                <p className='status-form__tip'>Ваш новый пароль должен содержать не менее 5 символов.</p>
            </div>

            <div className='status-form__field'>
                <p className='status-form__input-text'>Пароль еще раз</p>
                <div className='status-form__input-container'>
                    <input
                        type='password'
                        name='passwordConfirm'
                        value={state.passwordConfirm}
                        onChange={updateState}
                        style={{
                            border: error.passwordConfirmError ? '1px solid #FF0000' : '1px solid #999999'
                        }} />
                    {error.passwordConfirmError && (<p className='status-form__error'>{error.passwordConfirmError}</p>)}
                </div>
                <p className='status-form__tip'>Повторите пароль, пожалуйста, это обезопасит вас с нами <br></br>на случай ошибки.</p>
            </div>

            <hr></hr>
            <div className='status-form__field'>
                <p className='status-form__input-text'>Электронная почта</p>
                <div className='status-form__input-container'>
                    <input
                        type='text'
                        name='email'
                        value={state.email}
                        onChange={updateState}
                        style={{
                            border: error.emailError ? '1px solid #FF0000' : '1px solid #999999'
                        }} />
                    {error.emailError && (<p className='status-form__error'>{error.emailError}</p>)}
                </div>
                <p className='status-form__tip'>Можно изменить адрес, указанный при регистрации.</p>
            </div>

            <div className='status-form__field'>
                <p className='status-form__input-text'>Я согласен</p>
                <input
                    type='checkbox'
                    name='agreement'
                    value={state.agreement}
                    onChange={updateState} />
                <label className='status-form__label'>принимать актуальную информацию на емейл</label>
            </div>

            <div className='status-form__button-container'>
                <button className='status-form__button'>Изменить</button>
                <p className='status-form__tip'>{time}</p>
            </div>
        </form>
    );
}

export { Form };