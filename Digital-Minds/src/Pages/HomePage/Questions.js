import Title from "../../components/Titlecom/Title";

import Robot from '../../image/Questions/cute-ai-robot.svg'

export default function Questions() {
    return (
        <section>
            <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"أسئلة شائعة"} />

                <div className="flex justify-center items-center gap-4">
                    <div className="w-[450px] h-[450px]">
                        <img src={Robot} alt="Robot" className="w-full h-full hu__hu__" />
                    </div>
                </div>
            </div>
        </section>
    )
}
