import {AiOutlineSearch} from 'react-icons/ai'
import {CiCircleRemove} from 'react-icons/ci'
import {BiLocationPlus} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'

const Search = ()=>{
    return(
        <div className="search grid gp-10 bg-greyish rounded-[10px] p-[2rem]">
            <form>
                <div className='flex items-center justify-between p-5 bg-white shadow-greyish-500 gap-[px]'>
                    <div className='searchOption flex items-center bg-white '>
                        <AiOutlineSearch className='icon text-[25px]'/>
                        <input type="text" placeholder="Search by jobs" className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove />
                    </div>
                    <div className='searchlocation flex items-center gap-2'>
                        {/* <AiOutlineSearch /> */}
                        <BiLocationPlus className='icon text-[25px]'/>
                        <input type="text" placeholder="Search by location"  className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove />
                    </div>
                    <div className='searchcompany flex items-center bg-white '>
                        {/* <AiOutlineSearch /> */}
                        <AiOutlineHome className='icon text-[25px]'/>
                        <input type="text" placeholder="Search by company" className='focus:outline-none w-[100%] bg-transparent text-blue-500'/>
                        <CiCircleRemove />
                    </div>
                <div>

                </div>
                </div>
            </form>
        </div>
    )
}
export default Search;