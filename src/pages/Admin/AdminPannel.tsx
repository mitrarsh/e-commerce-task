const AdminPannel = () => {
  return (
    <main className="p-8 flex flex-col">
      <h2>Users</h2>
      <table className="self-center">
        <thead>
          <tr>
            <th className="filter-box">Username</th>
            <th className="filter-box">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="filter-box">mitra</td>
            <td className="filter-box">mitraroshanfekr@yahoo.,conm</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default AdminPannel;
