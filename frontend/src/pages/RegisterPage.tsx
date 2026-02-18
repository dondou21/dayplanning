import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await api.post('/auth/register', { email, password });
            login(response.data.access_token);
            navigate('/dashboard');
        } catch (err) {
            if (isAxiosError(err)) {
                setError(err.response?.data?.message || 'Registration failed');
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">N</div>
                        <span className="text-xl font-bold text-white tracking-tight">NestAuth</span>
                    </Link>
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-slate-400">Join our community and start managing tasks</p>
                </div>

                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                    {error && (
                        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm rounded-xl">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-[1.02]"
                        >
                            Create Account
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-slate-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                        Sign in instead
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;