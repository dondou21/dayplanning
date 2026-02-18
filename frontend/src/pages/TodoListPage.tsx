import { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoListPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await api.get('/todos');
            setTodos(response.data);
        } catch (err) {
            console.error('Failed to fetch todos', err);
        }
    };

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/todos', { title: newTodo });
            setTodos([...todos, response.data]);
            setNewTodo('');
        } catch (err) {
            console.error('Failed to add todo', err);
        }
    };

    const toggleTodo = async (id: number, completed: boolean) => {
        try {
            await api.patch(`/todos/${id}`, { completed: !completed });
            setTodos(todos.map(t => t.id === id ? { ...t, completed: !completed } : t));
        } catch (err) {
            console.error('Failed to update todo', err);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await api.delete(`/todos/${id}`);
            setTodos(todos.filter(t => t.id !== id));
        } catch (err) {
            console.error('Failed to delete todo', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans flex">
            {/* Sidebar (Same as Dashboard) */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">N</div>
                    <span className="text-xl font-bold tracking-tight">NestAuth</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-700/50 hover:text-white rounded-xl transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Dashboard
                    </Link>
                    <Link to="/todos" className="flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-xl text-white font-medium transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
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
            <main className="ml-64 flex-1 p-10">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">My Todos</h1>
                        <p className="text-slate-400">Manage your daily tasks efficiently.</p>
                    </div>
                </header>

                <div className="max-w-3xl">
                    {/* Add Todo Form */}
                    <form onSubmit={handleAddTodo} className="flex gap-4 mb-10">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-xl"
                            placeholder="Add a new task..."
                            required
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 rounded-2xl shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-[1.02]"
                        >
                            Add Task
                        </button>
                    </form>

                    {/* Todo List */}
                    <div className="space-y-4">
                        {todos.length === 0 ? (
                            <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-dashed border-slate-700">
                                <p className="text-slate-500 text-lg">No tasks found. Start by adding one!</p>
                            </div>
                        ) : (
                            todos.map((todo) => (
                                <div
                                    key={todo.id}
                                    className={`group flex items-center justify-between p-5 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all shadow-lg ${todo.completed ? 'opacity-60' : ''}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => toggleTodo(todo.id, todo.completed)}
                                            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-600 hover:border-indigo-500'}`}
                                        >
                                            {todo.completed && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                        </button>
                                        <span className={`text-lg font-medium ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                                            {todo.title}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TodoListPage;