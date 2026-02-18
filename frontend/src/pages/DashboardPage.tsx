import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const [stats] = useState({
        todos: 12,
        completed: 8,
        pending: 4
    });

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">N</div>
                    <span className="text-xl font-bold tracking-tight">NestAuth</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-xl text-white font-medium transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Dashboard
                    </Link>
                    <Link to="/todos" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-700/50 hover:text-white rounded-xl transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="CheckCircle" /><circle cx="12" cy="12" r="10" /></svg>
                        My Todos
                    </Link>
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all font-medium"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-10">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                        <p className="text-slate-400">Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold border-2 border-slate-600">JD</div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </div>
                            <span className="text-indigo-400 text-sm font-bold">+12%</span>
                        </div>
                        <p className="text-slate-400 font-medium mb-1">Total Tasks</p>
                        <p className="text-3xl font-bold">{stats.todos}</p>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="text-emerald-400 text-sm font-bold">66% Rate</span>
                        </div>
                        <p className="text-slate-400 font-medium mb-1">Completed</p>
                        <p className="text-3xl font-bold">{stats.completed}</p>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-amber-400 text-sm font-bold">Low Priority</span>
                        </div>
                        <p className="text-slate-400 font-medium mb-1">Pending</p>
                        <p className="text-3xl font-bold">{stats.pending}</p>
                    </div>
                </div>

                {/* Quick Action */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-3">Maximize Your Productivity</h2>
                        <p className="text-indigo-100/80 mb-6 max-w-md">Try our new organization tools to keep track of your team's progress in real-time.</p>
                        <Link to="/todos" className="inline-block px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all transform group-hover:scale-105">
                            Manage Tasks
                        </Link>
                    </div>
                    {/* Background blob animation - CSS only */}
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-all duration-700"></div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;