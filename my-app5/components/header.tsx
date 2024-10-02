'use client'
import Link from "next/link"
export default function Header(){
    return (
       <div>
        <div className="NavBar"> {
            <ul className="NavBar-buttons">
            <li > <Link href={"./Portfolio"}>Portfolio</Link></li>
            <li > <Link href={"./About"}>About</Link></li>
            <li > <Link href={"./Contactus"}>Contact us</Link></li>
           </ul>
        }
        </div>
       </div>
    )
}