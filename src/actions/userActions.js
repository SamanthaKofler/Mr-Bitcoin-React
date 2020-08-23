import userService from "../services/userService";

export function signUp(username) {
    return (dispatch) => {
        return userService.signUp(username)
            .then((user) => {
                dispatch({ type: 'SET_USER', user });
            })
    }
}