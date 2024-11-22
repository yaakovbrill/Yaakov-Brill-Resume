import Link from "next/link";
import SectionTitle from "./sectionsTitle";

export default function ProjectsSection() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="mt-4 space-y-6">
        
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Soccer Tournament Generator</h3>
            <span className="text-gray-500">2023</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Developed a <Link href="https://tournament.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600 hover:text-blue-800 underline">FIFA Tournament Generator</span>
              </Link> to automate fixture creation, score tracking, and point aggregation into a ranked table (Python, SQL, Flask, JavaScript, HTML, CSS).
            </li>
            <li>Saved time for over 50 tournaments and 2,000 fixtures generated, used by family and friends.</li>
          </ul>


        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Weather App</h3>
            <span className="text-gray-500">2023</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Developed a <Link href="https://yaakovbrill.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600 hover:text-blue-800 underline">Weather App</span>
              </Link> providing real-time updates using Google Maps and OpenWeatherMap APIs.
            </li>
            <li>Displayed temperature and wind data in 3-hour intervals (Python, MySQL, JavaScript).</li>
          </ul>

        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Musician’s Website</h3>
            <span className="text-gray-500">2021</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Built a dynamic <Link href="https://shmulibrill.com/" target="_blank" rel="noopener noreferrer">
                <span className="text-blue-600 hover:text-blue-800 underline">website</span>
              </Link> for a musician with a playlist and contact form (JavaScript, HTML).
            </li>
            <li>Improved search rankings with Google SEO, increasing client inquiries and boosting sales.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">E-commerce Platform Development</h3>
            <span className="text-gray-500">2021</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Developed a full-stack e-commerce site (JavaScript, Firebase, HTML).</li>
            <li>Implemented secure Firebase Authentication, cart functionality, and stock tracking for products.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">COVID-19 Reporting App</h3>
            <span className="text-gray-500">2020</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Developed an Android app, to help reduce COVID-19 spread by enabling users to report positive cases and share locations on a collaborative map (Java, PHP, MySQL).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
