const HomeScreen = () => {
    return (
        <div className="h-screen w-screen bg-cover bg-center mt-24"
             style={{backgroundImage: "url('../../public/images/Vector1.png')"}}>
            <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-auto max-w-full" src="../../public/images/mainIcon.svg" alt="image description"/>
                    <h1 className="text-4xl font-bold text-gray-700">Audio Books</h1>
                    <p className="text-[16px] font-bold text-gray-400">New to UPLIT? Get a free title on us.</p>
                    <button type="button"
                            className="focus:outline-none w-[385px] h-[55px] text-[#232323]-400 bg-[#FFAF19] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Try
                        for 0.01$
                    </button>
                    <p className="text-[14px] font-bold text-gray-400">$14.95 a month after 30 days. Cancel anytime.</p>
                </div>
            </div>
            <div className="flex justify-center mt-10 ">
                <div className="flex flex-row items-center justify-center">
                    <img className="h-auto max-w-full" src="../../public/images/mayBeSomeDay.png"
                         alt="image description"/>
                    <div className="flex flex-col items-center justify-center pl-4">
                        <img className="h-auto max-w-full pb-4" src="../../public/images/reminders.png"
                             alt="image description"/>
                        <img className="h-auto max-w-full" src="../../public/images/houseMaid.png"
                             alt="image description"/>
                    </div>
                    <img className="h-auto max-w-full border-8 rounded-3xl border-[#875FF6] ml-8"
                         src="../../public/images/AudioBook.png"
                         alt="image description"/>
                    <div className="flex flex-col items-center justify-center pl-4 pr-4">
                        <img className="h-auto max-w-full pb-4" src="../../public/images/mist.png"
                             alt="image description"/>
                        <img className="h-auto max-w-full" src="../../public/images/elegy.png"
                             alt="image description"/>
                    </div>
                    <img className="h-auto max-w-full" src="../../public/images/ugly.png"
                         alt="image description"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-20 pb-20">
                <p className="text-[16px] font-bold text-gray-400 pb-10 w-2/5 text-center">Explore what’s trending
                    with
                    millions of listeners, powered by AI recommendations tailored just for you</p>
                <div className="flex flex-row items-center justify-center">
                    <img className="h-auto max-w-full pr-4" src="../../public/images/navola.png"
                         alt="image description"/>
                    <img className="h-auto max-w-full pr-4 opacity-3" src="../../public/images/unbound.png"
                         alt="image description"/>
                    <img className="h-auto max-w-full" src="../../public/images/jasmine.png"
                         alt="image description"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 pb-14">
                <p className="text-[45px] font-bold text-black-400 w-2/5 text-center pt-10">Genres</p>
                <div className="flex flex-row items-stretch justify-center mt-4">
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2 pr-4">
                        <div className="flex flex-row items-start pt-7 pb-7 pl-4 pr-24 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/cat-icon-1.svg.png"
                                 alt="image description"/>
                            <p className=" pl-2 font-bold text-white">Romance</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default HomeScreen
