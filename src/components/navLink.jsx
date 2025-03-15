const { default: Link } = require("next/link")
const { usePathname } = require("next/navigation")


const NavLink = ({link}) => {
    const pathName = usePathname()
    console.log(pathName)

    return (
        <Link href= {link.url} className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}>
            {link.title}
        </Link>
    )

}

export default NavLink