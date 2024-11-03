import SectionTitle from "./sectionsTitle";

export default function ProjectsSection() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="mt-4 space-y-6">
        
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Portfolio Website</h3>
            <span className="text-gray-500">2024</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Built using Next.js, React and Tailwind CSS for a responsive design.</li>
            <li>Developed...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
