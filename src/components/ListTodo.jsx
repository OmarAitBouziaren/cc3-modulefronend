import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTach } from "../redux/TodoSlice";



export default function ListTodo() {
    const dispatch = useDispatch();
    const listtache = useSelector((state) => state.tache.data);

    useEffect(() => {
        dispatch(getTache());
        }, [dispatch]);

    return(
        <div className="container">
            {listusers.map((item,index) => (
            <User key={index}>{item}</User>))}
        </div>
        )

}