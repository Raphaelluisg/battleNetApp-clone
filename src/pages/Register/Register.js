import './Register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    const [battletag, setBattletag] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const user ={
            name: name,
            email: email,
            battletag: battletag,
            password: password,
            passwordConfirmation: passwordConfirmation
        }

        axios.post('user/register', user)
        .then(response => console.log(response))
    }


    return (
        <div className="register">
            <div className="register-container">
                <h2>Create a Battle.net account</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    < input type="text" required onChange={event => setName(event.target.value)}/>

                    <label>Battletag</label>
                    < input type="text" required onChange={event => setBattletag(event.target.value)}/>

                    <label>Email</label>
                    < input type="email" required onChange={event => setEmail(event.target.value)}/>

                    <label>Password</label>
                    < input type="password" required onChange={event => setPassword(event.target.value)}/>

                    <label>Confirm Password</label>
                    < input type="password" required onChange={event => setPasswordConfirmation(event.target.value)}/>

                    <div className="terms">
                        <input type="checkbox" placeholder="wed" required />
                        <label>O e-mail da conta receberá ofertas especiais, notícias e mais da Blizzard Entertainment Clone.</label>
                    </div>
                    <div className="terms">
                        <input type="checkbox" placeholder="wed" required />
                        <label>Eu li e aceito o/os/a <a href="https://www.blizzard.com/legal/bbee59bd-7386-4098-b584-d79a2d439fdb">POLÍTICA DE PRIVACIDADE DA BLIZZARD ENTERTAINMENT</a></label>
                    </div>
                    <div className="btn-confirm">
                        <label>Ao clicar em "Continuar", eu concordo com <a href="https://www.blizzard.com/legal/48fcaa57-2657-43b3-9c4b-b6d986a991b9">Contrato De Licença De Usuário Final Da Blizzard.</a></label>
                        <input type="submit" value="confirm" />
                    </div>
                </form>
            </div>
        </div>
    )
};