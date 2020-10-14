import React from 'react'
import db from "../fireStoreData";

export default function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [paswordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  
    const handleLogin = () => {
        db
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    
    }

    return (
        <div>
            
        </div>
    )
}
