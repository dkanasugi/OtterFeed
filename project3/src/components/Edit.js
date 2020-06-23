//edit function

import {userRef } from "../firebase";

export default ({uid, email, firstName, lastName }) => {
    return userRef
        .child(uid)
        .set({
            email,
            firstName,
            lastName
        })
        .then(data=>{
            console.log(data);
            return true;
        })
        .catch((err)=>{
            console.log(err);
            return false;
        });
};