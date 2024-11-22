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
            <p className="font-semibold text-gray-700">Junior Software Developer</p>
            <span className="text-gray-500">07/2023 - Current</span>
          </div>

          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Optimized API calls for checkbox selection, reducing response time by 75% by grouping multiple requests into a single GET request, improving user experience (C#, React, Axios).</li>
            <li>Developed and maintained the full-stack Wiredup multi-tenant system for 53 clients, delivering user stories, resolving bugs, and ensuring client satisfaction (React, C#, SQL).</li>
            <li>Implemented a Privacy Notice popup for SOC2 compliance, enhancing business value (HTML, React, Redux).</li>
            <li>Enhanced API flexibility by adding customizable Boolean query parameters, for precise data filtering.</li>
            <li>Refactored shared React functions, reducing code duplication and improving maintainability.</li>
            <li>Automated bulk data insertion into testing environments with a C# script, increasing QA team efficiency.</li>
            <li>Fixed UI bugs during a Kendo React upgrade (V5 to V8), ensuring component functionality (React, Node.js, CSS).</li>
            <li>Created an HTTP Put API to save user preferences, improving app usability (C#, .NET, Entity Framework).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
