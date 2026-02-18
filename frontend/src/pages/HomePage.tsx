import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col justify-center items-center px-4">
            <div className="max-w-4xl text-center">
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                    NestJS Auth Demo
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    A premium full-stack authentication system built with NestJS, Prisma, React, and Tailwind CSS.
                    Experience seamless security and high-performance todo management.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        to="/register"
                        className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/login"
                        className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 flex items-center justify-center"
                    >
                        Sign In
                    </Link>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Secure Auth</h3>
                    <p className="text-gray-400">JWT-based authentication with protected routes and secure session management.</p>
                </div>

                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fast Performance</h3>
                    <p className="text-gray-400">Optimized backend with NestJS and Prisma for lightning-fast database operations.</p>
                </div>

                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-pink-500/50 transition-all group">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Task Management</h3>
                    <p className="text-gray-400">Organize your workflow with a sleek, responsive todo application interface.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
