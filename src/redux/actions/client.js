import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"

export function actionAddClient(object) {
    return async function(dispatch, getState) {
        console.log('dispatching now')
        dispatch({
            type: 'ADD_CLIENT',
            object
        })
        await addDoc(collection(db, 'New Client Forms'), object)
        
    }

} 

