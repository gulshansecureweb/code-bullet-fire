export default function SiteHeader(props){
    return(
        <div className="header row">
            {/* <div class="container"> */}
                <div className="header-logo col-md-2"><img src={props.info.site_logo}/></div>
                <div className="topnav col-md-10">
                    <a className="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact-us">Contact</a>
                    <a href="#about">About</a>
                </div>
            {/* </div> */}
        </div>
    )   
}