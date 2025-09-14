import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../utils/usersHttp";
import LoadingIndicator from "../../components/UI/Loadingindicator";
import ErrorBlock from "../../components/UI/ErrorBlock";
import SearchBar from "../../components/UI/SearchBar";

const AdminPannel = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
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
            {data?.map(user=>(
          <tr>
                <td className="filter-box">{user.username}</td>
                <td className="filter-box">{user.email}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminPannel;
