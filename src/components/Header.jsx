import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className="flex justify-between items-center container mx-auto py-5 fixed top-0 left-0 right-0 z-[1000]">
        <div>
            <Link to={'/'} className="font-bold text-3xl cursor-pointer">WatchFlix</Link>
        </div>

        <div>
            <ul className="flex gap-12">
                <Link to={'/'} className="hover:border-b-2  border-gold cursor-pointer">Home</Link>
                <Link to={'/top_rated'} className="hover:border-b-2  border-gold  cursor-pointer">Movies</Link>
                <li className="hover:border-b-2  border-gold cursor-pointer">TV Show</li>
                <li className="hover:border-b-2  border-gold cursor-pointer">Video</li>
                <li className="hover:border-b-2  border-gold cursor-pointer">FAQ</li>
            </ul>
        </div>

        <div>
            <input type="search" className="w-[120px] mr-4 bg-transparent border-[1px] rounded-md " />
            <button>Pricing</button>
        </div>
    </header>
  )
}

export default Header