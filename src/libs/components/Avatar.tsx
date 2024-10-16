import React from "react"

type AvatarProps = {
  direction?: 'horizontal' | 'vertical'
  image: string,
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

const directionMapping = {
  horizontal: 'flex-row',
  vertical: 'flex-col'
}

const sizes = {
  sm: 'size-3',
  md: 'size-7',
  lg: 'size-9'
}

export { Avatar }

function Avatar(
  {
    direction = 'horizontal',
    image,
    alt,
    size = 'md',
    children
  }: React.PropsWithChildren<AvatarProps>) {
  return (

    <div
      className={`flex items-center gap-2 text-ellipsis overflow-hidden ${directionMapping[direction]}`}
    >
      <img alt={alt} src={image} className={`rounded-full ${sizes[size]}`} />
      {children}
    </div>
  )
}