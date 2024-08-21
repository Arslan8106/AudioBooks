const HomeScreen = () => {
    return (
        <div className="absolute h-screen bg-cover w-screen bg-center mt-40"
             style={{backgroundImage: "url('../../public/images/Vector1.png')"}}>
            <div className="absolute inset-1 flex justify-center items-center">
                <div className="w-screen h-4/5 sm:h-4/5 bg-gradient-to-b from-transparent via-[#828CFF] to-transparent opacity-40"></div>
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
                            className="focus:outline-none w-[385px] h-[52px] text-[#232323]-400 bg-[#FFAF19] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Try
                        for 0.01$
                    </button>
                    <p style={{fontFamily: 'Outfit, sans-serif'}}
                       className="text-[14px] font-normal text-[#5D5D5D]">$14.95 a month after 30 days. Cancel
                        anytime.</p>
                </div>
            </div>
            <div className="relative z-10 flex justify-center -mt-8 ">
                <div className="flex flex-row items-center justify-center">
                    <img className="h-auto max-w-full" src="../../public/images/mayBeSomeDay.png"
                         alt="image description"/>
                    <div className="flex flex-col items-center justify-center pl-4">
                        <img className="h-auto max-w-full pb-4" src="../../public/images/reminders.png"
                             alt="image description"/>
                        <img className="h-auto max-w-full" src="../../public/images/houseMaid.png"
                             alt="image description"/>
                    </div>
                    <img className="h-auto max-w-full border-8 rounded-3xl border-[#875FF6] ml-8 mr-4"
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
            <div className="flex flex-col items-center justify-center mt-28 pb-10">
                <p style={{fontFamily: 'Outfit, sans-serif'}}
                   className="text-[30px] font-bold text-[#454545] pb-20 w-[73%] text-center">Explore what’s trending
                    with millions of listeners, powered by AI recommendations tailored just for you</p>
                <div className="flex flex-row items-center justify-center">
                    <img className="h-auto max-w-full pr-4" src="../../public/images/navola.png"
                         alt="image description"/>
                    <img className="h-auto max-w-full pr-4 opacity-3" src="../../public/images/unbound.png"
                         alt="image description"/>
                    <img className="h-auto max-w-full" src="../../public/images/jasmine.png"
                         alt="image description"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-2 pb-14">
                <p style={{fontFamily: 'Outfit, sans-serif'}}
                   className="text-[32px] sm:text-[45px] font-semibold text-[#454545] w-2/5 text-center pt-14">Genres</p>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/heartFull.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Romance</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/light.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Mystery Thriller & Suspense</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/money.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Money & Finance</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/star.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Science Fiction & Fantasy</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/book.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Literature & Fiction</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/inkPot.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Biographies & Memoirs</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/heart.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Self-Improvement</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/fire.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Erotica</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/fire.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Politics & Social Sciences</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/innerHeart.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Relationships</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/case.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Startups, Business & Careers</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div
                            className="flex items-center h-full w-[250px] md:w-[220px] pl-4 py-7 pr-8 rounded-2xl bg-[#3D3D3D]">
                            <img className="h-auto max-w-full" src="../../public/images/heartCheck.svg"
                                 alt="image description"/>
                            <p className="pl-2 font-bold text-white text-[12px]">Health & Wellness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen
