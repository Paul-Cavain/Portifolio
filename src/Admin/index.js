import AdminNavbar from "../components/AdminNavbar";

const HomeAdmin = () => {
    return(
        <>
            <div className="md:px-28">
                <AdminNavbar />
                <h3 className="pt-36 md:pt-48 text-2xl text-center">Admin Login</h3>
                <div className="md:flex md:justify-center mt-10 px-4 md:px-0">

                    <form className="bg-violet-500 md:w-1/2 rounded-md">
                        <div className="flex flex-col px-4 md:px-10 py-10 space-y-3">
                            <div className="flex flex-col">
                                <label for="email" className="text-white">Email</label>
                                <input type="text" name="email" placeholder="Enter your email" className="w-full h-10 px-2 rounded-md focus:outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label for="password" className="text-white">Password</label>
                                <input type="text" name="password" placeholder="Enter your password" className="w-full h-10 px-2 rounded-md focus:outline-none" />
                            </div>
                            <div className="text-white flex justify-end w-full">
                                <a href="/Dashboard">
                                    <input type="submit" name="submit" className="bg-black w-20 h-10 rounded-md" value={"Login"} />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default HomeAdmin;