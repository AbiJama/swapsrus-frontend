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

    




}