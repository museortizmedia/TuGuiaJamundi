import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from './config';

export const registerAuth = (email, password ) => {
    return async ( dispatch ) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if(response) {
            console.log(response)
            await updateProfile( auth.currrentUser, {
                displayName: 'Diego',
                photoURL: ''
            })

            const {email} = response.user
            dispatch( register({email}))
        } else {
            throw new Error('login failed');
        }
    }
}