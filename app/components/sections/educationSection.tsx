import SectionTitle from "./sectionsTitle";

export default function EducationSection() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="mt-4 space-y-6">

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">University of Johannesburg</h3>
            <span className="text-gray-500">Johannesburg, South Africa</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-700">Bachelor of Science in Computer Science</p>
            <span className="text-gray-500">2019 - 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}
