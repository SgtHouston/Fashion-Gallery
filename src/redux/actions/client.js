import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"

export function actionAddClient(object) {
    return async function(dispatch, getState) {
        dispatch({
            type: 'ADD_CLIENT',
            object
        })
        await addDoc(collection(db, 'forms'), object)
        
    }

} 

