import { postRef } from "../firebase"

export default (uid, content) => {
    console.log("function for making a post starts...");
    try{
        postRef.push({
            createdBy: uid,
            content
    });
    return true;
    } catch(err) {
        console.log(err);
        return err;
    }
};