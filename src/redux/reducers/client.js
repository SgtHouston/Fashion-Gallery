

export function client (state = {
    Age: '0 - 15',
    FName: '',
    LName: '',
    Consultation: '',
    Size: 0, 
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
    Comments: '',
    Budget: '',
    // Upload1: null,
    // Upload2: null,
    // Upload3: null,
    // Upload4: null,
    // Upload5: null

}, action) {
    switch(action.type) {
        case 'ADD_CLIENT':
            return action.object

        default:
            return state
    }
}