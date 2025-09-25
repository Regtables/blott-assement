import { CircleArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type ReadMoreButtonProps = {
  url: string
}

const ReadMoreButton = ({ url }: ReadMoreButtonProps) => {
  return (
    <Link href={url} target='_blank' className='group'>
      <button className='flex h-[30px] gap-1 cursor-pointer'>
        <div className='border-b border-white pb-[7px]'>
          Read Article
        </div>

        <CircleArrowUp className='rotate-45 gap-1.5 group-hover:mt-2 transition-all duration-500' />
      </button>
    </Link>
  )
}

export default ReadMoreButton