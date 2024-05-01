import React, { useState } from 'react'
import Avatar from 'react-avatar';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [profileic, setProfileic] = useState('/EmptyUserProfileImage.jpg')

    const toggleLogin = () => {
        setIsLogin(prevIsLogin => !prevIsLogin);
    }

    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSignup = (e) => {
        e.preventDefault();
    }

    const handleProfilePicUpload = (e) => {
        // console.log('------------------------');
        console.log(e.target.files[0]);
        setProfileic(
            URL.createObjectURL(e.target.files[0])
        );
    }

    return (
        <div className='p-4 flex flex-col items-center justify-center h-screen'>
            {isLogin ? (<>
                <p className='text-3xl mb-4 border-b-2 border-violet-600 p-3'>Login</p>
                <form onSubmit={handleLogin}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Email :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="email" placeholder='Enter your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Password :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="password" placeholder='Enter your password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn btn-block mt-4'
                            type='submit'
                        >Login
                        </button>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button className='btn text-slate-400 btn-link btn-block'
                            onClick={toggleLogin}
                        >{"Don't"} have an account ?
                        </button>
                    </div>
                </form>
            </>
            ) : (<> {/* -------------------------------------------------------------- */}
                <p className='text-3xl mb-4 border-b-2 border-violet-600 py-3 px-20'>Signup</p>
                <form onSubmit={handleSignup}>
                    <div className='flex justify-center my-1 '>
                        <label
                            htmlFor="profilepicInput"
                            className='rounded-full z-10 bg-black tooltip tooltip-info tooltip-bottom cursor-pointer relative'
                            data-tip="Change Picture"
                        >
                            <input type="file" name="" id="profilepicInput"
                                onChange={handleProfilePicUpload}
                                className="hidden"
                            />
                            <Avatar
                                className='hover:opacity-90 object-cover transition-opacity'
                                size={100} round="200px"
                                src={profileic}
                            />
                        </label>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Name :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="text" placeholder='Enter your Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Email :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="email" placeholder='Enter your email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Password :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="password" placeholder='Enter your password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Bio :
                            </span>
                        </label>
                        <input
                            className='w-full input input-bordered h-10 focus:outline-none'
                            type="text" placeholder='Enter your bio'
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn btn-block mt-4'
                            type='submit'
                        >Sign up
                        </button>
                    </div>
                    <div className='flex justify-center mt-3'>

                        <button className='btn text-slate-400 btn-link btn-block'
                            onClick={toggleLogin}
                        >Already have an account ?
                        </button>
                    </div>
                </form>
            </>
            )}
        </div>
    )
}

export default Login


