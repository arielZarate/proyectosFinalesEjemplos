// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

const {VITE_API_KEY,VITE_AUTH_DOMAIN,VITE_PROYECT_ID,VITE_STORAGE_BUCKET,VITE_MESSAGING_SENDER,VITE_APP_ID}=import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,//AIzaSyC9tLOS0X9BA3NIA4hwJwqIf0bxdqw_Lik
  authDomain: VITE_AUTH_DOMAIN,//adoptame-b72a3.firebaseapp.com
  projectId:VITE_PROYECT_ID,//"adoptame-b72a3",
  storageBucket:VITE_STORAGE_BUCKET, //"adoptame-b72a3.appspot.com",
  messagingSenderId: VITE_MESSAGING_SENDER,//"500990637633",
  appId:VITE_APP_ID //"1:500990637633:web:2d341e033f3ee4061a38c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadImage = async (file) => {
    console.log(file);
    const storageRef = ref(storage, `${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    //alert("ya esta cargado");
    return await getDownloadURL(storageRef);
};