import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, ArrowRight, Star } from 'lucide-react';

import heroImg from '../assets/images/hero_productivity.png';
import taskTrackingImg from '../assets/images/feature_task_tracking.png';
import syncImg from '../assets/images/feature_sync.png';

const HomePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-6 animate-fade-in">
                            <Star size={16} fill="currentColor" />
                            <span>Voted #1 Task Management App</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
                            Master Your Day with <span className="text-indigo-600 dark:text-indigo-400">MyTodo</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                            The smartest way to manage your tasks. Stay organized, focused, and achieve your goals faster with our intuitive todo list application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                                Get Started Free <ArrowRight size={20} />
                            </Link>
                            <Link to="/login" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
                                Sign In
                            </Link>
                        </div>
                    </div>

                    <div className="mt-20 relative max-w-5xl mx-auto">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src={heroImg}
                                alt="Modern Workspace Productivity"
                                className="w-full h-auto object-cover max-h-[600px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Everything you need to succeed</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Powerful features to help you manage work and life without breaking a sweat.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                image: taskTrackingImg,
                                title: "Task Tracking",
                                description: "Effortlessly create, update, and track your todos with our streamlined interface.",
                                accent: "emerald"
                            },
                            {
                                image: syncImg,
                                title: "Real-time Sync",
                                description: "Your tasks are always where you need them, syncing instantly across all your devices.",
                                accent: "indigo"
                            },
                            {
                                icon: <Shield className="text-blue-500" size={32} />,
                                title: "Secure & Private",
                                description: "Your data is protected with industry-standard encryption and secure authentication.",
                                accent: "blue"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden flex flex-col group">
                                <div className="h-48 overflow-hidden relative">
                                    {feature.image ? (
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                    )}
                                    <div className={`absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg text-blue-500`}>
                                        {feature.image ? <CheckCircle size={24} className="text-emerald-500" /> : feature.icon}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready to transform your productivity?</h2>
                            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">Join thousands of users who have already simplified their lives with MyTodo.</p>
                            <Link to="/register" className="inline-block bg-white text-indigo-600 hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl">
                                Start Your Journey Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
