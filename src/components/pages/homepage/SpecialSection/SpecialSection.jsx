import bgImage from '../../../../../public/task-mange2.avif'

const SpecialSection = () => {
    return (
        <div className='lg:h-96' style={{
            backgroundImage: "url(" + `${bgImage}` + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='lg:w-[1280px] mx-auto flex flex-col-reverse lg:flex-row'>

                <div className='lg:w-3/4 lg:mt-32 my-auto p-4'>
                    <h2 className='text-2xl font-bold'>Demo text</h2>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam natus,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores neque a possimus magnam dolor perferendis atque delectus officia illo, molestiae facere? Corporis, repellendus? Laboriosam corrupti deleniti iure temporibus, distinctio quia.</p>
                </div>
                <div className='hidden lg:block relative lg:w-1/2 lg:ms-auto '>

                    <img className='h-12 absolute z-auto ms-8 mt-[250px] ' src="https://i.ibb.co/TTzn2Mz/icon-Twitter-icon.png" alt="twitter" />
                    <img className='h-12 absolute z-auto mt-24  ms-16' src="https://i.ibb.co/vqYKy8c/icon-Instagram-icon.png" alt="instagram" />
                    <img className='h-12 absolute z-auto mt-12  ms-48' src="https://i.ibb.co/vcw8Jgn/icon-phone-call-icon.png" alt="phone" />
                    <img className='h-12 absolute z-auto mt-20  ms-80' src="https://i.ibb.co/Qpb1H6c/icon-Facebook-v1-icon.png" alt="facebook" />
                    <img className='h-12 absolute z-auto mt-44  ms-80' src="https://i.ibb.co/gMzvmTd/icon-monitor.png" alt="laptop" />
                    <img className='h-12 absolute z-auto mt-[260px]  ms-72' src="https://i.ibb.co/WGDLJ4g/icon-google-icon.png" alt="google" />
                    <img className='h-12 absolute z-auto mt-72  ms-[150px]' src="https://i.ibb.co/Dw7WD8b/icon-comment-circle-chat-message-icon.png" alt="massage" />
                    <img className='h-12 absolute z-auto mt-48  ms-[150px]' src="https://i.ibb.co/SNZpZ90/icon-support-icon.png" alt="Headphone" />


                </div>


            </div>












         
        </div>
    );
};

export default SpecialSection;