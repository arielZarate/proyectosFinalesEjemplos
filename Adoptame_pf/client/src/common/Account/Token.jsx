
import CryptoJS from 'crypto-js';

export const storeToken = async (isAuthenticated, getAccessTokenSilently) => {
    if (isAuthenticated) {
        try {
            const token = await getAccessTokenSilently();
           ///console.log('origin token :', token)
            const encryptedToken = CryptoJS.AES.encrypt(token, 'my-secret-key').toString();
            localStorage.setItem('access_token', encryptedToken);
           // console.log('Token almacenado con exito');
        } catch (error) {
            console.error(error);
        }
    }
};


   export const getToken = () => {
        const encryptedToken = localStorage.getItem('access_token');
        if (encryptedToken) {
            const bytes = CryptoJS.AES.decrypt(encryptedToken, 'my-secret-key');
            const token = bytes.toString(CryptoJS.enc.Utf8);
           // console.log('token recuperado',token)
          //  console.log('Token recuperado con éxito y enviando el al back por cabecera');
            return token;
        } else {
            console.log('Token no encontrado');
            return null;
        }
    };

    


