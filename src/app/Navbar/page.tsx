import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <nav>
          <div className="bg-slate-700 text-white py-4 text-right px-4 ">
            <Link href="/" className="mr-4 hover:underline" aria-label="Go to Home Page">Home</Link>
            <Link href="/about" className="mr-4 hover:underline" aria-label="Go to About Page">About</Link>
            <Link href="/contact" className="hover:underline" aria-label="Go to Contact Page">Contact</Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar