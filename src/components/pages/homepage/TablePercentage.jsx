import { FaShareAlt } from "react-icons/fa";

const TablePercentage = () => {
  const userData = [
    {
      name: "Alex",
      percentage: 50,
      count: 10,
      imageSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Peter",
      percentage: 75,
      count: 20,
      imageSrc:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Kyra",
      percentage: 30,
      count: 15,
      imageSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Zohn",
      percentage: 50,
      count: 10,
      imageSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mouq",
      percentage: 50,
      count: 10,
      imageSrc:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h4 className="pb-4">Workload of your team</h4>
        <FaShareAlt></FaShareAlt>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="p-2">Assigned</th>
            <th className="p-2">Percentage</th>
            {!isMobile && <th className="p-3">Count</th>}
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className="p-2 flex items-center">
                <img
                  src={user.imageSrc}
                  alt={user.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                {user.name}
              </td>
              <td className="p-2">
                <progress
                  className="progress progress-accent w-56"
                  value="40"
                  max="100"
                  value={user.percentage}
                  color="bg-primary"
                >
                  {user.percentage}%
                </progress>
              </td>
              {!isMobile && <td className="px-12 py-5">{user.count}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePercentage;
