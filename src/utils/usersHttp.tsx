export type User={
    username: string;
    email: string
}

export async function fetchUser():Promise<User[]>{
    const res= await fetch("https://fakestoreapi.com/users");
    if(!res.ok){
        const error= new Error("An error occured while fetching users")
        throw error
    }
    return await res.json()
}