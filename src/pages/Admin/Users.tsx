import { useQuery } from "@tanstack/react-query";
import { fetchUser, type User } from "../../utils/usersHttp";
import LoadingIndicator from "../../components/UI/Loadingindicator";
import ErrorBlock from "../../components/UI/ErrorBlock";
import SearchBar from "../../components/UI/SearchBar";
import { useEffect, useState } from "react";

const Users = () => {

  // getting users  data

  const[filteredUsers,setFilteredUsers]= useState<User[]>([])

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

    useEffect(() => {
    if (data) {
      setFilteredUsers(data);
    }
  }, [data]);

  // handling error andloading state

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
  }

  // handling user search
 const handleSearch=(term:string) => {
    if (term) {
      const filtered = data?.filter(
        (u: User) =>
          u.username.toLowerCase().includes(term.toLowerCase()) ||
          u.email.toLowerCase().includes(term.toLowerCase())
      )??[];
      setFilteredUsers(filtered);
    } else if (data) {
      setFilteredUsers(data);
    }
  }

  return (
    <main className="p-8 flex flex-col gap-[2rem] ">
      <h2>Users</h2>
      <SearchBar onSearch={handleSearch}/>
      <table className="self-center p-8 md:min-w-[50%]">
        <thead>
          <tr>
            <th className="filter-box">Username</th>
            <th className="filter-box">Email</th>
          </tr>
        </thead>
        <tbody>
            {filteredUsers?.map(user=>(
          <tr key={user.username}>
                <td className="filter-box">{user.username}</td>
                <td className="filter-box">{user.email}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Users;
