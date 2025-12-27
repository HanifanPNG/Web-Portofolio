import Particles from "./components/Particles";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import BlurText from "./components/BlurText";
import RotatingText from "./components/RotatingText";
import LogoLoop from "./components/LogoLoop";
import BackToTop from "./components/BackToTop";
import ClickSpark from "./components/ClickSpark";
import { listOrganisasi } from "./data";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

// looptools
const toolLogos = listTools.map((tool) => ({
  src: tool.gambar,
  alt: tool.nama,
  title: tool.nama,
  desk: tool.ket,
}));

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#DFFF00"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div>
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Particles
              particleColors={["#ffffff"]}
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
          className="hero relative grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1"
          id="home"
        >
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex gap-3 items-center">
              <h1 className="bg-transparent text-xl font-medium text-white ">
                I'm
              </h1>
              <div>
                <RotatingText
                  texts={["Informatics", "Student"]}
                  mainClassName="px-2 mb-2 sm:px-2 md:px-3 rounded-md bg-violet-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 flex justify-center font-semibold item-center"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
            <div>
              <BlurText
                text="Hanifan Pangabekti"
                delay={500}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl font-bold mb-2"
              />
            </div>
            <p className="text-base/loose mb-6 opacity-50">
              A FrontEnd Developer with a strong interest in UI/UX Design. Like
              a solving the problem by combining that.
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
                Project <i className="ri-arrow-down-line ri-lg px-0.5"></i>
              </a>
            </div>
          </div>
          <div className="relative md:flex md:justify-end sm:pt-10">
            <img
              src={DataImage.HeroImage}
              alt="hero Image"
              className="
       w-[320px]
      sm:w-[380px]
      md:w-[450px]
      lg:w-[500px]
      mx-auto md:mx-0

      -translate-y-6
      md:-translate-y-12
      lg:-translate-y-16
      drop-shadow-2xl
        animate__animated animate__fadeInUp animate__delay-4s
      "
            />
            {/* Glow */}
            <div className="absolute -z-10 inset-0 bg-violet-600/30 blur-3xl rounded-full"></div>
          </div>
        </div>
        {/* hero */}

        {/* about */}
        <div className="about mt-32 py-5" id="about">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h1>
          <div
            className="xl:w-2/3 lg:3/4 w-full mx-auto bg-transparent rounded-lg p-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <p className="text-base mb-10 sm:text-center text-start">
                Hello! Thank you for taking the time to visit my personal
                website. Let me introduce myself. I'm Hanifan Pangabekti, a
                student in the Information Systems Study Program at Prof. K.H.
                Saifuddin Zuhri State Islamic University, Purbalingga. I am
                interested in and focused on developing web applications that
                are not only functional but also provide a comfortable and
                intuitive user experience. I believe that good communication is
                key to success in various roles. I am accustomed to thinking
                effectively, being flexible in the face of change, and always
                striving to deliver the best results. I'm enthusiastic about
                working in a team and ready to make a real contribution to
                achieving shared goals. I look forward to future collaboration
                opportunities.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden w-screen left-1/2 -translate-x-1/2">
            <LogoLoop
              logos={toolLogos}
              speed={120}
              direction="left"
              logoHeight={40}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Tools & Technologies"
              className="gap-4 border border-zinc-500 "
            />
          </div>
          {/* <div className="tools mt-8">
          <div className="tools-box grid lg-grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
        </div> */}
        </div>
        {/* about */}

        {/* organisasi */}
        <div className="organisasi py-5" id="organisasi">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Organizational Experience
          </h1>

          <p
            className="text-base/loose text-center opacity-50 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Experiences that shaped my teamwork, leadership, and communication
            skills.
          </p>

          <div className="max-w-4xl mx-auto grid gap-6">
            {listOrganisasi.map((org) => (
              <div
                key={org.id}
                className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={org.delay}
                data-aos-once="true"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h2 className="text-xl font-bold">{org.nama}</h2>
                  <span className="text-sm opacity-60">{org.periode}</span>
                </div>

                <p className="font-semibold text-violet-400 mb-2">
                  {org.jabatan}
                </p>

                <p className="text-base/loose opacity-80">{org.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
        {/* organisasi */}

        {/* project */}
        <div className="project mt-32 pb-10" id="project">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Project
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
                className="p-4 bg-white/10 border border-white/30 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={project.dad}
                data-aos-once="true"
              >
                <img
                  src={project.gambar}
                  alt=""
                  loading="lazy"
                  className="hover:scale-105 transition-transform duration-300 ease-out rounded-lg"
                />
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
                  <div className="mt-8 text-center flex justify-center items-center gap-6">
                    <div className="bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 rounded-full p-2 hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-600 hover:to-violet-700">
                      <a href={project.sc}>
                        Source Code{" "}
                        <i class="fa-brands fa-github text-xl ml-1"></i>
                      </a>
                    </div>
                    <div className="bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-500 rounded-full p-2 hover:bg-gradient-to-r hover:from-zinc-500 hover:via-zinc-600 hover:to-zinc-700">
                      <a href={project.href}>
                        <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-1"></i>{" "}
                        See Website
                      </a>
                    </div>
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
            Let's grow together
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
        <BackToTop />
      </ClickSpark>
    </>
  );
}

export default App;
