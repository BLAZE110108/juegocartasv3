import { createContext, useState } from 'react';


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user1, setUser1] = useState();
    const [user2, setUser2] = useState();
 

    const data = { user1, user2, setUser1, setUser2};
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;