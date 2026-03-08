import React, { useEffect, useState } from "react";
import { CheckCircle2, Trash2, Plus, ListTodo, AlertCircle } from "lucide-react";
import api from "../api";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoListPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [priority, setPriority] = useState<string>('medium');
    const [category, setCategory] = useState<string>('General');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await api.get('/todos');
            setTodos(response.data);
        } catch (err) {
            console.error('Failed to fetch todos', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        setIsSubmitting(true);
        try {
            const response = await api.post('/todos', { 
                title: newTodo,
                priority,
                category
            });
            setTodos([response.data, ...todos]);
            setNewTodo('');
            setPriority('medium');
            setCategory('General');
        } catch (err) {
            console.error('Failed to add todo', err);
        } finally {
            setIsSubmitting(false);
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

    const getPriorityColor = (p: string) => {
        switch (p) {
            case 'high': return 'text-rose-500 bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800';
            case 'medium': return 'text-amber-500 bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800';
            default: return 'text-slate-500 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700';
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-64px)] p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/20 mb-4">
                        <ListTodo size={28} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Tasks</h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Manage, organize and conquer your daily goals.</p>
                </header>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                    {/* Add Todo Form */}
                    <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                        <form onSubmit={handleAddTodo} className="space-y-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm font-medium"
                                    placeholder="What needs to be done?"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <select 
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                                >
                                    <option value="low">Low Priority</option>
                                    <option value="medium">Medium Priority</option>
                                    <option value="high">High Priority</option>
                                </select>
                                <select 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                                >
                                    <option value="General">General</option>
                                    <option value="Work">Work</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Urgent">Urgent</option>
                                </select>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !newTodo.trim()}
                                    className={`flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2 ${isSubmitting || !newTodo.trim() ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>
                                            <Plus size={20} />
                                            <span>Add Task</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Todo List Content */}
                    <div className="p-4 sm:p-8">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full mb-4"></div>
                                <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                                <div className="h-3 w-48 bg-slate-200 dark:bg-slate-800 rounded"></div>
                            </div>
                        ) : todos.length === 0 ? (
                            <div className="text-center py-20 px-6">
                                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300 dark:text-slate-600">
                                    <ListTodo size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">No tasks yet</h3>
                                <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                                    Your task list is empty. Add your first task above to get started!
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {todos.map((todo) => (
                                    <div
                                        key={todo.id}
                                        className={`group flex items-center justify-between p-4 sm:p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 hover:bg-indigo-50/10 dark:hover:bg-indigo-900/10 transition-all shadow-sm ${todo.completed ? 'opacity-60' : ''}`}
                                    >
                                        <div className="flex items-center gap-4 flex-1 mr-4">
                                            <button
                                                onClick={() => toggleTodo(todo.id, todo.completed)}
                                                className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${todo.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-transparent'}`}
                                            >
                                                <CheckCircle2 size={18} />
                                            </button>
                                            <div className="flex flex-col">
                                                <span className={`text-base sm:text-lg font-bold transition-all break-words ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>
                                                    {todo.title}
                                                </span>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className={`px-2 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${getPriorityColor((todo as any).priority)}`}>
                                                        {(todo as any).priority}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">
                                                        {(todo as any).category || 'General'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteTodo(todo.id)}
                                            className="flex-shrink-0 p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all md:opacity-0 group-hover:opacity-100"
                                            title="Delete Task"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer Info */}
                    {!isLoading && todos.length > 0 && (
                        <div className="px-8 py-4 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                                {todos.filter(t => !t.completed).length} Tasks remaining
                            </p>
                            <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                <AlertCircle size={14} />
                                <span>Tip: Click icons to toggle</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoListPage;
