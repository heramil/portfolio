import { useState } from 'react'
import './Hero.css';

export default function Hero({ selectedProject }) {
  const { description, goal, process, outcome, credits, technologies } = selectedProject;
  const companies = selectedProject.project_companies.company;
  const toolsUsed = selectedProject.project_tools.tools;
  const languagesUsed = selectedProject.project_technologies.languages;

  return (
    <div className="hero-content">
      <div className="hero-title">
        <div className="companies">
          {
            companies.map((company) => (
              <div className="company">
                {company.name}
              </div>
            ))
          }
        </div>
        <div className="title">
          <h1>{selectedProject.project_title}</h1>
        </div>
        <div className="period">
          <h3>{selectedProject.project_period_begin}</h3>
          <h3>-</h3>
          <h3>{selectedProject.project_period_end}</h3>
        </div>
        <div className="duration">
          <h4>{selectedProject.project_duration}</h4>
        </div>
      </div>
      <div className="container">
      {description && <p>{selectedProject.project_description}</p>}
      {goal && <p>{selectedProject.project_goal}</p>}
      {process && 
        <div className="phases">
          <div className="phase">
            {selectedProject.project_process.phase01}
          </div>
          <div className="phase">
            {selectedProject.project_process.phase02}
          </div>
          <div className="phase">
            {selectedProject.project_process.phase03}
          </div>
          <div className="phase">
            {selectedProject.project_process.phase04}
          </div>
        </div>
      }
      {outcome && <p>{selectedProject.project_outcome}</p>}
      {credits &&
        <div>
          <div> 
            <h3>
              {Object.entries(selectedProject.project_credits.design).map((design) => <div>
                {`${design}\n`}
              </div>
              )}
            </h3>
          </div>
          <div>
            <h3>
            {Object.entries(selectedProject.project_credits.management).map((management) => <div>
                {`${management}\n`}
              </div>
              )}
            </h3>
          </div>
          <div>
            <h3>
            {Object.entries(selectedProject.project_credits.development).map((development) => <div>
                {`${development}\n`}
              </div>
              )}
            </h3>
          </div>
        </div>
      }
      {technologies && 
        <div>
          <div className="technologies">
          {
            toolsUsed.map((tool) => (
              <div>
                {tool.name}
              </div>
            ))
          }
          </div>
          <div className="technologies">
          {
            languagesUsed.map((lang) => (
              <div>
                {lang.language}
              </div>
            ))
          }  
          </div>
        </div>
      }
      </div>
    </div>
  );
}