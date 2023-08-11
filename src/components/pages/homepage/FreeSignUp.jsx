
const FreeSignUp = () => {
    return (
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-10 lg:p-16">
           <div className="flex flex-col gap-6 items-center p-4 lg:p-10">
           <p className="text-white text-2xl lg:text-3xl font-semibold">Free Sign Up With Phoenix Today</p>
            <div className="flex gap-3">
            <input type="email" placeholder="Email" className="input input-bordered w-full rounded-md" />
                <button className="btn bg-blue-600 hover:bg-blue-700 rounded-md border-none text-white" type="submit">Sign Up</button>
            </div>
           </div>
        </div>
    );
};

export default FreeSignUp;