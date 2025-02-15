import React, { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
})

const handleChange = (e) => {
  const { name, value } = e.target

  setData((preve) => {
      return {
          ...preve,
          [name]: value
      }
  })
}

const handleSubmit = async(e)=>{
  e.preventDefault()

  if(data.password !== data.confirmPassword){
      toast.error(
          "password and confirm password must be same"
      )
      return
  }
}
  return (
    <section className='w-full container mx-auto px-2'>
      <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
        <p>Welcome to Big Bazar</p>
        <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
        <div className='grid gap-1'>
                        <label htmlFor='name'>Name :</label>
                        <input
                            type='text'
                            id='name'
                            autoFocus
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                        />
                    </div>
        </form>
      </div>
    </section>
  )
}

export default Register
