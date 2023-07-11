export default function Banner(props){
    return(
        <div className="row hero-header" id="home">
          <div className="col-md-7">
            <img src={props.info.img1} className="logo" />
            <h1>{props.info.h1}</h1>
            <h3>{props.info.h3}</h3>
            <h4>{props.info.h4}</h4>
            <a href={props.info.btnLink} className="btn btn-lg btn-red">{props.info.btnText} <span className="ti-arrow-right"></span></a>
          </div>
          <div className="col-md-5 hidden-xs">
            <img src={props.info.img2} className="rocket animated bounce"/>
          </div>
        </div>
    )   
}