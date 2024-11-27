import React from 'react'
import Title from '../../components/Titlecom/Title'

export default function Contant() {
    return (
        <section id='للتواصل' className='bg-white'>
            <div className='w-[95%] lg:w-[80%] mx-auto h-full pb-5 lg:pb-10 mt-10  '>
                <Title title={"للتواصل"} />

                <div className="md:flex justify-between items-center gap-4 mt-10">
                    <div className='w-full md:w-[70%] h-full'>
                        <form className='w-full'>
                            <input type='text' placeholder='الاسم' required className='block w-[80%]  bg-[#f3f3f3] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5' />
                            <input type='tel' placeholder='رقم التليفون' required className='block bg-[#f3f3f3]  w-[80%] mx-auto h-[50px]  rounded-lg placeholder:pr-4 placeholder:text-end focus:outline-none my-5' />
                            <textarea placeholder='رسالتك' required className='block w-[80%] mx-auto bg-[#f3f3f3]  h-[150px] resize-none  rounded-lg placeholder:pr-4 focus:outline-none my-5'>
                            </textarea>
                            <div className='w-[210px] h-[40px] mx-auto'>
                                <button type='submit' className='w-full h-full text-lg  bg-[#00BF62] text-white rounded-md'>
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-auto w-[70%] lg:w-[50%]" data-aos="fade-right">
                        <h1 className="text-center text-[28px] text-[#111] font-bold mb-4 ">مكان تواجدنا</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.7699589174092!2d31.35503856032574!3d31.03651663291147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79f24400aca5b%3A0x59a04a1fa0bbd6f8!2sTechno%20Club%20co-workspace!5e0!3m2!1sar!2seg!4v1732706739335!5m2!1sar!2seg"
                            title="Google map showing our office location"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-[300px] md:h-[500px] w-full border-none"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
