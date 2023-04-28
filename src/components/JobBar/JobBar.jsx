import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../assets/honda.png'
import logo2 from '../../assets/yamaha.png'
import logo3 from '../../assets/huawei.png'

const JobBar = ()=>{
    const Data = [
        {
            'id': 1,
            title: 'Web Developer',
            image: logo1,
            time: 'now',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non?',
            'company':'Honda ltd',
            'location': 'japan',
        },
        {
            id: 2,
            title:'UI/UX Developer',
            image: logo2,
            time: '3Hrs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',

        },
        {
            id: 3,
            title:'Network Engineer',
            image: logo3,
            time: '1Hr',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Huawei ltd',
            'location':'China',
        },
        {
            id: 4,
            title:'UI/UX Developer',
            image: logo1,
            time: '12Hrs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 5,
            title:'UI/UX Developer',
            image: logo1,
            time: '10Hrs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 6,
            title:'UI/UX Developer',
            image: logo2,
            time: 'now',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'IBM ltd',
            'location':'America',
        },
        {
            id: 7,
            title:'UI/UX Developer',
            image: logo2,
            time: 'now',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 8,
            title:'UI/UX Developer',
            image: logo3,
            time: 'now',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
    ]
    return(
       <div>
        <div className="jobContainer flex gap-3 justify-center items-center py-10 flex-wrap">
            {Data.map(({title, description,company, location, id,image, time})=>{
               return(
                <div key={id} className="card group group/item  p-[20px] w-[240px]  bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyish-400/700 hover:shadow-lg">
                <span className="flex items-center justify-between p-[10px] m-auto group-hover:text-white">
                    <h2 className="text-16px font-semibold p-[5px] ">{title}</h2>
                    <span className='flex items-center gap-2 text-[#ccc]'>
                        <BiTimeFive/>{time}
                    </span>
                </span> 
                <hr/>
                <p className="text-[13px] text-[#95959] group-hover:text-white">{description}</p>
                {/* <hr className="bg-blueColor border-2px pt-20px border-t-[2px]"/> */}
                <span className="flex flex-col items-center justify-between text-[14px] mt-10px group-hover:text-white ">
                    <p className='flex items-center gap-1 text-[14px]'>
                        <img className='w-[16px] h-[16px]' src={image} alt='imageslogo'/>{company}</p>
                    <p>{location}</p>
                </span>
                <div className="w-[100%] text-[14px] flex items-center justify-center font-semibold"><button className="border-[3px] hover:border-white group-hover:text-textColor p-[5px] rounded-[10px] m-[auto] hover:bg-white hover:text-black">Apply Now</button></div>
            </div>
               )
            })}
        </div>
       </div>
    )
}
export default JobBar;