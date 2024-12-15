interface Group{
    img:string
    grpName:string
}
const GroupBar = ({img,grpName}:Group) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center gap-2">
      <img 
        className="rounded-circle" 
        alt="Profile" 
        src={img}
        width="36" 
        height="36" 
      />
      <div className="text-wrapper">{grpName}</div>
    </div>
    <a className="btn follow rounded-5" href="/">Follow</a>
  </div>
  )
}

export default GroupBar
