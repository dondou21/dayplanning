import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    Circle,
    Clock,
    TrendingUp,
    Plus,
    Calendar,
    ArrowUpRight
} from 'lucide-react';

const DashboardPage: React.FC = () => {
    const [stats] = useState({
        total: 12,
        completed: 8,
        pending: 4,
        completionRate: 66
    });

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-64px)] p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">Track your progress and manage your daily tasks.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2 shadow-sm">
                            <Calendar size={18} className="text-slate-400" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                        {
                            label: "Total Tasks",
                            value: stats.total,
                            icon: <Circle className="text-indigo-500" />,
                            trend: "+2 this week",
                            color: "indigo"
                        },
                        {
                            label: "Completed",
                            value: stats.completed,
                            icon: <CheckCircle2 className="text-emerald-500" />,
                            trend: "66% success rate",
                            color: "emerald"
                        },
                        {
                            label: "Pending",
                            value: stats.pending,
                            icon: <Clock className="text-amber-500" />,
                            trend: "Average 2h/task",
                            color: "amber"
                        },
                        {
                            label: "Efficiency",
                            value: `${stats.completionRate}%`,
                            icon: <TrendingUp className="text-purple-500" />,
                            trend: "+5% from last month",
                            color: "purple"
                        }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-2xl group-hover:scale-110 transition-transform`}>
                                    {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
                                </div>
                                <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-500" />
                                </div>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mb-1 uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
                            <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">{stat.trend}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Upcoming Tasks</h2>
                            <Link to="/todos" className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">View All</Link>
                        </div>
                        <div className="p-4">
                            <div className="space-y-2">
                                {[
                                    { title: "Review brand guidelines", time: "Today, 2:00 PM", category: "Design" },
                                    { title: "Weekly team sync", time: "Tomorrow, 10:00 AM", category: "Meeting" },
                                    { title: "Update project documentation", time: "Feb 20, 2026", category: "Work" }
                                ].map((task, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl transition-all cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 transition-colors">
                                                <Circle size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-slate-200">{task.title}</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">{task.time}</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full">
                                            {task.category}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-xl shadow-indigo-500/20">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-3 italic">Be More Productive</h2>
                                <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                                    Organize your life with <span className="font-bold">MyTodo</span> Premium. Get advanced filters, priority support, and much more.
                                </p>
                                <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-slate-100 transition-all transform active:scale-95 shadow-lg">
                                    Upgrade Now
                                </button>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl transition-transform group-hover:scale-125 duration-700"></div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                                <Plus size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Create New Task</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Quickly add a new task to your list and stay organized.</p>
                            <Link to="/todos" className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 rounded-xl transition-all">
                                Go to Tasks
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
