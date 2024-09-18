


interface NavbarItemProps{
    title:string,
    classProps:string
}
const NavbarItem=({title,classProps}:NavbarItemProps)=>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = () => {
    return ( 
    <nav className="w-full flex md:justify-center justify-between items-center">
        <div className="md:flex-[0.5] flex-initial items-center">
            <img src="logo.png" alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between  items-center flex-initial">
            {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>{
                return <NavbarItem key={item+index} title={item} classProps=""/>
            })}
            <li className="bg-[#2952e3 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
            </li>
        </ul>

    </nav>
    );
}
 
export default Navbar;