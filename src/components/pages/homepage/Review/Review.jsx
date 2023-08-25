
export default function Review() {
    
    return (
        <div className="md:max-w-5xl max-w-6xl mx-auto pt-10 pb-12">
            <div className="carousel bg-[#faedd9] w-full rounded-xl h-[350px] relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="w-1/2 relative flex justify-center items-center">
                        <div className="absolute inset-0 "></div>
                        <img src="https://i.ibb.co/ckW5Wpf/Rectangle-15.png" alt="Slide" className=" rounded-xl" />
                    </div>
                    <div className="w-1/2 pl-12">
                        <div className="text-white space-y-7">

                            <p className='pt-8 pb-5 text-[#4F4F4F] text-xl'>It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters</p>
                            <div>
                                <h1 className='text-[#000000] text-sm' >Mr. David Jason </h1>
                                <h1 className='text-[#DD9200] text-xl font-medium'>Core Dev LTD </h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle border border-black mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle border border-black">❯</a>
                    </div>
                </div>
                {/* Other slides go here */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="w-1/2 relative flex justify-center items-center">
                        <div className="absolute inset-0 "></div>
                        <img src="https://i.ibb.co/fX9YqtY/jakub.png" alt="Slide" className=" rounded-xl" />
                    </div>
                    <div className="w-1/2 pl-12">
                        <div className="text-white space-y-7">

                            <p className='pt-8 pb-5 text-[#4F4F4F] text-xl'>It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters</p>
                            <div>
                                <h1 className='text-[#000000] text-sm' >Mr. Json Roy </h1>
                                <h1 className='text-[#DD9200] text-xl font-medium'> Dev soft LTD </h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle border border-black mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle border border-black">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
