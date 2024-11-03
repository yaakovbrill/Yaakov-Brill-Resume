import SectionTitle from "./sectionsTitle";

export default function ExperienceSection() {
  return (
    <section>
      <SectionTitle title="Experience" />
      <div className="mt-4 space-y-6">
        
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Business Science Corporation</h3>
            <span className="text-gray-500">Johannesburg, South Africa</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <p className="text-gray-700">Junior Software Developer</p>
            <span className="text-gray-500">Jan 2023 - Present</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Developed ...</li>
            <li>Enhanced API ...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
