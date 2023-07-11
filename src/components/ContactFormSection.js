export default function ContactFormSection(){
    return(
        <div class="contact-form">
            <h3 className="content"><span className="ti-email"></span> Contact Form</h3>
            <form className="form-horizontal" data-toggle="validator" role="form">

                <div className="form-group p-2">
                    <label for="name" className="col-sm-3 control-label">Name<sup>*</sup></label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name" placeholder="John Doe" required />
                        <div className="help-block with-errors pull-right"></div>
                        <span className="form-control-feedback" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="form-group p-2">
                    <label for="email" className="col-sm-3 control-label">Email<sup>*</sup></label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" placeholder="you@youremail.com" required />
                        <div className="help-block with-errors pull-right"></div>
                        <span className="form-control-feedback" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="form-group p-2">
                    <label for="message" className="col-sm-3 control-label">Your Message<sup>*</sup></label>
                    <div className="col-sm-9">
                        <textarea id="message" className="form-control" rows="3" required></textarea>
                        <div className="help-block with-errors pull-right"></div>
                        <span className="form-control-feedback" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="form-group p-2">
                    <div className="col-sm-offset-3 col-sm-9">
                        <button type="submit" id="submit" name="submit" className="btn btn-yellow pull-right">Send <span className="ti-arrow-right"></span></button>
                    </div>
                </div>
            </form> 
        </div>
    )
}