import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <h2>Padma Shri Manoj Das</h2>
            </div>
            <div>
                <Link  href="/">Home</Link>
                <Link  href="/biography">Biography</Link>
                <Link href="/literaryworks">Literary Works</Link>
                <Link href="/legacy">Legacy</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/">to be added</Link>

            </div>
        </nav>
    )
}