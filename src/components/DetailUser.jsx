import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/UserSlice";
import React from 'react'

export default function DetailUser() {
    const dispatch = useDispatch();
    const listusers = useSelector((state) => state.user.data);

    useEffect(() => {
        dispatch(getUsers());
        }, [dispatch]);

    

  return (
    <div>
        <img src={item.image} alt="" />
        <h3>{item.firstName}</h3>
        <h3>{item.fastName}</h3>
        <h3>{item.age}</h3>
        <h3>{item.gender}</h3>
        <h3>{item.Email}</h3>
        <h3>{item.phone}</h3>
        <h3>{item.poids}</h3>
        <h3>{item.birtDay}</h3>
        <h3>{item.height}</h3>
        <h3>{item.bloodGroup}</h3>
        <h3>{item.color}</h3>
    </div>
  )
}
