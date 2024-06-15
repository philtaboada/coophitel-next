
const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-1 px-2 mx-2">
            Navbar Title
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li><a>Search</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar