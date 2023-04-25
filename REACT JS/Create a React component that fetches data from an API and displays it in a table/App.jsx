import { useEffect, useState } from 'react'
//Create a React component that fetches data from an API and displays it in a table.
function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DataTable
