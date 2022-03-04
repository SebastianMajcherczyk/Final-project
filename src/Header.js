import LogoFK from './media/LogoFK.png';


const Header = () => {

    return (
        <header className={"header1"}>
            <div className="container">
                <img src={LogoFK} alt={"Logo FranZ Kruger"}/>
                <div>
                    <h3>Phone number</h3>
                    <h3>+48 555 767 676</h3>
                </div>
                <form>
                    <input type="text" name="text" placeholder="Search" />
                    <button type="submit"> Search </button>
                </form>
            </div>
        </header>
    )

}

export {Header};
