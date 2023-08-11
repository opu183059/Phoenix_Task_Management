import DonutChart from "./DonutChart";
import TablePercentage from "./TablePercentage";


const TrackSection = () => {
  const cardsData = [
    { image: 'https://plus.unsplash.com/premium_photo-1679086008296-3b96ebec8ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnJlY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', title: '12 done', text: '' },
    { image: 'https://img.freepik.com/premium-photo/3d-render-clipboard-with-checklist-concept-project-management-isolated-purple-background_95505-349.jpg?size=626&ext=jpg&ga=GA1.2.488912096.1690217426&semt=sph', title: '10 updated' },
    { image: 'https://img.freepik.com/free-photo/3d-render-astronaut-with-target-3d-illustration-design_460848-10855.jpg?size=626&ext=jpg&ga=GA1.2.488912096.1690217426&semt=sph', title: '4 new' },
    { image: 'https://img.freepik.com/free-photo/3d-render-calendar-page-with-green-tick-icon_107791-15944.jpg?size=626&ext=jpg&ga=GA1.2.488912096.1690217426&semt=sph', title: '3 due' },
  ];
  const upcomingWork = [
    
    'Hold project kickoff meeting',
    'Conduct progress meetings',
    'Review and adjust project milestones',
    'Perform quality checks on deliverables',
    'Prepare project status report',
    'Communicate with stakeholders',
    'Finalize project documentation',
  ];

  return (
    <div className="bg-orange-600 p-6 md:p-12">
    <div className="text-center text-white">
      <p className="my-3 ">Open source to collaborate with your team</p>
      <h2 className="my-4 font-bold">Get insight into what your project update</h2>
      <small className=" my-12"> Allocate resources, including people, materials, and equipment, based on the project plan. Ensure that resources are available when needed.Implement the project plan by performing tasks as outlined. Regularly monitor progress, track tasks, and ensure that work is being carried out according to schedule. Identify potential risks that could impact the success. Develop strategies to mitigate or respond to these risks to minimize their impact.Monitor and review project milestones to assess progress and identify any delays from the original plan.</small>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
      {cardsData.map((card, index) => (
        <div className="flex items-center p-4 border space-x-4 bg-white rounded-md" key={index}>
          <img src={card.image} alt={`Image ${index + 1}`} className="max-w-12 h-12 rounded-full" />
         <div>
         <div className="font-bold">{card.title}</div>
          <p className="text-grey-200">in the last 7 days</p>
         </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
  <div className="px-4">
    <DonutChart />
  </div>
  <div className="mx-auto mt-6 md:mt-0 py-2">
    <TablePercentage />
  </div>

</div>

  </div>
 
  );
};

export default TrackSection;
