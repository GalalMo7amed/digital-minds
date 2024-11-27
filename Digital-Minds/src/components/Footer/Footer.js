import { Link } from 'react-scroll'

import Logo from '../../image/Footer/Logo.svg'

import icon1 from '../../image/Footer/watsicon.svg'
import icon2 from '../../image/Footer/faceicon.svg'
import icon3 from '../../image/Footer/instaicon.svg'

const Social = [
  { icon: icon1 },
  { icon: icon2 },
  { icon: icon3 },
]

const Links = [
  { name: "الرئيسيه", url: "الرئيسيه" },
  { name: "إحنا مين؟", url: "إحنا مين؟" },
  {
    name: "لماذا ديجيتال مايند", url: "لماذاديجيتالمايند"
  },
  { name: "للحجز" },
  { name: "للتواصل معانا" },
]
export default function Footer() {
  return (
    <footer className='bg-[#111] h-[500px]'>
      <div className='grid w-[80%] pt-[50px] mx-auto lg:grid-cols-3 '>
        <div className="w-[100%]">
          <img src={Logo} className='mx-auto' />
          <p className='text-white text-center py-5'>
            إحنا فريق متخصص في تدريب الأطفال والشباب على المهارات الرقمية زي البرمجة، والروبوت، والذكاء الاصطناعي. هدفنا نجهز الجيل الجديد ليكون قادة في العالم الرقمي من خلال تعليم ممتع وعملي.
          </p>
          <div className='flex justify-center items-center gap-[20px]'>
            {
              Social.map((item, index) => (
                <img src={item.icon} key={index} />
              ))
            }
          </div>
        </div>

        <div className='w-[100%] text-center '>
          <h1 className='text-[30px] text-[#00BF62] font-bold'>
            صفحات تهمك
          </h1>
          <ul className='pt-5'>
            {
              Links.map((item, index) => (
                <li key={index} className="text-[24px] py-2 font-semibold text-white">
                  <Link to={item.url} smooth={true} duration={1000} className='cursor-pointer'>
                    {item.name}
                  </Link>
                </li>
              ))
            }

          </ul>
        </div>

        <div className='w-[100%] text-center '>
          <h1 className='text-[25px] text-white font-bold'>
            الشروط والاحكام
          </h1>
          <h1 className='text-[25px] text-white py-5 font-bold'>
            سياسة الخصوصية
          </h1>
          <h1 className='text-[25px] text-white font-bold'>
            سياسة استرداد الرسوم
          </h1>
        </div>

      </div>
    </footer>
  )
}
