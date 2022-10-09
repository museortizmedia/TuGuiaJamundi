import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from './config';
import { register } from './AuthSlice';

export const registerAuth = (email, password ) => {
    console.log('Estamos registrando a: '+email+'...')
    return async ( dispatch ) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if(response) {
            await updateProfile( auth.authState, {
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