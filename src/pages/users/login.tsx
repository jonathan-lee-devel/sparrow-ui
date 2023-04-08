import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
      <main>
          <div>
              <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                              <div className="d-flex justify-content-center py-4">
                                  <Link className="logo d-flex align-items-center w-auto" href={"/home"}>
                                  </Link>
                              </div>
                              <div className="card mb-3">
                                  <div className="card-body">
                                      <div className="pt-4 pb-2">
                                          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                          <p className="text-center small">Enter your username & password to login</p>
                                      </div>
                                      <form className="row g-3 needs-validation">
                                      <div className="col-12">
                                          <label className="form-label" htmlFor="yourUsername">E-mail Address</label>
                                          <div className="input-group has-validation">
                                              <input className="form-control" id="yourUsername"
                                              name="username" required
                                              type="text" />
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <label className="form-label" htmlFor="yourPassword">Password</label>
                                          <input className="form-control" id="yourPassword"
                                          name="password"
                                          type="password" />
                                      </div>
                                      <div className="col-12">
                                          <button className="btn btn-primary w-100" type="submit">Login</button>
                                      </div>
                                      <div className="col-12">
                                          <p className="small mb-0">Forgot your password? <a href={"#"}>Reset
                                              Password</a></p>
                                          <p className="small mb-0">Don&lsquo;t have account? <a href={"#"}>Create an
                                              account</a></p>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
        </section>
        </div>
    </main>
)
}
