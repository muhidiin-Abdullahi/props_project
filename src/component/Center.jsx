function Center(props){
   return <div className="sm:flex sm:gap-52  p-10 sm:pl-40 pl-10 sm:space-y-0 space-y-6">
      <div className="flex gap-4">
         <img className="w-[200px] h-[200px]" src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/411051847_1412376673009232_3152180522085591874_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2dW210-ebC4AX-hfbC_&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfDIfdNuVUHMVubR7QGyBjpo5iIr8m-XcEYgii4OYJ7VvA&oe=65ADBFC3" alt="" />
         <div>
            <h1 className="text-xl font-mono">{props.title}</h1>
            <h4>{props.desc}</h4>
            <p className="text-3xl">{props.age}</p>
         </div>
      </div>
      <div className="flex gap-4">
         <img className="w-[200px] h-[200px]" src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/411051847_1412376673009232_3152180522085591874_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2dW210-ebC4AX-hfbC_&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfDIfdNuVUHMVubR7QGyBjpo5iIr8m-XcEYgii4OYJ7VvA&oe=65ADBFC3" alt="" />
         <div>
            <h1 className="text-xl font-mono">{props.title}</h1>
            <h4>{props.desc}</h4>
            <p className="text-3xl">{props.age}</p>
         </div>
      </div>







   </div>
}
export default Center