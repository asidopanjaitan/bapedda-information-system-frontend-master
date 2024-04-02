import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";

const Regulasi = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="md:px-14 p-4 max-w-s mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Regulasi yang sudah berjalan
        </h2>
        <p className="text-tartiary md:w-2/3 mx-auto px-4 text-l">
          Kegiatan yang sudah dilaksanakan oleh Badan Pembangunan Daerah
          (BAPEDA) Nias Selatan untuk mendorong masyarakat lebih peka terhadap
          pembangunan daerah.
        </p>
      </div>

      {/* CARD */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto cursor-pointer">
        <div className="border py-10 md:px-6 px-4 rounded shadow-2xl">
          <h3 className="text-3xl font-bold text-center text-primary">
            Januari
          </h3>
          <p className="text-tartiary text-center my-5">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distributio
          </p>
        </div>

        <div className="border py-10 md:px-6 px-4 rounded shadow-2xl">
          <h3 className="text-3xl font-bold text-center text-primary">
            Februari
          </h3>
          <p className="text-tartiary text-center my-5">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distributio
          </p>
        </div>

        <div className="border py-10 md:px-6 px-4 rounded shadow-2xl">
          <h3 className="text-3xl font-bold text-center text-primary">Maret</h3>
          <p className="text-tartiary text-center my-5">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distributio
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Regulasi;
