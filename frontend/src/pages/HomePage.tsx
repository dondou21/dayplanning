import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Star, Github, Twitter, Linkedin, Mail } from 'lucide-react';

import heroImg from '../assets/images/hero_productivity.png';
import taskTrackingImg from '../assets/images/feature_task_tracking.png';
import syncImg from '../assets/images/feature_sync.png';

const HomePage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-20 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Modern Workspace"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                            Master Your Day with <span className="text-indigo-600 dark:text-indigo-400">MyTodo</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            The smartest way to manage your tasks. Stay organized, focused, and achieve your goals faster with our intuitive todo list application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group">
                                Get Started Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/login" className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-slate-200 dark:border-slate-700 text-center shadow-lg">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Blobs (Overlapping Background) */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
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
