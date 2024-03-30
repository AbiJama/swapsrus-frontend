import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Alert from "./Alert";

const CreateAccount = () => {
    const initialState = {
        fields: {
            email; "",
            password: "",
        },
        alert: {
            message: "",
            isSuccess: false,
        },
    };

    const [fields, setfields] = useState(initalState.fields);
    const [alert, setAlert] = useState(initialState.alert);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        setAlert({ message: "", isSuccess: false });
        createUserWithEmailAndPassword(auth, fields.email, fields.password)
          .then((userCredential) => {
        
            const { user } = userCredential;
            console.log("Account Created");
            setAlert({
              message: "Your account has been created!",
              isSuccess: true,
            });
           
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
            setAlert({ message: errorMessage, isSuccess: false });
            setFields(initialState.fields);
          });
      };

    const handleFieldChange = (event) => {
        setFields((prev) => {
          return {
            ...prev,
            [event.target.name]: event.target.value,
          };
        });
      };
    


}