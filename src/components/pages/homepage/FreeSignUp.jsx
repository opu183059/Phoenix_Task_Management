const FreeSignUp = () => {
  return (
    <div className="p-10 bg-[url('https://static.vecteezy.com/system/resources/previews/011/171/111/original/white-background-with-orange-geometric-free-vector.jpg')] bg-fixed bg-cover">
      {/* https://static.vecteezy.com/system/resources/previews/011/171/111/original/white-background-with-orange-geometric-free-vector.jpg */}
      <div className="flex flex-col gap-6 items-center p-4 lg:p-10">
        <p className="text-orange-700 italic text-2xl lg:text-3xl font-semibold">
          Free Sign Up With Phoenix Today
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered md:w-96 w-full rounded-md"
          />
          <button
            className="btn bg-orange-600 hover:bg-orange-700 rounded-md border-none text-white"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeSignUp;
