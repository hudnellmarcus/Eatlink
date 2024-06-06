import logo from "../assets/eatlink.logo.png"; 


const Header = () => {
  return (
    <div className="flex flex-col w-full items-center">
        <img src={logo} alt="vegetables" className="h-auto w-[30%]"/>
        <h1 className="text-[2rem]">Eatlink</h1>
        <h3>find food for your diet</h3>
    </div>
  )
}

export default Header