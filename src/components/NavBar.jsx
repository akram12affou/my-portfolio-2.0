import akram from "../assets/akram-logo.png";
function NavBar() {
  return (
    <div className=" mx-auto bg_color hover:text-white  h-16">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div>
          <img src={akram} className="logo_dimentions" alt="" />
        </div>
        <div className="flex justify-evenly gap-4">
          <span className="routes_color hover:tracking-wide hover:hover:text-slate-400  cursor-pointer trans sm:text-lg">Home</span>
          <span className="routes_color hover:tracking-wide hover:hover:text-slate-400  cursor-pointer trans sm:text-lg">About</span>
          <span className="routes_color hover:tracking-wide hover:hover:text-slate-400  cursor-pointer trans sm:text-lg"> Projects</span>
          <span className="routes_color hover:tracking-wide hover:hover:text-slate-400  cursor-pointer trans sm:text-lg">Contact</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
