type SidebarOptionProps = {
    option: string
}

const SidebarOption = ({option}:SidebarOptionProps) => {
  return (
    <div className="w-full p-[1rem] bg-[#DFDFDF] rounded-[1rem]" >
      <h4>{option}</h4>
    </div>
  )
}

export default SidebarOption