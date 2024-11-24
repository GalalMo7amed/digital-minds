import React from 'react'
import Title from '../../components/Titlecom/Title'

import bgComments from '../../image/Comments/Comments.svg'

const comments = [
    {
        title: "من أفضل الأماكن الي اتعلمت فيها برمجه و تعامل المدربيين جميل جداا"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
]
export default function Comments() {
    return (
        <section>
            <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"اراء اولياء الأمور"} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                    {
                        comments.map((item, index) => (
                            <div className='w-full h-full relative'>
                                <img src={bgComments} alt='bgComments' className='w-full h-full object-cover' />
                                <div className='absolute inset-5 flex justify-end items-center text-center  bottom-2'>
                                    <p className='w-[80%] lg:w-[82%] 3xl:w-[80%] text-[14px] lg:text-[11px] 3xl:text-[16px]'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    }




                </div>
            </div>
        </section>
    )
}

