

export function client (state = {
    Age: '',
    FName: '',
    LName: '',
    Consultation: '',
    Size: 99, 
    EMail: '',
    Existingnew: '',
    Fitting: '',
    Phone: '',
    Shipping: '',
    Time: new Date(),
    Purpose: {
        Birthday: false,
        WeddingGuest: false,
        Prom: false, 
        Wedding: false,
        Reception: false, 
        Anniversary: false,
        RedCarpet: false,
        Graduation: false,
        SisofBride: false,
        MotherofBride: false,
        EveningWear: false, 
        Other: false
    },

}, action) {
    switch(action.type) {
        case 'ADD_CLIENT':
            return action.object

        default:
            return state
    }
}