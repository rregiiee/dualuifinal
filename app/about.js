const About = () => {
  return (
    <section id="about" className="p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Foto Profil */}
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
        <img
          src="/cvonline.jpeg"
          alt="Reggi Ramdhani"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Teks About */}
      <div>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-700">
          Hello, Nama Saya <b>Reggi Ramdhani</b>. Saya Mahasiswa Sistem Informasi semester 3 yang antusias dan berdedikasi di Universitas Ma'soem dengan minat dalam pengembangan perangkat lunak dan analisis data. Memiliki pemahaman tentang konsep pemrograman, basis data, dan jaringan komputer. 
        </p>
        <p className="mt-2 text-gray-700">
          Saya proaktif dalam mencari peluang untuk mengembangkan keterampilan teknis dan memperdalam pengetahuan di bidang sistem informasi. Mampu bekerja secara mandiri maupun dalam tim, serta memiliki kemampuan komunikasi yang baik.
        </p>
      </div>
    </section>
  );
};

export default About;
