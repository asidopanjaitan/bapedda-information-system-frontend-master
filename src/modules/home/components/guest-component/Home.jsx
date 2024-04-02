import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-sreen-2xl mx-auto mt-24 ">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner image*/}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6020/6020276.png "
              alt=""
              className=" lg:h-[386px]"
            />
          </motion.div>
          {/* content */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              Badan Pembangunan Daerah (BAPEDA)
            </h2>
            <p className="text-[#EBEBEB] text-xl mb-8">
              Sistem informasi untuk Badan Pembangunan Daerah (BAPEDA) kabupaten
              Nias Selatan yang menyediakan informasi terkait kegiatan dengan
              kegiatan BAPEDA Nias Selatan dan juga inovasi dan penelitian yang
              sedang dan akan dilakukan di Kabupaten Nias Selatan.
            </p>

            <div className="space-x-5  space-y-4">
              <button className=" btnPrimary">Ajukan Penelitian</button>
              <button className=" btnPrimary">Ajukan Inovasi</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
