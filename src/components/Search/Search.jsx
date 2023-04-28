import {AiOutlineSearch} from 'react-icons/ai'
import {CiCircleRemove} from 'react-icons/ci'
import {BiLocationPlus} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'

const Search = ()=>{
    return(
        <div className="search grid gap-10 bg-greyish rounded-[10px] p-[2rem]">
            <form>
                <div className='flex items-center justify-between rounded-[10px] p-5 bg-white shadow-lg shadow-greyish-500'>
                    <div className='searchOption flex items-center gap-2 '>
                        <AiOutlineSearch className='icon text-[25px] hover:text-blueColor'/>
                        <input type="text" placeholder="Search by jobs" className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove  className='icon text-[30px] text-[#a5a6a6] hover:text-blueColor'/>
                    </div>
                    <div className='searchlocation flex items-center gap-[2px]'>
                        {/* <AiOutlineSearch /> */}
                        <BiLocationPlus className='icon text-[25px] hover:text-blueColor'/>
                        <input type="text" placeholder="Search by location"  className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove className='icon text-[30px] text-[#a5a6a6] hover:text-blueColor'/>
                    </div>
                    <div className='searchcompany flex items-center gap-[2px]'>
                        {/* <AiOutlineSearch /> */}
                        <AiOutlineHome className='icon text-[25px] hover:text-blueColor'/>
                        <input type="text" placeholder="Search by company" className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove className='icon text-[30px] text-[#a5a6a6] hover:text-blueColor' />
                    </div>
                    <button className='bg-blueColor h-full p-2 px-10 cursor-pointer text-greyish rounded-[5px] hover:bg-blue-300'>Search</button>
                </div>
            </form>
            <div className='flex items-center justify-center gap-10 p-10px '>
                <div className='p-10px flex items-center'>
                    <label htmlFor='jobrole' className='text-[#808080] font-semibold'>JobRole:</label>
                    <select id='jobrole' className='bg-white rounded-[4px] px-4 py-1'>
                        <option>FrontEnd Developer</option>
                        <option>FullStack Developer</option>
                        <option>Backend Developer</option>
                        <option>Network Engineer</option>
                        <option>Ui/Ux Developer</option>
                    </select>
                </div>
                <div className='p-10px flex items-center'>
                <label htmlFor='jobExperience' className='text-[#808080] font-semibold'>Proficiency:</label>
                    <select id='jobExperience' className='bg-white rounded-[4px] px-4 py-1'>
                        <option>Senior</option>
                        <option>Beginer</option>
                        <option>Intermediate</option>
                        <option>Student</option>
                        {/* <option>Ui/Ux Developer</option> */}
                    </select>
                </div>
                <div className='p-10px flex items-center'>
                <label htmlFor='jobTime' className='text-[#808080] font-semibold'>JobType:</label>
                    <select id='jobTime' className='bg-white rounded-[4px] px-4 py-1'>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Weekend Only</option>
                        <option>WeekDays Only</option>
                        {/* <option>Ui/Ux Developer</option> */}
                    </select>
                </div>
                <span className='text-[#a1a1a1] p-2 rounded-[5px] cursor-pointer hover:bg-blueColor hover:text-white'>Clear</span>
            </div>
        </div>
    )
}
export default Search;