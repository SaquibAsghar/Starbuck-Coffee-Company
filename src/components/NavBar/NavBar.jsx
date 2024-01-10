import LocationPin from "../../assets/LocationPin";


const NavBar = () => {
  return (
    <div className="flex items-center flex-grow justify-between ms-10">
    <div>
      <ul className="flex">
        <li className="first-of-type:ms-0">
          <a href="#" className="text-l font-bold uppercase">
            menu
          </a>
        </li>
        <li className="ms-[2.4rem]">
          <a href="#" className="text-l font-bold uppercase">
            rewards
          </a>
        </li>
        <li className="ms-[2.4rem]">
          <a href="#" className="text-l font-bold uppercase">
            gift cards
          </a>
        </li>
      </ul>
    </div>
    <div>
      <span>
        {/* Work on this style value block */}
        <LocationPin />
        <a href="#">find a store</a>
      </span>
      <a
        href="#"
        className="border-2 border-solid border-red-500 rounded-[50px] p-2 ms-3"
      >
        signin
      </a>
      <a
        href="#"
        className="border-2 border-solid border-red-500 rounded-[50px] p-2 ms-3"
      >
        join now
      </a>
    </div>
  </div>
  )
}

export default NavBar