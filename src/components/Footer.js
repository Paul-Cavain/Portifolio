const Footer = () => {
    return ( 
        <>
            <footer className="fixed bottom-0 right-0 left-0 flex flex-row justify-between px-4 md:px-28 bg-gray-200 h-14 pt-4">
                <div className="md:flex hidden">
                    <h2>paulcavain02@gmail.com</h2>
                </div>
                <div>
                    <ul className="flex flex-row space-x-3 md:space-x-4">
                        <a href="https://twitter.com/Cavain_tz" className="hover:text-violet-700"><li>Twitter</li></a>
                        <a href="https://github.com/Paul-Cavain" className="hover:text-violet-700"><li>GitHub</li></a>
                        <a href="" className="hover:text-violet-700"><li>Dribble</li></a>
                        <a href="" className="hover:text-violet-700"><li>Linkedin</li></a>
                        <a href="" className="hover:text-violet-700"><li>WakaTime</li></a>
                        
                    </ul>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;