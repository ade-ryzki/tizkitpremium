import React from "react"

function Post3 () {
    return(
    <section className="container join-member">
        <h3>Be the vanguard of the</h3>
        <h1>Moviegoers</h1>
        <form className="form-join mt-5 mb-5">
          <div className="form-outline">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Type your email" />
          </div>
          <div className="form-outline">
            <button type="submit" className="btn btn-join-now">Join Now</button>
          </div>
        </form>
        <p className="text-center">
          By joining you as a Tickitz member, <br />
          we will always send you the latest updates via email
        </p>
    </section> 
    )
}

export default Post3