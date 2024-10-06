import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import NASA from "@/public/images/nasa.png";
import HFARM from "@/public/images/logo-h-farm 1.png";
import { HeroVideoDialog } from "./videoDialog";
import Link from "next/link";
import ModalVideo from "./ui/modal-video";

export default function HeroHome() {
  const thumb = "/demo/Heading.png";
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6" data-aos="zoom-y-out">
              <div className="flex justify-center items-center space-x-4">
                <Image
                  className=""
                  src={NASA}
                  width={120}
                  height={140}
                  alt="Nasa international hackaton X Arthur"
                  draggable={false}
                />
                <span className="text-lg font-semibold">x</span>
                <Image
                  className=""
                  src={HFARM}
                  width={50}
                  height={140}
                  alt="HFARM hackaton X Arthur"
                  draggable={false}
                />
              </div>
            </div>
            <h1
              className="py-3 pointer-events-none whitespace-pre-wrap  text-center sm:text-8xl leading-thigth  mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.5),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Transform space into an
              <br className="max-lg:hidden" />{" "}
              <i className="font-bold text-transparent bg-gradient-to-br from-blue-800 to-zinc-200  bg-clip-text">
                engaging adventure.
              </i>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-5 text-lg text-zinc-400 leading-thight"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Arthur is your personal virtual buddy, crafted to make every
                moment of your mission more engaging, productive, and connected
                to Earth.
              </p>
              <div className="relative ">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    href="https://app.usearthur.co"
                    className="btn group mb-4 w-full bg-blue-800 hover:opacity-80 text-white shadow  sm:mb-0 sm:w-auto"
                  >
                    <span className="relative inline-flex font-semibold items-center">
                      Discover Arthur now!
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}

          <div className="relative" data-aos="zoom-y-out" data-aos-delay={1000}>
            {/* Hero image */}
            <ModalVideo
              thumb={thumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Modal video thumbnail"
              video="/demo/demo.MOV"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
