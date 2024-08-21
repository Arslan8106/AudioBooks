import genres from "../data/GenericsData.js";

const HomeScreen = () => {
    return (
        <div className="absolute h-screen bg-cover w-screen bg-center mt-40"
             style={{backgroundImage: "url('../../public/images/Vector1.png')"}}>
            <div className="absolute inset-1 flex justify-center items-center">
                <div
                    className="w-screen h-4/5 sm:h-4/5 bg-gradient-to-b from-transparent via-[#828CFF] to-transparent opacity-40"></div>
            </div>
            <div className="flex justify-center -mt-20 pb-28">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-auto max-w-full" src="../../public/images/mainIcon.svg"
                         alt="image description"/>
                    <h1 style={{fontFamily: 'Outfit, sans-serif'}}
                        className="text-[40px] font-bold text-[#4B4B4B]">Audio Books</h1>
                    <p style={{fontFamily: 'Outfit, sans-serif'}}
                       className="text-[16px] font-normal text-[#5D5D5D] pb-2">New to UPLIT? Get a free title on us.</p>
                    <button type="button"
                            style={{fontFamily: 'Outfit, sans-serif'}}
                            className="focus:outline-none sm:w-[200px] w-[385px] h-[52px] text-[#232323]-400 bg-[#FFAF19] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Try
                        for 0.01$
                    </button>
                    <p style={{fontFamily: 'Outfit, sans-serif'}}
                       className="text-[14px] font-normal text-[#5D5D5D]">$14.95 a month after 30 days. Cancel
                        anytime.</p>
                </div>
            </div>
            <div className="relative z-10 flex justify-center -mt-8">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <img className="h-auto max-w-full mb-4 md:mb-0" src="../../public/images/mayBeSomeDay.png"
                         alt="image description"/>
                    <div className="flex flex-col items-center justify-center pl-0 md:pl-4">
                        <img className="h-auto max-w-full pb-4" src="../../public/images/reminders.png"
                             alt="image description"/>
                        <img className="h-auto max-w-full" src="../../public/images/houseMaid.png"
                             alt="image description"/>
                    </div>
                    <div
                        className="relative inline-block ml-0 md:ml-8 mr-0 md:mr-4 mt-4 md:mt-0 p-3 rounded-3xl"
                        style={{
                            background: 'linear-gradient(180deg, #875FF6 0%, #07030C 100%)',
                            borderRadius: '1rem',
                        }}
                    >
                        <img
                            className="h-auto max-w-full rounded-[50px]"
                            src="../../public/images/AudioBook.png"
                            alt="Description"
                            style={{
                                borderRadius: 'inherit',
                            }}
                        />
                        <div className="absolute bottom-0 left-0 w-full" style={{backgroundColor: '#07030C',}}></div>
                    </div>
                    <div className="flex flex-col items-center justify-center pl-0 md:pl-4 pr-0 md:pr-4 mt-4 md:mt-0">
                        <img className="h-auto max-w-full pb-4" src="../../public/images/mist.png"
                             alt="image description"/>
                        <img className="h-auto max-w-full" src="../../public/images/elegy.png"
                             alt="image description"/>
                    </div>
                    <img className="h-auto max-w-full mt-4 md:mt-0" src="../../public/images/ugly.png"
                         alt="image description"/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-28 pb-10">
                <p style={{fontFamily: 'Outfit, sans-serif'}}
                   className="text-[30px] font-bold text-[#454545] pb-20 w-[73%] text-center">Explore what’s trending
                    with millions of listeners, powered by AI recommendations tailored just for you</p>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <img className="h-auto max-w-full mb-4 md:mb-0 md:mr-4" src="../../public/images/navola.png"
                         alt="image description"/>
                    <img className="h-auto w-3/4 md:w-[90%] mb-4 md:mb-0 md:mr-4 opacity-75"
                         src="../../public/images/unbound.png"
                         alt="image description"/>
                    <img className="h-auto max-w-full mb-4 md:mb-0" src="../../public/images/jasmine.png"
                         alt="image description"/>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center mt-2 pb-14">
                <p style={{fontFamily: 'Outfit, sans-serif'}}
                   className="text-[32px] sm:text-[45px] font-semibold text-[#454545] w-2/5 text-center pt-14">Genres</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    {genres.map((genre, index) => (
                        <div key={index} className="flex flex-col items-center justify-center pt-2">
                            <div
                                className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                                <img className="h-auto max-w-full" src={genre.imgSrc} alt={`${genre.name} icon`}/>
                                <p className="pl-2 font-bold text-white text-[12px]">{genre.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HomeScreen
