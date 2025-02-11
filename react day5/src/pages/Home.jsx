import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submit = () => {
        console.log(form);
        navigate('/welcome')
    }

    return (
        <div>
            <div className='w-[80%] mx-auto flex flex-col gap-3'>
                <div className="text-2xl text-blue-600 ">Registration Form</div>
                <input className='border border-blue-600 outline-none' type="text" name="name" onChange={handleChange} />
                <input className='border border-blue-600 outline-none' type="text" name="password" onChange={handleChange} />
                <button className='bg-blue-600 text-white rounded-xl py-2 px-3 mx-auto' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Home
