import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import SparklesText from "./ui/sparklestext";
import { Book, Brain, Heart, Link, Mic, Pencil } from "lucide-react";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              <i className="font-bold text-transparent bg-gradient-to-br from-blue-800 to-zinc-200  bg-clip-text">
                {" "}
                A touch of reality{" "}
              </i>{" "}
              in a world <br className="max-lg:hidden" /> that is more and more
              distant
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Mic size={20} className="text-blue-600" />
                <span>Interactive w/AR Glasses</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Whether you want to share thoughts, ask questions, or simply
                have a conversation, Arthur is always ready to listen.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Pencil size={20} className="text-blue-600" />
                <span>Save and Share</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Ask Arthur to save dialogues and help you compose letters and
                travel logs to send to your loved ones on Earth.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Brain size={20} className="text-blue-600" />
                <span>Stimulating Games</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Keep your mind sharp with a variety of games like General
                Knowledge Quizzes. Investigative Puzzles and Mathematical
                Challenges.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Heart size={20} className="text-blue-600" />
                <span>Health and Wellness</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Engage in balance and coordination games designed to maintain
                your bone and muscle health. Arthur guides you through all of
                them.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Book size={20} className="text-blue-600" />
                <span>Educational Content</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Dive into a wealth of knowledge with Arthur’s curated
                educational resources, ranging from astrophysics to philosophy.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Link size={20} className="text-blue-600" />
                <span>Stay Connected with Earth</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Never lose touch with home. Arthur makes it effortless to
                communicate with friends and family, bridging the distance and
                keeping relationships vibrant.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
