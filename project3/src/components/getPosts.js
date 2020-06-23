import { postRef } from "../firebase"

export default () => {
    console.log("function for getting posts...");
    postRef.once('value', snap => {
        return snap.val();
    });
};