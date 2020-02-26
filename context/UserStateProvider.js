import React, { createContext} from 'react'

const userState = {
    currentUserId: 9
}

export const UserStateContext = createContext(userState)

const UserStateProvider = props => {
    return (
        <UserStateContext.Provider value={userState}>
            {props.children}
        </UserStateContext.Provider>
    );
};

export default UserStateProvider