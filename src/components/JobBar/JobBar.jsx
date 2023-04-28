const JobBar = ()=>{
    const Data = [
        {
            'id': 1,
            title: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non?',
            'company':'Honda ltd',
            'location': 'japan',
        },
        {
            id: 2,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',

        },
        {
            id: 3,
            title:'Network Engineer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Huawei ltd',
            'location':'China',
        },
        {
            id: 4,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 5,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 6,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'IBM ltd',
            'location':'America',
        },
        {
            id: 7,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
        {
            id: 8,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolores.',
            company: 'Yamaha ltd',
            'location':'singapore',
        },
    ]
    return(
       <div>
        <div className="jobContainer flex gap-3 justify-center items-center py-10 flex-wrap">
            {Data.map(({title, description,company, location, id})=>{
               return(
                <div key={id} className="card group group/item  p-[20px] w-[240px]  bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyish-400/700 hover:shadow-lg">
                <span className="p-[10px] m-auto group-hover:text-white">
                    <h2 className="text-16px p-[5px]">{title}</h2>
                </span> 
                <span className="w-[100%] flex justify-center items-center group-hover:text-white">
                    <p className="flex justify-center items-center">{description}</p>
                    
                </span>
                <hr className="bg-blueColor border-2px"/>
                <span className="flex flex-col items-center justify-between mt-10px group-hover:text-white ">
                    <p>{company}</p>
                    <p>{location}</p>
                </span>
                <div className="w-[100%] flex items-center justify-center bo"><button className="border-[3px] hover:border-white group-hover:text-white p-[5px] rounded-[10px] m-[auto] hover:bg-white  group-hover/item:text-textColor">Apply Now</button></div>
            </div>
               )
            })}
        </div>
       </div>
    )
}
export default JobBar;