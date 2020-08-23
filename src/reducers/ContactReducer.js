const INITIAL_STATE = {
    contacts: null,
    filterBy: null
}

export default function ContactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.id)
            }
        case 'UPDATE_ROBOT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.robot : contact)
            }
        default:
            return state;
    }
}