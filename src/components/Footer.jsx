
const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#project">My Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#">
                <i className="ri-github-fill ri-2x hover:text-zinc-500"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x hover:text-violet-600"></i>
            </a>
            <a href="#">
                <i className="ri-linkedin-fill ri-2x hover:text-blue-600"></i>
            </a>
            <a href="#">
                <i className="ri-tiktok-fill ri-2x hover:text-black"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer