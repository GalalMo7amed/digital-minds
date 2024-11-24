import Title from '../../components/Titlecom/Title'
import img1 from '../../image/certificate/Frame 20.svg'

const imegas = [
    {
        img: img1
    },
    {
        img: img1
    },
    {
        img: img1
    },
    {
        img: img1
    },
]
export default function Certificate() {
    return (
        <section>
            <div className='w-[90%] lg:w-[80%] mx-auto mt-10   '>
                <Title title={"اعتمادتنا"} />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0'>
                {
                    imegas.map((item, index) => (
                        <div className='w-[80%] lg:w-[220px] mx-auto' key={index}>
                            <img src={item.img} className='w-full h-full' alt='Certificate' />
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
