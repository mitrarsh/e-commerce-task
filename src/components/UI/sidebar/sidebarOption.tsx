type SidebarOptionProps = {
    option: string
}

const SidebarOption = ({option}:SidebarOptionProps) => {
  return (
    <div className="p-8 bg-[#F5F5F7] rounded-[1rem] cursor-pointer hover:bg-[#E4E4E6] transition-all duration-300">
      {option}
    </div>
  )
}

export default SidebarOption