import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className="flex
    justify-between
    items-center
    container 
    mx-auto
    py-5
    fixed
    top-0
    left-0
    right-0
    z-[1000]">
        <div>
            <Link to={'/'} className="font-bold text-3xl cursor-pointer">WatchFlix</Link>
        </div>

        <div>
            <ul className=" flex gap-4 md:gap-9 lg:gap-12 ">
                <NavLink  end style={({ isActive }) => ({ borderBottom: isActive ? '2px solid yellow' : 'none' })} to={'/'} className="hover:border-b-2  border-gold cursor-pointer">Home</NavLink>
                <NavLink  end style={({ isActive }) => ({ borderBottom: isActive ? '2px solid yellow' : 'none' })} to={'/top_rated'} className="hover:border-b-2  border-gold  cursor-pointer">Movies</NavLink>
                <NavLink  end style={({ isActive }) => ({ borderBottom: isActive ? '2px solid yellow' : 'none' })} to={`/tv`} className="hover:border-b-2  border-gold cursor-pointer">TV Show</NavLink>
                <NavLink end style={({ isActive }) => ({ borderBottom: isActive ? '2px solid yellow' : 'none' })} to={`/search`} className="hover:border-b-2  border-gold cursor-pointer">Video</NavLink>
                <NavLink end style={({ isActive }) => ({ borderBottom: isActive ? '2px solid yellow' : 'none' })} to={`/FAQ`} className="hover:border-b-2  border-gold cursor-pointer">FAQ</NavLink>
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