import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
                email: email,
                password: password
            });
            // console.log("Response", response);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userEmail', response.data.email);
                navigate('/dashboard');
            }
        }
        catch (err) {
            setError('Invalid email or password. Please use the credentials provided in the assignment document.');
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
                <div className="text-center my-6">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Please enter your details to login
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email </label>
                        <input
                            type="email"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="user1@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1B5E3A] hover:bg-[#14452b] text-white font-semibold py-3 rounded-lg transition duration-200 disabled:bg-[#14452b] hover:cursor-pointer"
                    >
                        {loading ? 'Login...' : 'Login'}
                    </button>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                            {error}
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
};

export default Login;