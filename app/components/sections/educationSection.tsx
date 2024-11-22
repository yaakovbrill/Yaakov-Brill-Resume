import SectionTitle from "./sectionsTitle";

export default function EducationSection() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="mt-4 space-y-6">

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">University of the Witwatersrand</h3>
            <span className="text-gray-500">Johannesburg, South Africa</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <p className="font-semibold text-gray-700">Bachelor of Science</p>
            <span className="text-gray-500">02/2019 - 02/2022</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Major in Computer Science and Computational Applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
