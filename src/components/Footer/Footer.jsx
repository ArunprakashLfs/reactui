import {AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
const Footer = ()=>{
    return(
        <div className="bg-blueColor grid grid-cols-5 justify-center items-center mt-[4rem] p-[5rem] gap-[3rem]">
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white"><strong>Job</strong>Search</h1>
                </div>
                <p className="text-white font-semibold opacity-[.7] hover:opacity-[1]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, culpa!</p>
            </div>
            <div className="grid text-white">
                <h2>Company</h2>
                
                <div>
                    <li>value</li>
                    <li>Worklife</li>
                    <li>carrier</li>
                    <li>workflow</li>
                </div>
            </div>
            <div className="grid text-white">
                <h2>Company</h2>
                <div>
                    <li>value</li>
                    <li>Worklife</li>
                    <li>carrier</li>
                    <li>workflow</li>
                </div>
            </div>
            <div className="grid text-white">
                <h2>Company</h2>
                <div>
                    <li>value</li>
                    <li>Worklife</li>
                    <li>carrier</li>
                    <li>workflow</li>
                </div>
            </div>
            <div>
                <h2 className='text-white'>  Contact Details</h2>
                <div className="logoDiv mb-[1rem]">
                    <h1 className="logo text-[25px] text-white"><strong>Job</strong>Search</h1>
                </div>
                <div className='flex gap-[2rem] text-white rounded-[full]' >
                    <AiFillFacebook className='rounded-[full]'/>
                    <AiFillTwitterCircle/>
                    <AiFillLinkedin/>
                </div>
            </div>

        </div>
    )
}
export default Footer;