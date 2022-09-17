import React, {useState} from "react";
import Users from "../components/users"
import SearchStatus from "../components/searchStatus";
import api from "../api/index";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    };

    const handleToggleBookMark = (id) => {
        setUsers(users => users.map((user) => user._id === id
            ? {...user, bookmark: true}
            : {...user}
        ))
    };

    return (users.length > 0
            ?
            <>
                <h1>
                    <span className='badge bg-primary'>
                        {SearchStatus(users)} с тобой сегодня
                    </span>
                </h1>
                <Users
                    users={users}
                    onToggleBookMark={handleToggleBookMark}
                    onDelete={handleDelete}
                />
            </>
            :
            <h1>
                <span className='badge bg-danger'>
                Никто не тусанет с тобой сегодня
                </span>
            </h1>
    );
}

export default App;

