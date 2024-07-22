import React from 'react'

const Input = ({
  id, 
  label,
  type="text",
  disabled,
  // formatPrice,
  // register,
  // required,
  // errors
}) => {
  return (
    <div className='relative w-full'>
      {/* {formatPrice &&
        <span className='absolute text-neutral-700 top-5 left-2'>₩</span>
      } */}
      <input 
        id={id}
        disabled={disabled}
        // {...register(id, {required})}
        type={type}
        className={`
          w-full
          p-4
          pt-6
          border-2
          font-light
          bg-white
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          
        `}
        />
        <label className={`
          absolute
          text-md
          duration-150
          trasform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          ${FormData ? 'left-6': 'left-4'}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          
        `}>
          {label}
        </label>
    </div>
  )
}
// ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
// ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
// ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black' }
export default Input