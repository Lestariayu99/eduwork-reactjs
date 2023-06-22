import { useCallback, useEffect, useState } from "react"

const Identity = () => {
    const fetchUser = useCallback(() => ['Isabella', 'Gabriel', 'Fernando'], []);
    let [user, setuser] = useState([]);

    useEffect(() => {
        const data = fetchUser ();
        setuser(data);
    }, [fetchUser])
    
    return (
        <div>
        {
            user.map(u => <li key = {u} > {u} </li>)
        }

        </div>
    )
}

export default Identity;