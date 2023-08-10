import Lottie from "lottie-react";
import animation from '../../../../assets/lottie1.json'
import { useState } from "react";
const ExtraSection = () => {
    const [showText, setShowText] = useState(true)
    const handelText = () => {
        setShowText(!showText)
    }
    return (
        <div className="bg-slate-100">
            <div className=" lg:w-[1280px] mx-auto flex flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2 h-72 overflow-x-auto p-4 my-auto">
                    <h3 className="text-3xl fond-bold uppercase mb-4 text-slate-600">teams work better when their tools and data talk?</h3>
                    <p><span className="font-bold text-gray-500">1. Task Creation:</span> Users can create new tasks, assign due dates, set priorities, and add relevant details.</p>
                    <p><span className="font-bold text-gray-500">2. Task Tracking:</span> Users can monitor the progress of tasks, view status updates, and track completion.</p>
                    <p><span className="font-bold text-gray-500">3. Task Prioritization:</span> Users can assign priority levels to tasks to determine which ones should be tackled first.</p>
                    <div className={showText ? 'hidden' : 'visible'}>
                        <p><span className="font-bold text-gray-500">4. Scheduling:</span> Users can set due dates, deadlines, and reminders to ensure tasks are completed on time.</p>
                        <p><span className="font-bold text-gray-500">5. Collaboration:</span> Many task management tools allow for team collaboration by enabling task assignment, comments, file attachments, and shared task lists.</p>
                        <p><span className="font-bold text-gray-500">6. Project Organization:</span> Some tools provide features to group related tasks into projects or categories, allowing for better organization and management</p>
                        <p><span className="font-bold text-gray-500">7. Reporting:</span> Generating reports and summaries to analyze task completion, team performance, and other metrics.</p>

                    </div>
                    {
                        showText ? <span className="cursor-pointer font-bold" onClick={handelText}>see more....</span> : <span className="cursor-pointer font-bold" onClick={handelText}>see less..</span>
                    }
                </div>
                <div className="mx-auto lg:ms-auto"><Lottie className="h-[500px] " animationData={animation}></Lottie> </div>
            </div>
        </div>
    );
};

export default ExtraSection;