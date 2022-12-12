import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/UserSlice";


export default function User() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        }, [dispatch]);
    
    return(
        <div className='container' key={item.id}>
            <img src={item.image}  />
            <h1>{item.firstName}</h1>
            <p>{item.lastName}</p>
            <button onClick={() => navigate(`/Detail.user/${item.id}`)}>Detail user</button>
            <button onClick={() => navigate(`/ListTodo/${item.id}`)}>list des taches</button>
        </div>
    )

    }