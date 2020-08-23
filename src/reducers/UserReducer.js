import userService from '../services/userService';

const INITIAL_STATE= {
    user: userService.getUser() || null
}

export default function UserReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        }
        // case ''
        default: 
        return state
    }
}