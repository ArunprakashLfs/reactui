import creative from '../../assets/6342523.jpg'
import thinking from '../../assets/—Pngtree—two chess pieces chess black_5983322.png'
import working from '../../assets/14620625_5484597.jpg'
const Details = ()=>{
    return(
        <div>
            <h2 className='text-[25px] font-semibold'>The Value is about you and Yourself</h2>
            <div className='grid grid-cols-3 mt-[1rem] gap-[7rem]'>
               <div className='rounded-[10px] shadow-lg p-[0.6rem] hover:bg-[#eeedf7]'>
                    <div className='flex gap-[1rem]  p-[0.8rem]'>
                        <div className='text-14px'>
                            <img className='h-[3rem] w-[3rem]' src={creative} alt='creative' />
                        </div>
                        <span className='font-semibold test-16px'>Creative</span>
                    </div>
                    <p className='font-semibold opacity-[0.7] text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sed?</p>
               </div>
                <div className='rounded-[10px] shadow-lg p-[1rem] hover:bg-[#eeedf7]'>
                    <div className='flex items-center'>
                        <div className='gap-[1rem] p-[1rem]'>
                            <img className='h-[3rem] w-[4rem]' src={thinking} alt='thinking' />
                        </div>
                        <span className='font-semibold test-16px'>Thinking</span>
                    </div>
                    <p className='text-[14px] font-semibold opacity-[0.7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea?</p>
                </div>
                <div className='rounded-[10px] hover:bg-[#eeedf7] shadow-lg p-[1rem]'>
                    <div className='flex items-center'>
                        <div className='gap-[1rem]  p-[1rem]'>
                            <img className='h-[4rem] w-[5rem]' src={working} alt='thinking' />
                        </div>
                        <span className='font-semibold test-16px'>Working</span>
                    </div>
                    <p className='text-[14px] font-semibold opacity-[0.7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea?</p>
                </div>
            </div>
        </div>
    )
}
export default Details;