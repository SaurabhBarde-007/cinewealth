"use client";
import React, { useState } from 'react'
import Button from './Button';
import toast from 'react-hot-toast';
import supabase from '@/config/supabaseClient';
const LoginSignUp = ({ setModelOpen }) => {
    const [active, setActive] = useState("register");
    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    async function handleRegister() {
        if (!email || !password) return;
        console.log("register in");
        setLoading(true);
        setDisable(true);
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        if (data.user != null) {
            toast.success(`Verification Mail Has been sent to ${email}! Please Verify`); 
        } else {
            setLoading(false);
            setError("Something went wrong!");
            return;
        }
        if (!data.user || error) {
            setLoading(false);
            return;
        }
        setEmail("");
        setPassword("")
        setLoading(false);
        setDisable(false);
        setModelOpen(false);   
    }
    async function handleLogin() {
        if (!email || !password) return;
        console.log("loggin in");
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (data) {
            if (data.user == null) {
                toast("No Such Data Found!");
            }
            else {
                toast.success("Successfully Logged In");
                setModelOpen(false);
            }
        }
        else {
            setError("Error Occured While Logging In");
            setModelOpen(false);
        }
        setEmail("");
        setPassword("")
        setLoading(false);
    }
    return (
        <>
            <div className='min-h-screen min-w-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[1201] rela kanit'>
                {/* Close Button */}
                <div className={`border-[1px] border-[#aaa] rounded-lg h-[${active === "register" ? "600px" : "500px"}] w-[500px] bg-black text-white p-8 flex flex-col gap-3 items-center relative`}>
                    <div className={`h-[30px] w-[30px] bg-[#aaa] rounded-full flex justify-center items-center absolute font-bold cursor-pointer top-2 right-2`}>
                        <div className='text-lg -mt-[2px]' onClick={() => setModelOpen(false)}>x</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='font-bold text-2xl bound'>Join BetterInvest</div>
                        <div className='font-bold text-xl text-[#aaa]'>Grow your wealth</div>
                    </div>
                    <div className='w-full h-[50px] bg-[#222] rounded-md flex items-center px-4'>
                        <div className={`flex-1 text-center py-1 font-bold  cursor-pointer rounded-md ${active === "register" && 'bg-[#000] text-[#06fff8]'}`}
                            onClick={() => setActive("register")}
                        >
                            Register
                        </div>
                        <div className={`flex-1 text-center py-1 font-bold  cursor-pointer rounded-md ${active === "login" && 'bg-[#000] text-[#06fff8]'}`}
                            onClick={() => setActive("login")}
                        >
                            Login
                        </div>
                    </div>

                    <div className='flex self-start'>
                        {
                            active === "register" ? (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-self-start font-semibold text-[#ccc]'>
                                        Email
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='w-[435px] bg-transparent border-[1px] border-[#aaa] p-3 rounded-md'
                                        placeholder='Enter Your Email to Register'
                                    />
                                    <div className='flex justify-self-start font-semibold text-[#ccc]'>
                                        Password
                                    </div>
                                    <input onChange={(e) => setPassword(e.target.value)} required value={password} type="password" className='w-[435px] bg-transparent border-[1px] border-[#aaa] p-3 rounded-md'
                                        placeholder='Enter Your password'
                                    />
                                </div>
                            ) : (
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-self-start font-semibold text-[#ccc]'>
                                        Email
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value)} required value={email} type="text" className='w-[435px] bg-transparent border-[1px] border-[#aaa] p-3 rounded-md'
                                        placeholder='Enter Your Email to Login'
                                    />
                                    <div className='flex justify-self-start font-semibold text-[#ccc]'>
                                        Password
                                    </div>
                                    <input onChange={(e) => setPassword(e.target.value)} required value={password} type="password" className='w-[435px] bg-transparent border-[1px] border-[#aaa] p-3 rounded-md'
                                        placeholder='Enter Your password'
                                    />
                                </div>
                            )
                        }
                    </div>
                    {isLoading && <img className="h-4 my-1" src="https://i.gifer.com/VAyR.gif" />}

                    {
                        active === "register" ? (
                            <div className='flex self-start mt-8 gap-4 cursor-pointer' onClick={() => setDisable(!disable)}>
                                <input type="checkbox" name="checkbox" id="" className='self-start mt-2 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500' checked={!disable} />
                                <label htmlFor="checkbox" className='cursor-pointer'>
                                    By signing up, you agree to T&C, Privacy policy, Risk disclosure & confirm to receive communications on WhatsApp, SMS & Email. You can stop anytime by replying stop.
                                </label>

                            </div>
                        ) : (
                            <div className="flex self-end text-[#06fff8] underline text-md cursor-pointer">
                                Forget Password?
                            </div>
                        )
                    }
                    {active === "register" ?
                        <div onClick={handleRegister}>
                            <Button text={"Register"} className={'w-full mt-3'} disable={disable} />
                        </div>
                        :
                        <div onClick={handleLogin}>
                            <Button text={"Login"} className={'w-full mt-3'} />
                        </div>
                    }

                </div>
            </div>
        </>

    )
}

export default LoginSignUp