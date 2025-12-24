import Particles from "./components/Particles";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div>
          <div className="fixed inset-0 -z-10 pointer-events-none">
  <Particles
    particleColors={['#ffffff']}
    particleCount={150}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={80}
    moveParticlesOnHover={false}
  />
</div>

      </div>

      {/* hero */}
      <div
        className="hero relative grid md:grid-cols-2 pt-8 xl:gap-0 gap-6 grid-cols-1"
        id="home"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-700 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              className="w-10 rounded-md"
              alt=""
              loading="lazy"
            />
            <q>Kode yang mahal berawal dari kebingungan.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hai, Im Hanifan Pangabekti
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            maxime, natus consequatur et molestias consectetur nihil
            reprehenderit tenetur magni esse veritatis aspernatur! Corrupti
            officia debitis optio ab, aperiam hic vero.
          </p>
          <div className="flex  items-center sm:gap-4 gap-2">
            <a
              href=""
              className=" bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"
            >
              Download CV <i className="ri-download-2-fill ri-lg px-0.5"></i>
            </a>
            <a
              href="#project"
              className=" bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500"
            >
              My Project <i className="ri-arrow-down-line ri-lg px-0.5"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>
      {/* hero */}

      {/* about */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:3/4 w-full mx-auto bg-zinc-700 rounded-lg p-7"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt=""
            className="w-12 rounded-md mb-8 sm:hidden"
            loading="lazy"
          />
          <p className="text-base mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quasi
            amet consequatur quibusdam eos hic sed, inventore in voluptatum
            incidunt culpa illum repellat odit, dolorem dolor blanditiis
            reiciendis nemo harum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 ">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Project Ended</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Below are the tools that I usually use to create websites or designs
          </p>
          <div className="tools-box mt-14 grid lg-grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-700 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="tools-image"
                  className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* about */}

      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          My Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          These are some of the projects I have worked on.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-700 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <img src={project.gambar} alt="" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tools, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600 hover:bg-zinc-700"
                    >
                      {tools}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    See Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* project */}

      {/* contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact Me
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Let's grow with me
        </p>
        <form
          action="https://formsubmit.co/hanipanpangabekti@gmail.com"
          method="POST"
          className="bg-zinc-700 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="masukan nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="masukan email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full cursor-pointer bg-violet-700 p-3 rounded-lg shadow-md border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* contact */}
    </>
  );
}

export default App;
