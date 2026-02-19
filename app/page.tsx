"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen">
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">HT</h1>
    <div className="space-x-6 text-sm">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#experience" className="hover:text-blue-400">Experience</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Haritha Thurpati
        </h1>
        <p className="text-xl mb-4 text-blue-300">
          Data Analyst | BI Developer | Data Engineering Enthusiast
        </p>
        <p className="max-w-2xl text-gray-300">
          Master’s student with hands-on experience in data analytics,
          BI visualization, and scalable data pipeline development.
          Skilled in SQL, Python, PySpark, and Power BI.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">About me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Master’s student in Communication and Media Engineering at Hochschule Offenburg.
          With professional experience at Infosys as a Data Analyst and BI Analyst,
          I specialize in transforming raw enterprise data into meaningful insights.
          My work spans SQL-based analytics, PySpark data processing in Databricks,
          and interactive dashboard creation using Power BI.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-blue-400">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Programming</h3>
              <p className="text-gray-300">Python, SQL, PySpark, Java</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Data & BI</h3>
              <p className="text-gray-300">Power BI, DAX, MSBI, Data Modeling, Star Schema</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Tools</h3>
              <p className="text-gray-300">Databricks, Pandas, Matplotlib, Git, React</p>
            </div>

          </div>
        </div>
      </section>

     {/* PROJECTS SECTION */}
     <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
     <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-blue-400">DataCamp Python Projects</h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <ExpandableCard
        title="History of Lego Sets"
        description="Explored evolution of Lego sets using exploratory data analysis and visualization."
        approach="Cleaned historical datasets, performed trend analysis, and visualized patterns in set complexity and themes."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 2 */}
      <ExpandableCard
        title="Demand Forecasting Model"
        description="Built a forecasting model to predict product demand using time-series analysis."
        approach="Applied moving averages and regression techniques to analyze seasonal patterns and forecast future demand."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 3 */}
      <ExpandableCard
        title="Market Analysis – Product Management"
        description="Data-driven market analysis to inform product strategy and positioning."
        approach="Performed customer segmentation, trend analysis, and dashboard reporting to guide business decisions."
        tech={["Python", "Pandas", "Data Cleaning"]}
      />

      {/* Project 4 */}
      <ExpandableCard
        title="NYC Public School Test Scores"
        description="Explored standardized test results across NYC public schools."
        approach="Cleaned datasets, calculated performance metrics, and visualized disparities using statistical techniques."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 5 */}
      <ExpandableCard
        title="Investigating Netflix Movies"
        description="Analyzed Netflix movie catalog to discover trends in content and ratings."
        approach="Used EDA to examine genre distribution, release trends, and viewer rating patterns."
        tech={["Python", "Pandas", "EDA"]}
      />

      {/* Project 6 */}
      <ExpandableCard
        title="Debugging Sales Data Workflow"
        description="Identified and resolved data pipeline issues in a sales workflow."
        approach="Traced data inconsistencies, cleaned corrupted entries, and optimized transformation logic."
        tech={["Python", "Data Cleaning"]}
      />

    </div>
  </div>
</section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-blue-400">
            Experience
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold">
                Infosys Ltd – Business Intelligence Analyst
              </h3>
              <p className="text-gray-400">May 2023 – Sept 2024</p>
              <p className="text-gray-300 mt-2">
                Processed large-scale enterprise datasets using SQL and PySpark,
                delivered Power BI dashboards for procurement and strategic planning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Working Student – Data Science (WLRI)
              </h3>
              <p className="text-gray-400">July 2025 – Aug 2025</p>
              <p className="text-gray-300 mt-2">
                Extracted and labeled 3D point cloud data using Python,
                supporting robotics research workflows.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">
          Contact
        </h2>

        <p className="text-gray-300 mb-4">
          📧 harithagm2419@gmail.com
        </p>

        <a
          href="https://linkedin.com/in/haritha-thurpati-7b9280225"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn Profile
        </a>
      </section>

    </main>
  );
}
function ExpandableCard({ title, description, approach, tech }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer bg-[#111827] p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-500"
    >
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      {open && (
        <div className="mt-4 border-t border-gray-700 pt-4 animate-fadeIn">
          <p className="text-blue-400 font-medium mb-2">Approach:</p>
          <p className="text-gray-400 text-sm">{approach}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-4 text-sm text-blue-400">
        {tech.map((item: string, index: number) => (
          <span
            key={index}
            className="bg-blue-500/10 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
