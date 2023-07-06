import { useEffect, useState } from "react";
import Button from "../Button"
import LoopText from "../LoopText"
import Navbar from "../Navbar";
import Footer from "../Footer";
import Chart from "./../../public/Chart.svg"


export default function MainPage() {
    return (
        <>
            <Navbar />
            <div id="ff" className="w-[100vw] font-bold h-[100vh] bg-[#1B1B1B]  text-white flex flex-col justify-center items-center  relative z-10 text-center kanit gap-5 md:gap-7 px-[10px] mt-[50px]">
                <h1 className="text-[24px] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem]">Supercharge Your Investments</h1>
                <h1 className="text-[36px] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[4rem] ">Dive into <span className="text-[#8E41F7] font-extrabold bound"> On-Chain</span> Debt Assets</h1>
                <p className="text-md text-[#bbb] text-[18px] md:text-[1.8rem]">Earn upto 18% by Fueling the Future of Movies</p>

                <div className="flex justify-center items-center gap-5 md:gap-10 mt-2 text-sm md:text-lg">
                    <div className="w-[100px] md:w-[150px] text-[#1B1B1B] py-3 bg-blue-300 rounded-2xl text-center hover:scale-110 transition-transform ease-in-out cursor-pointer" >
                        Experience
                    </div>
                    <div className="w-[100px] md:w-[150px] px-5 py-3 border-blue-300 text-blue-300    border-2 rounded-2xl text-center hover:scale-110 transition-transform ease-in-out cursor-pointer hover:text-[#1B1B1B] bg-transparent nav-ripple">
                        Apply
                    </div>
                </div>
                <div className="absolute z-[-1] right-0 top-[50%] opacity-50">
                    <GradientBlob />
                </div>
                <div className="absolute z-[-1] -left-32 top-[10%] opacity-50 cursor-pointer hidden md:block">
                    <GradientBlob />
                </div>

                {/* <div className="text-[30px] md:text-[72px] text-center font-bold mt-10">
                    Invest in <br></br>
                     <LoopText />
                </div>
                <div className="text-[30px] md:text-[72px] font-bold ">
                    Secured debt assets
                </div>
                <div className="text-[20px] md:text-[40px] text-[#bbb] font-semibold text-center mt-5">
                    Earn up to 18% returns by lending to <br /> movies sold to OTTs
                </div>
                <div className="mt-10 flex flex-col items-center gap-2">
                    <Button text={"Explore Now"} className={"px-10 text-2xl"} />
                    <div className="">Exclusive opportunities</div>
                </div> */}
            </div>
            <div>
                <AboutOnChain />
                <News />
                <GrowMoney />
                <LendMoney />
                <RevenuBasedFinance />
                {/* <JoinClub /> */}
                {/* <div className="bg-[#1B1B1B] px-2 md:px-10">
                    <Content />
                </div> */}
                <WhatNext />
            </div>
            <Footer />
        </>
    )
}
function GradientBlob() {
    return (
        <>
            <div class="blob-cont">
                <div class="yellow blob"></div>
                <div class="red blob"></div>
                <div class="green blob"></div>
            </div>
        </>
    )
}

function AboutOnChain() {
    return (
        <>
            <main id="about" className="w-[100vw] h-fit bg-[#1B1B1B] kanit ">
                <div className="w-[90%] mx-auto flex flex-wrap justify-center content-center">
                    <div className="w-full md:w-1/2 md:mr-10 z-20 ">
                        <h1 className="bound text-2xl md:text-4xl text-white pb-5 ">Introducing On-chain Revenue Based Financing</h1>
                        <p className="py-5 text-[#bbb] text-md md:text-[22px]">Rights buyer will release the payment only after the movie release. In case of any change in the tenure due to a delay in the movie's Release date, BetterInvest will collect interest for the delayed period and will share it amongst the investors. </p>
                        <p className="pb-5 text-[#bbb] text-md md:text-[22px]">BetterInvest works towards mitigating the investment risk by doing strict due diligence, vetting by experts, collecting required securities from Production house, there is still a high risk factor involved. Please find how we mitigate risks.</p>
                    </div>
                   <div className="w-[400px] md:w-[400px] lg:w-[500px] p-0 m-0 z-20 flex justify-center content-center">
                        {/* <img className="w-full h-full object-contain" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fecb1278b46458a7815b3e71c0488b5a6.cdn.bubble.io%2Ff1669748740559x820484234291649600%2FGroup%25201000002048%2520%25282%2529%2520%25281%2529.png?w=768&h=573&auto=compress&fit=crop&dpr=1.25"/> */}
                        <Chart />

                    </div>
                </div>
            </main>
        </>
    )
}
function LendMoney() {
    return (
        <>
            <main className="w-screen min-h-screen bg-[#1B1B1B] text-white py-10 kanit relative px-[20px] z-20">
                <div className="md:w-[70%] mx-auto py-10">
                    <h1 className="z-20 text-[2rem] sm:text-[2.9rem] md:text-[3.3rem] font-bold text-center  text-white bound">Forging a Secure Ecosystem</h1>
                </div>
                {/* Cards */}
                <div className="flex justify-center items-center flex-wrap gap-10 mt-[30px] sm:mt-[60px] kanit z-20">
                    <div className="h-auto md:h-[400px] w-[400px] bg-[#1D272B] rounded-3xl p-6 md:p-10 z-20">
                        <div className="flex justify-between items-center ">
                            <h1 className="text-xl font-bold border-b-[1px] pb-2 text-[#fffffff1]">Transparent</h1>
                            <img className="w-16" src="https://img.icons8.com/cute-clipart/64/view-file.png" />
                        </div>
                        <p className="text-[#ffffffd8] capitalize mt-5 md:mt-10 text-[17px] sm:text-lg ">invest in landing against on chain assests that directly recieve returns from top OTT platforms and music labels, maximizing your earnings potential. invest in landing against on chain assests that directly.</p>
                        {/* <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Product houses sell OTT or music rights to top OTTs and music labels</p> */}
                    </div>
                    <div className="h-auto md:h-[400px] w-[400px] bg-[#1D272B] rounded-3xl p-6 md:p-10 z-20">
                        <div className="flex justify-between items-center ">
                            <h1 className="text-xl font-bold border-b-[1px] pb-2 text-[#fffffff1] ">Trustless</h1>
                            <img className="w-16" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-newsletter-seo-4.2-sbts2018-flat-sbts2018.png" />
                        </div>
                        <p className="text-[#ffffffd8] capitalize mt-5 md:mt-10 text-[17px] sm:text-lg ">invest in landing invest in landing against on chain assests that directly. against on chain assests that directly recieve returns from top OTT platforms and music labels, maximizing your earnings potential. invest in landing against on chain assests that directly.</p>
                        {/* <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Product houses sell OTT or music rights to top OTTs and music labels</p> */}
                    </div>
                    <div className="h-auto md:h-[400px] w-[400px] bg-[#1D272B] rounded-3xl p-6 md:p-10 z-20">
                        <div className="flex justify-between items-center ">
                            <h1 className="text-xl font-bold border-b-[1px] pb-2 text-[#fffffff1]">Accessible</h1>
                            <img className="w-16" src="https://img.icons8.com/clouds/100/right.png" />
                        </div>
                        <p className="text-[#ffffffd8] capitalize mt-5 md:mt-10 text-[17px] sm:text-lg">invest in landing against on chain assests that directly recieve returns from top OTT platforms and music labels, maximizing your earnings potential. invest in landing .</p>
                        {/* <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Product houses sell OTT or music rights to top OTTs and music labels</p> */}
                    </div>
                </div>
                <div className="absolute opacity-40 -top-32 right-0 z-10">
                    <GradientBlob />
                </div>
                <div className="absolute opacity-40 ">
                    <GradientBlob />
                </div>
            </main>
        </>
    )
}

function OfferCard() {
    return (
        <>

            <div class="card">
                <div class="infos">
                    <div class="image"></div>
                    <div class="info">
                        <div className="my-3">
                            <p class="text-lg">
                                OTT Rights of Dasara Movie - I
                            </p>
                            <p class="function">
                                OTT rights
                            </p>
                        </div>
                        <div class="stats text-xs">
                            <p class="flex flex-col mx-4 items-center">
                                months tenure
                                <span class="state-value">
                                    4 to 6
                                </span>
                            </p>
                            <p class="flex flex-col mx-4 items-center">
                                returns
                                <span class="state-value">
                                    18%
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
                <button class="request border-[1px] border-[#5d5d5d]" type="button">
                    View
                </button>
            </div>

        </>
    )
}
function GrowMoney() {
    return (
        <>
            <main className="w-screen min-h-screen bg-[#1B1B1B] text-white py-10 kanit px-[20px]">
                <div className="md:w-[70%] mx-auto py-10">

                    <h1 className=" text-[2rem] sm:text-[2.9rem] md:text-[3.3rem]  font-bold text-center  text-white bound">Grow your WEALTH</h1>
                    <h1 className="text-[1rem] md:text-[1.5rem] text-center text-[#bbb] py-3">invest in landing against on chain assests that directly recieve returns from top OTT platforms and music labels, maximizing your earnings potential</h1>
                </div>
                {/* Cards */}
                <div className="flex justify-center items-center flex-wrap gap-7 mt-[30px] sm:mt-[60px]">
                    <div className="h-[250px] w-[300px] 2xl:w-[400px] bg-gradient-to-bl from-[#4ec8db] via-[#b0b0b0] to-blue-400 rounded-3xl flex justify-center items-center text-center p-10">
                        <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Product houses sell OTT or music rights to top OTTs and music labels</p>
                    </div>
                    <div className="h-[250px] w-[300px] 2xl:w-[400px] bg-gradient-to-bl from-[#f4ccf7] via-[#8ed3e8] to-blue-400 rounded-3xl flex justify-center items-center text-center p-10">
                        <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Investors purchase discounted invoices from production houses</p>
                    </div>
                    <div className="h-[250px] w-[300px] 2xl:w-[400px] bg-gradient-to-br from-[#28627a] via-[#f7c4f6] to-purple-200 rounded-3xl flex justify-center items-center text-center p-10">
                        <p className="mx-5 text-xl text-[#1B1B1B] font-bold ">Investors recieve invoice payments directly from OTT/Music Labels</p>
                    </div>

                </div>
            </main>
        </>
    )
}

function News() {
    return (
        <>
            <main id="offer" className="px-[10px] md:px-[0px] w-screen h-fit py-20 bg-[#1B1B1B] text-white relative ">
                <div className="w-[90%] md:w-[80%] mx-auto kanit">
                    <h1 className="text-[2rem] sm:text-[2.9rem] md:text-[3.7rem] font-bold text-center pt-10 text-white">Upcoming Offerings</h1>
                </div>
                {/* Cards */}
                <div className=" w-[90%] md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center  gap-8 mt-[60px] flex-wrap ">
                    <OferCard />
                    <OferCard />
                    <OferCard />
                </div>

                <div className="absolute top-[10%] left-0 opacity-50">
                    <GradientBlob />
                </div>
            </main>
        </>
    )
}

function OferCard() {
    return (
        <>
            <div className="bg-[#2d3b41] rounded-2xl p-2 kanit z-[1000]">
                <div className="h-[250px]  ">
                    <img className="w-full h-full rounded-2xl object-cover" src="./a.webp" />
                </div>
                <div className="font-bold mt-5 px-2">
                    <div className="flex justify-between gap-2 items-center my-2">
                        <div className="text-[#bbb] ">
                            <h1 className="text-white py-2 text-lg">LLC Movie</h1>
                            <p className="text-md">Four to Six Months</p>
                            <p className="text-md">18% Expected Returns</p>
                        </div>
                        <div>
                            <div className="w-[100px] text-[#1B1B1B] py-3 bg-blue-300 rounded-xl text-center hover:scale-110 transition-transform ease-in-out cursor-pointer" >
                                Apply
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function JoinClub() {
    return (
        <>
            <main className="bg-[#1B1B1B] h-[300px] py-10">
                <div className="w-[95%] mx-auto h-[200px]  bg-gradient-to-r from-pink-400 via-purple-300 to-blue-500 rounded-3xl flex justify-center items-center flex-col">
                    <h1 className="text-[1.2rem] monu md:text-[2.8rem] font-bold text-white text-center">Join the club to earn alpha returns</h1>
                    <button className="font-bold rounded-lg text-[#1B1B1B] bg-white px-10 text-xl py-2 mt-5 mb-2">Explore Now</button>
                    <div className=" font-bold text-white text-sm ">Exclusive opportunities</div>
                </div>
            </main>
        </>
    )
}

function RevenuBasedFinance() {

    return (
        <>
            <main className="w-screen min-h-screen bg-[#1B1B1B] text-white py-10 kanit px-[20px]">
                <div className="md:w-[70%] mx-auto py-10">

                    <h1 className="text-[2rem] sm:text-[2.9rem] md:text-[3.3rem] font-bold text-center  text-[#00FEF9] bound">Revenue Based Financing</h1>
                </div>
                {/* Cards */}
                <div className="flex justify-center items-center flex-wrap gap-5 mt-[30px] sm:mt-[60px]">
                    <RevenuBasedFinanceCard q="What does Revenu Based Finance means in context of movies?" ans="Product houses sell OTT or music rights to top OTTs and music labels" gradient1="from-[#536976] to-[#E7E9BB]" gradient2="from-[#003973] to-[#E5E5BE]"/>
                    <RevenuBasedFinanceCard q = "Why should i invest?" ans="I will let you know when I'll get the context" gradient2="from-[#008ba0] to-[#072f63]" gradient1="from-[#2b5876] to-[#4e4376]"/>
                </div>
            </main>
        </>
    )
}
function RevenuBasedFinanceCard({q,ans,gradient1,gradient2}) {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className={`h-[300px] w-[500px] flex flex-wrap relative overflow-hidden  transition-all ease-in-out delay-1000 rounded-3xl bg-gradient-to-l ${active ? gradient2 : gradient1}`}>
                <div className={`w-full h-full flex justify-center items-center text-center z-20 ${active == false ? "-translate-y-0 " : "-translate-y-full"} transition-all ease-in-out`}>
                    <p className="mx-20 text-2xl text-white  ">{q}</p>
                </div>
                <div className={`w-full h-full flex justify-center items-center text-center z-20 ${active == false ? "-translate-y-0 " : "-translate-y-full"} transition-all ease-in-out`}>
                    <p className="mx-20 text-2xl text-white  ">{ans}</p>
                </div>
                <img onClick={() => setActive(e => !e)} className={`absolute bottom-3 cursor-pointer right-3 z-50 ${active ? "rotate-0 " : "rotate-180"} transition-all ease-in-out`} width="48" height="48" src="https://img.icons8.com/nolan/64/expand-arrow.png" alt="expand-arrow" />
            </div>
        </>
    )
}
const Content = () => {
    return (
        <div style={{ "backgroundImage": `url('./z.webp')` }} className="rounded-3xl pt-4 pb-10 relative bg-[#1B1B1B]">

            <div className="flex mx-5 md:mx-10 py-10 rounded-3xl flex-col md:flex-row gap-2 backdrop-blur-xl mt-10">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img className="w-[80%] rounded-3xl" src="https://server.nucast.io/storage/v1/object/public/web-assets/lottery-site/lottery-llc-gif.gif" />
                </div>
                <div className="mx-5  w-full md:w-1/2 justify-center items-start flex flex-col my-3">

                    <h1 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-white bound ">

                        Dive into the world of LoveLace Club
                    </h1>
                    <div className="w-20 h-1 bg-white mt-3 " ></div>
                    <div className="flex flex-col gap-3 mt-3 md:mt-10 text-[#1B1B1B] kanit font-bold">
                        <a rel='noreferrer' target={"_blank"} href="https://drive.google.com/file/d/1Qw8tP81lHhzxFwr0IEQXOyy84UaRBgaD/view" className="bg-[#6DCBFE] cursor-pointer hover:scale-[1.02]  text-xs md:text-lg lg:text-xl golden w-max px-4 py-2 rounded-lg uppercase tracking-wider">Read Our Whitepaper</a>
                        <a rel='noreferrer' target={"_blank"} href="https://www.lovelaceclub.io/" className="bg-[#6DCBFE] kanit cursor-pointer hover:scale-[1.02]  text-xs md:text-lg lg:text-xl golden w-max px-4 py-2 rounded-lg uppercase tracking-wider">Lovelace Club</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
function FAQ() {
    const [active, setActive] = useState(-1);
    return (
        <>
            <main id='faqs' className="w-screen  py-20 bg-[#282828] flex flex-wrap text-white kanit px-[20px]">

                <h1 className="text-center text-[1.5rem] md:text-[3rem] font-bold mx-auto my-10 bound">Frequntly asked questions</h1>

                <div className="w-full h-full flex justify-center items-center flex-wrap gap-5 px-2">
                    <div className="w-[90%] bg-[#181818] px-5 py-5 rounded-xl ">
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-medium text-[1.3rem]">Register</p>
                                <button
                                    onClick={() => setActive(e => e > 0 ? -1 : 1)}
                                    className="text-4xl"
                                >{active == 1 ? "-" : "+"}</button>
                            </div>
                            {active == 1 &&
                                <p className="pt-2 font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                        </div>
                    </div>
                    <div className="w-[90%] bg-[#181818] px-5 py-5 rounded-xl ">
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-medium text-[1.3rem]">Register</p>
                                <button
                                    onClick={() => setActive(e => e > 0 ? -1 : 2)}
                                    className="text-4xl"
                                >{active == 2 ? "-" : "+"}</button>
                            </div>
                            {active == 2 &&
                                <p className="pt-2 font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                        </div>
                    </div>
                    <div className="w-[90%] bg-[#181818] px-5 py-5 rounded-xl ">
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-medium text-[1.3rem]">Register</p>
                                <button
                                    onClick={() => setActive(e => e > 0 ? -1 : 3)}
                                    className="text-4xl"
                                >{active == 3 ? "-" : "+"}</button>
                            </div>
                            {active == 3 &&
                                <p className="pt-2 font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                        </div>
                    </div>
                    <div className="w-[90%] bg-[#181818] px-5 py-5 rounded-xl ">
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-medium text-[1.3rem]">Register</p>
                                <button
                                    onClick={() => setActive(e => e > 0 ? -1 : 4)}
                                    className="text-4xl"
                                >{active == 4 ? "-" : "+"}</button>
                            </div>
                            {active == 4 &&
                                <p className="pt-2 font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}
function WhatNext() {
    const [active, setActive] = useState(-1);
    return (
        <>
            <FAQ />
            <main className="w-screen  pt-32 pb-20 bg-[#1B1B1B] kanit flex flex-wrap bg-gradient-to-t from-[#0697e5] via-[#282828] to-[#282828] ">
                <div className="md:w-1/2 w-full flex justify-start items-start px-10 md:px-20 flex-col md:pl-[100px] bound ">
                    <h1 className="text-[3rem] md:text-[4rem] font-bold text-white relative md:top-5 ">What's</h1>
                    <h1 className="text-[3rem] md:text-[4rem] font-bold text-white  ">next?</h1>
                    <button className="font-bold rounded-lg text-[#1B1B1B] bg-white px-10 text-xl py-2 mt-5 mb-2 hover:scale-110 transition-transform ease-in-out">Explore Now</button>
                    <div className=" font-bold text-white">Exclusive opportunities</div>
                </div>
                <div className="text-white md:w-1/2 w-full flex justify-center items-start   px-10 md:px-32 flex-col py-10">

                    <div className="w-full">
                        <div className=" flex justify-between items-center w-full ">
                            <p className="font-medium text-[1.5rem] md:text-[2rem]">Register</p>
                            <button
                                onClick={() => setActive(e => e > 0 ? -1 : 2)}
                                className="text-4xl"
                            >{active == 2 ? "-" : "+"}</button>
                        </div>
                        {active == 2 &&
                            <p className="font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                    </div>
                    <div className="w-full h-[1px] my-5 bg-white"></div>
                    <div className="w-full">
                        <div className=" flex justify-between items-center w-full">
                            <p className="font-medium text-[1.5rem] md:text-[2rem]">Join waitlist</p>
                            <button
                                onClick={() => setActive(e => e > 0 ? -1 : 3)}
                                className="text-4xl"
                            >{active == 3 ? "-" : "+"}</button>
                        </div>
                        {active == 3 &&
                            <p className="font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                    </div>
                    <div className="w-full h-[1px] my-5 bg-white"></div>
                    <div className="w-full">
                        <div className=" flex justify-between items-center w-full">
                            <p className="font-medium text-[1.5rem] md:text-[2rem]">Invest and reap returns</p>
                            <button
                                onClick={() => setActive(e => e > 0 ? -1 : 4)}
                                className="text-4xl"
                            >{active == 4 ? "-" : "+"}</button>
                        </div>
                        {active == 4 &&
                            <p className="font-medium text-md text-[#ffffff9f]">lorem ispiem sfjsl uioeh shlfsluojsl.fh lkshfe hlfyy shfslifyu hfikk hdhhdf kldhfh klfhddh  klh l lhkfhshs fjsflshf fkjfsf fhsf ff hfk ff f khfkfhfksdfhf kffik  fljkf </p>}
                    </div>
                </div>

            </main>
        </>
    )
}