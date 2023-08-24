import { FaShareAlt } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";

const DonutChart = () => {
  // Sample data for the chart
  const data = [
    { title: "Red", value: 120, color: "#FF6384" },
    { title: "Blue", value: 100, color: "#36A2EB" },
    { title: "Yellow", value: 100, color: "#FFCE56" },
    { title: "Green", value: 170, color: "#008000" },
    { title: "Purple", value: 100, color: "#800080" },
  ];
  const colorData = [
    { color: "bg-blue-300", text: "Alex" },
    { color: "bg-green-700", text: "Peter" },
    { color: "bg-yellow-300", text: "Kyra" },
    { color: "bg-red-300", text: "Zohn" },
    { color: "bg-purple-700", text: "Mouq" },
  ];
  return (
    <div className="p-8 bg-white rounded-xl  mx-0">
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h4 className="pb-4">Progress of your team</h4>
          <FaShareAlt></FaShareAlt>
        </div>
        <div className="flex">
          <PieChart
            data={data}
            lineWidth={30} // Adjust the line width to create a donut effect
            labelStyle={{ fontSize: "5px" }} // Adjust label font size
          />
          <div className="my-auto mx-12">
            <ul>
              {colorData.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span
                    className={`w-2 h-2 px-2 border rounded-md ${point.color} flex items-center`}
                  />
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
