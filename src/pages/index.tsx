import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <header className={"bg-dark py-5"}>
            <div className={"container px-5"}>
                <div className={"row gx-5 justify-content-center"}>
                    <div className={"col-lg-6"}>
                        <div className={"text-center my-5"}>
                            <h1 className={"display-5 fw-bolder text-white mb-2"}>Welcome to Sparrow</h1>
                            <p className={"lead text-white-50 mb-4"}>A delivery service application</p>
                            <div className={"d-grid gap-3 d-sm-flex justify-content-sm-center"}>
                                <a className={"btn btn-primary btn-lg px-4 me-sm-3"}>Register /  Login</a>
                                <a className={"btn btn-outline-light btn-lg px-4"}>Register a Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className={"py-5"}>
            <div className={"container px-5 my-5"}>
                <div className={"text-center mb-5"}>
                    <h2 className={"fw-bolder"}>Search for your favorite delivery service below...</h2>
                </div>
            </div>
        </section>
        <div className="container text-center">
            <form id="animated">
                <i className="fa fa-search" aria-hidden="true"></i><input type="text" name="search"
                                                                          placeholder="Search.." />
            </form>
        </div>
    </main>
  )
}
