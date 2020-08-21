import React, { /* useState,*/ useContext, useEffect } from 'react';
import { Context } from '../../store/store';
import { useHistory, Link } from 'react-router-dom';
import Input from '../Inputv3/index';
import Navbar from '../Navbar/index';
// import Select from '../Dropdown/index';
// import axios from 'axios';
// import { Form, FormGroup, Label } from 'reactstrap';
// import { Redirect } from 'react-router';
import {
    nav,
    imageContainer,
    container,
    wrapper,
    compContainer,
    welcome,
    hr,
    or,
    linkedinSignIn,
    lineContainer,
    inputContainer,
    input2,
    input3,
    signup,
    linkText
} from './index.module.css';

const RegistrationComp = () => {
    const history = useHistory();
    // const [fname, setFname] = useState('');
    // const [lname, setLname] = useState('');
    // const [address1, setAddress1] = useState('');
    // const [address2, setAddress2] = useState('');
    // const [age, setAge] = useState('');
    // const [budgetitem, setBudgetitem] = useState('');
    // const [income, setIncome] = useState('');
    // const [occupation, setOccupation] = useState('');
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    const {
        // actions: { register },
        store: { loggedIn }
    } = useContext(Context);

    // const handleClickEvent = async () => {
    //     await register(fname, lname, address1, address2, age, budgetitem, email, pass,
    //         income, occupation);
    //     setFname('firstName');
    //     setLname('lastName');
    //     setAddress1('address1');
    //     setAddress2('address2');
    //     setAge('age');
    //     setBudgetitem('budgetItem');
    //     setEmail('email');
    //     setPass('password');
    //     setIncome('income');
    //     setOccupation('occupation');
    // };

    const flag = true;

    useEffect(() => {
        if (loggedIn) history.push('/proposals');
    }, [loggedIn, history]);

    return (
        <div className={`${container}`}>
            <div className={`${nav}`}>
                <Navbar
                    options={[
                        { text: 'home', link: '/', auth: 0 },
                        { text: 'login', link: '/login', auth: 0 }
                    ]}
                />
            </div>
            <div className={`${wrapper}`} border-style shadow>
                <div className={`${imageContainer}`}></div>
                <div className={`${compContainer}`}>
                    <div className={`${welcome}`}>
                        <h1>welcome!</h1>
                    </div>
                    {
                        !flag &&
                    (
                        <>
                    <div className={`${linkedinSignIn}`}>
                        <Link to="/register">
                            <button className="button">Sign up with LinkedIn</button>
                        </Link>
                    </div>
                    <div className={`${lineContainer}`}>
                        <hr className={`${hr}`}></hr>
                        <div className={`${or}`}>OR</div>
                        <hr className={`${hr}`}></hr>
                    </div>
                    </>
                    )
                    }
                    <div className={`${inputContainer}`}>
                        <Input
                            name="firstName"
                            className="form-control"
                            type="firstName"
                            placeholder="First Name"
                        />
                        <Input
                            name="lastName"
                            className="form-control"
                            type="lastName"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className={`${input2}`}>
                        <Input
                            name="email"
                            className="form-control"
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                        />
                        <Input
                            name="budgetItem"
                            className="form-control"
                            type="budgetItem"
                            placeholder="Budget Item"
                        />
                        <Input
                            name="address1"
                            className="form-control"
                            type="address1"
                            placeholder="Address"
                        />
                        <div className={`${input3}`}>
                            <Input
                                name="address2"
                                className="form-control"
                                type="address2"
                                placeholder="Sec. Address"
                            />
                            <Input
                                name="age"
                                className="form-control"
                                type="age"
                                placeholder="Age"
                            />
                            <Input
                                name="income"
                                className="form-control"
                                type="income"
                                placeholder="Annual Income*"
                            />
                        </div>
                        <Input
                            name="occupation"
                            className="form-control"
                            type="occupation"
                            placeholder="Occupation*"
                        />
                        <div className={`${signup}`}>
                            <Link to="/register">
                                <button className="button">Sign Up</button>
                            </Link>
                            <Link className={`${linkText}`} to="/login">
                                Already a member?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComp;
