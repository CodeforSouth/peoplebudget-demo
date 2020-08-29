import React, { useContext, useEffect /*, useState*/ } from 'react';
import LoginComp from '../components/LoginComp';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/store';

const Login = () => {
    const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    const {
        //actions: { login },
        store: { loggedIn }
    } = useContext(Context);

    // const handleClickEvent = async () => {
    //     await login(email, pass);
    //     setPass('')
    // };

    useEffect(() => {
        if (loggedIn) history.push('/proposals');
    }, [loggedIn, history]);

    return <LoginComp />;
};

export default Login;
