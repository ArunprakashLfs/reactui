const JobBar = ()=>{
    const Data = [
        {
            'id': 1,
            title: 'Web Developer',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam expedita animi ullam eaque obcaecati quidem repellat commodi impedit harum. Excepturi asperiores aliquam at nemo molestiae expedita! Aut deleniti molestias perferendis!',
            'company':'Honda ltd',
            'location': 'japan',
        },
        {
            id: 2,
            title:'UI/UX Developer',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo qui non debitis, eius quasi quos itaque voluptatibus dicta totam nostrum officiis vel dolore enim nam consectetur repudiandae voluptatem velit suscipit.',
            company: 'Yamaha ltd',
            'location':'singapore',

        }
    ]
    return(
       <div>
        <div className="jobContainer flex gap-10 justify-center items-center py-10 flex-wrap">
            {Data.map(({title, description})=>{
                <
            })}
        </div>
       </div>
    )
}
export default JobBar;