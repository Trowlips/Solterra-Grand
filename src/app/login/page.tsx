"use client";
import SignInButton from "@/components/Login/SignInButton";
import Image from "next/image";
import React from "react";

function page() {
    return (
        <div className="h-dvh w-screen bg-slate-900 overflow-hidden">
            <div className="h-full w-full relative flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://adaorfpiaidcjralrdcp.supabase.co/storage/v1/object/public/pictures/cable.jpg"
                        alt="Cable"
                        fill
                        className="w-full h-full object-cover opacity-40 blur-sm"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>
                <div className="relative z-10 w-full max-w-md p-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl flex flex-col gap-5">
                        <div>
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-serif text-white mb-2">
                                    Member Portal
                                </h2>
                                <p className="text-slate-300 text-sm">
                                    Access your sanctuary.
                                </p>
                            </div>

                            <form action="" className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={""}
                                        onChange={(e) =>
                                            console.log(e.target.value)
                                        }
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">
                                        Email Access Key
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={""}
                                        onChange={(e) =>
                                            console.log(e.target.value)
                                        }
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={false}
                                    className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-lg tracking-widest uppercase transition-all shadow-lg hover:shadow-teal-500/25 flex justify-center items-center"
                                >
                                    Enter Sanctuary
                                </button>
                            </form>
                        </div>

                        <hr className="text-gray-500"/>
                        <SignInButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
