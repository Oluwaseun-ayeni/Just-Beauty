import React,{useState} from "react";
import Input from "../../component/reusables/Input"
import emailIcon from '../../assets/email.svg'
import passwordIcon from '../../assets/password.svg'
import "./authentication.css"
import StepContainer from "../../component/authentication/Register/stepContainer";


const Register = () =>{
    const[userInput, setUserInput] = useState({})
    const[step, setStep] = useState(1)
    const[fieldError, setFieldError] = useState(
        { 
        firstname :{message: "", error: false},
        lastname: {message: "", error: false},
        email: {message: "", error: false},
        phone: {message: "", error: false},
        password: {message: "", error: false},
        confirm: {message: "", error: false}
    })
    
    const handleChange = (e) => {
        setUserInput({...userInput,[e.target.name]:e.target.value})
        checkIfFieldIsEmpty(e)
    }

    const handleClick = () =>{
        console.log(userInput)
    }
    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name){
            case "email":
                if(e.target.value === ""){
                    setFieldError(
                        {...fieldError,[e.target.name] : {
                                message: "Please enter a valid email",
                                error : true
                            }
                        })
                } else{
                    setFieldError(
                        {...fieldError,[e.target.name] : {
                                message: "",
                                error : false
                            }
                        })

                }

                break;
                case "password":
                if(e.target.value === ""){
                    setFieldError(
                        {...fieldError,  [e.target.name] : {
                                message: "Please enter a password",
                                error : true
                            }
                        })
                } else{     setFieldError(
                    {...fieldError,[e.target.name] : {
                            message: "",
                            error : false
                        }
                    }) 
                }

            default:
                break;    
        }
        

    }

    const checkIfItIsEmail = () => {

    }
    return(
    <div className="authentication-container">
      <div className="leftside">
         <div className="leftside-container">
            <a>
                Dont have an account?
                <span style={{
                    color: 'white',
                    marginLeft: '4px'
                }}>
                    sign up

                </span>
            </a>
            <div className="welcome-text">
                <h1>Welcome to Norbs</h1>
                <p>We are an event management platform,
                    aimed at helping you facilitte and run 
                    a smooth event
                </p>
            </div>
            {step === 1 && <StepContainer step={1} headerTitle="Let's gbe you trabaye!">
            <Input text="text" handleChange={handleChange} icon={emailIcon}  label="firstname" fieldError={fieldError}/>
            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="lastname" fieldError={fieldError}/>
            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="email" fieldError={fieldError}/>   
            </StepContainer>}

            {step === 2 && <StepContainer step={2} headerTitle="Akoi secure you!">
            <Input text="text" handleChange={handleChange} icon={emailIcon}  label="phone" fieldError={fieldError}/>
            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="password" fieldError={fieldError}/>
            <Input text="text" handleChange={handleChange} icon={passwordIcon} label="confirm" fieldError={fieldError}/>   
            </StepContainer>}


            {step === 1 &&
             <button onClick={() => setStep(2)} style={{width: '65%'}} className="authentication-button" >
                Next Step</button>}
            {step === 2 && 
             <div style={{ display: "flex", justifyContent: "space-between",width: "65%" }}>
            <button onClick={() => setStep(1)} style={{width: '40%'}} className="authentication-button-alternate" >
                Go back</button>
            {<button style={{width: '40%'}} className="authentication-button" onClick={handleClick}>
                Register</button>}
            
            </div>}
            <div className="social-media">

                <a>
                    <div className="social-media-icon"> </div>
                </a>

            </div>
          </div>
        </div>
        <div className="rightside">

        </div>
        <div>

        </div>
    </div>

    )
}

export default Register