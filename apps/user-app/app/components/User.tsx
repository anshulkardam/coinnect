"use client";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "store/src/userSlice";

export const User = () => {
  const count = useSelector((state: any) => state.uses.value);
  const dispatch = useDispatch();
   
  return (
    <div>
      <button className="border-b-2 bg-black text-white" onClick={() => dispatch(setUser())}>increment</button>
      <p>{count}</p>

      <button className="border-b-2 bg-black text-white" onClick={() => dispatch(clearUser())}>decrement</button>
    </div>
  );
};
