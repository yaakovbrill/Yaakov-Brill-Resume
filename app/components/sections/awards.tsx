import Link from "next/link";
import SectionTitle from "./sectionsTitle";

export default function ProjectsSection() {
  return (
    <section>
      <SectionTitle title="Awards" />
      <div className="mt-4 space-y-6">
        
        <div>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              1st place in the{" "}
              <Link href="https://snake.wits.ai/" target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600 hover:text-blue-800 underline">Snake AI Competition 2020</span>
              </Link>
              {" "}at the University of the Witwatersrand, Johannesburg, for developing a Java-based snake game with optimized algorithms (11/2020).
            </li>
            <li>Awarded a full scholarship for academic excellence at the University of the Witwatersrand for 2022.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
