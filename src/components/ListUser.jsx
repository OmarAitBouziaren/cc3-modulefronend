import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/UserSlice";
import User from "./User";


export default function ListUser() {
    const dispatch = useDispatch();
    const listusers = useSelector((state) => state.user.data);

    useEffect(() => {
        dispatch(getUsers());
        }, [dispatch]);

    return(
        <div className="container">
            {listusers.map((item,index) => (
                <User key={index}>{item}</User>))}
        </div>
    )
}