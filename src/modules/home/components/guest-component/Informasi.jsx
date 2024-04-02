import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";

const Informasi = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Badan Pembangunan Daerah
            <span className="text-secondary"> (BAPEDA)</span>
          </h3>
          <p className="text-base text-tartiary">
            Sistem infomasi daerah yang menyidakan informasi mengenai inovasi
            dan penelitian yang sudah / dan akan dilakukan di daerah kabupaten
            Nias Selatan, Sumatera Utara, Indonesia
          </p>
        </motion.div>

        {/* untuk card informasi */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/609/609152.png"
                  alt=""
                  className="h-[200px]"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Informasi Riset dan Inovasi
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8553/8553505.png "
                  alt=""
                  className="h-[220px]"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Kerja sama untuk menghasilkan Inovasi
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 flex justify-center items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2952/2952998.png "
                  alt=""
                  className="h-[220px]"
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Buah pikiran dan penelitian yang bermanfaat
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Informasi;
