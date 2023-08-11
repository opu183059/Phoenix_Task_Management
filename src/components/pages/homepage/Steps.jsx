const Steps = () => {
    return (
      <div>
        <div className="md:max-w-6xl max-w-5xl mx-auto pt-10 pb-12">
          <h1 className="mb-7 text-orange-600 dark:text-orange-400 font-semibold font-akaya text-3xl text-center">
            How to manage your task
          </h1>
          <div className="w-full flex relative">
            <div className="md:w-7/12 mx-auto md:mx-0 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-orange-950 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-200 dark:shadow-orange-700 hover:shadow-orange-300 z-20">
              <div className="left">
                <img
                  src="https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="md:w-40 md:h-40"
                />
              </div>
              <div className="right text-left">
                <h1 className="text-orange-600 dark:text-orange-400 font-semibold md:text-xl">
                  Assign the work
                </h1>
                <p className="text-sm">
                Create a detailed project plan outlining tasks, milestones, timelines, and resource allocation. Consider dependencies between tasks and potential risks.
                </p>
              </div>
            </div>
            <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-r-4 h-60 border-orange-400"></div>
          </div>
          <div className="w-full flex md:justify-end my-16 relative">
            <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-orange-950 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-200 dark:shadow-orange-700 hover:shadow-orange-300 z-10 mx-auto md:mx-0">
              <div className="left">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683309556192-d024cd55a9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRhc2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="md:w-40 md:h-40"
                />
              </div>
              <div className="right text-left">
                <h1 className="text-orange-600 dark:text-orange-400 font-semibold md:text-xl">
                  Different milestones and individual access
                </h1>
                <p className="text-sm">
                Implement the project plan by performing tasks as outlined. Regularly monitor progress, track tasks, and ensure that work is being carried out according to schedule.
                
                </p>
              </div>
            </div>
            <div className="w-7/12 rounded-[80px] hidden md:block absolute right-60 -bottom-36 border-t-4 border-l-4 h-60 border-orange-400"></div>
          </div>
          <div className="w-full flex">
            <div className="md:w-7/12 w-10/12 flex items-center gap-4 p-4 bg-gray-50 dark:bg-orange-950 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-200 dark:shadow-orange-700 hover:shadow-orange-300 z-10 mx-auto md:mx-0">
              <div className="left">
                <img
                  src="https://images.unsplash.com/photo-1586282023692-6bfbd629e85d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhc2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="md:w-40 md:h-40"
                />
              </div>
              <div className="right text-left">
                <h1 className="text-orange-600 dark:text-orange-400 font-semibold md:text-xl">
                  Collaborate securely with deadlines
                </h1>
                <p className="text-sm">
                Maintain effective communication channels with project stakeholders, team members, and sponsors. Keep everyone informed about project status, changes, and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default Steps;