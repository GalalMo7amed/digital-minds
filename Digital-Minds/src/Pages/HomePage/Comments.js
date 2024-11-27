import React from 'react'
import Title from '../../components/Titlecom/Title'

import bgComments from '../../image/Comments/Comments.svg'
import messagelogo from '../../image/Comments/messagelogo.svg'

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
            <div className='w-[95%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"اراء اولياء الأمور"} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                    {
                        comments.map((item, index) => (
                            <div className='w-full h-full relative' key={index}>
                                <img src={bgComments} alt='bgComments' className='w-full h-full object-cover' />
                                <div className='absolute inset-5 flex justify-center items-center text-center  bottom-2'>
                                    <p className='w-[80%] lg:w-[82%] 3xl:w-[80%] text-[14px] lg:text-[11px] 3xl:text-[16px]'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='md:w-[60%] lg:w-[70%]  h-[400px] mx-auto flex justify-center items-center'>
                    <form className='w-full'>
                        <h1 className='text-[25px] text-center font-semibold text-[#111]'>اترك لنا تعليقك الجميل</h1>
                        <input type='text' placeholder='الاسم' required className='block w-[80%] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5' />
                        <textarea placeholder='رسالتك' required className='block w-[80%] mx-auto h-[150px] resize-none  rounded-lg placeholder:pr-4 focus:outline-none my-5'>
                        </textarea>
                        <div className='w-[210px] h-[40px] mx-auto'>
                            <button type='submit' className='w-full h-full text-lg  bg-[#00BF62] text-white rounded-md'>
                                ارسال
                            </button>
                        </div>

                    </form>
                </div>
                {/* <div className='md:flex justify-center items-center mt-5 gap-[40px] h-full'>

                    <div className='md:w-[55%] lg:w-[60%] hu__hu__  h-[400px]  mx-auto '>
                        <img src={messagelogo} className='h-full w-full' />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

