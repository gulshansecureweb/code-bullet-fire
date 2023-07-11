export default function SiteHeader(props){
    console.log(props);
    return(
        <div class="header">
            <div class="header-logo"><img src={props.info.site_logo}/></div>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )   
}