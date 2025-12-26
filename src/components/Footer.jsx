const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <div className="flex items-center gap-3">
        <a href="https://github.com/HanifanPNG">
          <i className="ri-github-fill ri-2x hover:text-zinc-500"></i>
        </a>
        <a href="https://www.instagram.com/hnifn.png">
          <i className="ri-instagram-fill ri-2x hover:text-violet-600"></i>
        </a>
        <a href="https://www.linkedin.com/in/hanifan-pangabekti-6b9b70265/">
          <i className="ri-linkedin-fill ri-2x hover:text-blue-600"></i>
        </a>
        <a href="https://www.tiktok.com/@hanippn?_r=1&_t=ZS-92Vu3z4gE3E">
          <i className="ri-tiktok-fill ri-2x hover:text-black"></i>
        </a>
        <a href="https://wa.me/6285878657632/">
          <i className="ri-whatsapp-fill ri-2x hover:text-green-600"></i>
        </a>
      </div>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#project">My Project</a>
      </div>
      <h1 className="text-2xl font-bold">Portofolio</h1>
    </div>
  );
};

export default Footer;
