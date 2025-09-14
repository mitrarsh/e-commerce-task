import { create } from "zustand";
import type { User } from "../utils/usersHttp";




type UserListState={
    userList: User[];
    setUserList:(data:User[])=> void

}


export const seUserList = create<UserListState>((set)=>({
    userList: [],
    setUserList: (data)=>set(()=>({userList:data}))
}))