import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col md:flex-row justify-between items-center
        gap-8">
        <div className="md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/609/609118.png "
            alt=""
          />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Kami Telah Menyetujui Beberapa ide untuk
            <span className="text-secondary"> Inovasi dan Penelitian</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Inovasi adalah dorongan tak henti-hentinya untuk mendobrak suatu hal
            yang baru dan mengembangkan lagi di mana hanya sedikit orang yang
            berani melakukannya
          </p>

          <button className="btnPrimary">Ajukan Inovasi</button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6401/6401477.png "
            alt=""
          />
        </div>

        <div className="md:w-3/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Kami juga mendukung ide atau gagasan untuk
            <span className="text-secondary"> Sebuah Penelitian</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Penelitian yang membangun iyalah penelitian yang berguna bagi
            sekitar, dapat membangun lingkungan sekitar, dan tidak merugikan
            untuk sekitar
          </p>

          <button className="btnPrimary">Ajukan Penelitian</button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
