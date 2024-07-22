import React from 'react'
// import IconName from 'react-icons'
const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon
}) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`
          relative
          diabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          py-3
          trainsition
          w-full
          ${outline ? 'bg-white:' : 'bg-orange-500'}
          ${outline ? 'border-black' : 'border-orange-500'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'text-sm' : 'text-base'}
          ${small ? 'font-light' : 'font-semibold'}
          ${small ? 'border-[1px]' : 'border-2'}
          `}
          
    >
      {/* {icon && (
        <Icon
          size={24}
          className='absolute left-4 top-3'
        ></Icon>
      )} */}
      {label}
      
      </button>
  )
}

export default Button