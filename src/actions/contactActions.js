import contactService from "../services/contactService";

export function loadContacts() {
    // when it's async, it returns this function
    // get state returns the global state
    return async (dispatch, getState) => {
        try {
            const contacts = await contactService.getContacts(getState().ContactReducer.filterBy);
            dispatch({ type: 'SET_CONTACTS', contacts });
        } catch (err) {
            console.log(err);
        }
    }
}

export function setFilter(filterBy) {
    // sync
    return dispatch => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}

export function removeContact(id) {
    return dispatch => {
        return contactService.deleteContact(id).then(() =>
            dispatch({ type: 'REMOVE_CONTACT', id })
        )
    }
}