import React from 'react';
import LoginComp from '../components/LoginComp';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {
        actions: { login },
        store: { loggedIn }
    } = useContext(Context);

    const handleClickEvent = async () => {
        await login(email, pass);
        setPass('')
    };

    useEffect(() => {
        if (loggedIn) history.push('/proposals');
    }, [loggedIn]);

    // console.log(email, pass, loggedIn);

    return <LoginComp />;
};

export default Login;
