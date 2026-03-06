import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, ArrowRight, Star } from 'lucide-react';

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

                    <div className="mt-20 relative max-w-5xl mx-auto hidden lg:block">
                        {/* Center large hero icon */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl animate-pulse"></div>
                        
                        <div className="relative h-64 flex items-center justify-center">
                            {/* Main Center Icon */}
                            <div className="relative z-10 w-32 h-32 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-indigo-500/20 border border-slate-100 dark:border-slate-800 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                <CheckCircle size={64} className="text-indigo-600 dark:text-indigo-400" />
                                
                                {/* Orbiting rings */}
                                <div className="absolute inset-0 border-2 border-indigo-100 dark:border-indigo-900/30 rounded-[2rem] scale-[1.3] opacity-50"></div>
                                <div className="absolute inset-0 border border-purple-100 dark:border-purple-900/20 rounded-[2rem] scale-[1.6] opacity-30 rotate-12"></div>
                            </div>

                            {/* Floating Icons Around */}
                            <div className="absolute top-0 text-amber-400 animate-bounce" style={{ left: '25%', animationDelay: '0ms', animationDuration: '3s' }}>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-amber-500/10 border border-slate-100 dark:border-slate-700">
                                    <Star size={28} className="fill-current" />
                                </div>
                            </div>
                            
                            <div className="absolute bottom-4 text-emerald-500 animate-bounce" style={{ left: '15%', animationDelay: '1000ms', animationDuration: '4s' }}>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-emerald-500/10 border border-slate-100 dark:border-slate-700">
                                    <Shield size={24} />
                                </div>
                            </div>

                            <div className="absolute top-8 text-blue-500 animate-bounce" style={{ right: '20%', animationDelay: '500ms', animationDuration: '3.5s' }}>
                                <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 dark:border-slate-700">
                                    <Clock size={32} />
                                </div>
                            </div>
                            
                            <div className="absolute bottom-10 right-1/4 translate-x-12 text-purple-500 animate-pulse">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg shadow-purple-500/10 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>
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
                                icon: <CheckCircle className="text-emerald-500" />,
                                title: "Task Tracking",
                                description: "Effortlessly create, update, and track your todos with our streamlined interface."
                            },
                            {
                                icon: <Clock className="text-indigo-500" />,
                                title: "Real-time Sync",
                                description: "Your tasks are always where you need them, syncing instantly across all your devices."
                            },
                            {
                                icon: <Shield className="text-blue-500" />,
                                title: "Secure & Private",
                                description: "Your data is protected with industry-standard encryption and secure authentication."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                                    {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
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
