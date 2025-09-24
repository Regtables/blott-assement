import { CircleArrowUp } from 'lucide-react'
import React from 'react'

type Props = {}

const ReadMoreButton = (props: Props) => {
  return (
    <button className='flex h-[30px] gap-1 cursor-pointer'>
      <div className='border-b border-white pb-[7px]'>
        Read Article
      </div>

      <CircleArrowUp className='rotate-45 gap-1.5' />
    </button>
  )
}

export default ReadMoreButton