import React, { useContext, useState/*, useEffect*/ } from 'react';
import { Context } from '../../store/store';
import { hideScrollBar } from './index.module.css';

export const ProjectsList = (props) => {
    const selectProject = (id) => {
        props.setProjectId(id);
        props.setViewList((viewList) => !viewList);
    };
    return (
        <div className={`row`}>
            <div
                className={`${hideScrollBar} pl-4 pr-4`}
                style={{
                    overflowY: 'auto',
                    height: '95vh',
                    boxShadow: 'inset 0 5px 5px -5px #000000'
                }}
            >
                {props.getProjects().map((project) => {
                    return (
                        <div
                            key={project.id}
                            className="row border mt-2 mb-3 rounded shadow"
                            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
                            onClick={() => selectProject(project.id)}
                        >
                            <div className="col-12 text-center">
                                {' '}
                                <h2>{project.title}</h2>{' '}
                            </div>

                            <div
                                className="col-12"
                                style={{ fontSize: '1.75rem', fontStyle: 'italic' }}
                            >
                                {project.description}
                            </div>
                            <div
                                className="col-12"
                                style={{ fontSize: '1.75rem', fontStyle: 'italic' }}
                            >
                                Author: {project.author}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const ProjectDetails = (props) => {
    const { title, author, details, description } = props.getProject();
    return (
        <div className={`row`}>
            <div
                className={`${hideScrollBar} pl-4 pr-4`}
                style={{
                    overflowY: 'auto',
                    height: '95vh',
                    boxShadow: 'inset 0 5px 5px -5px #000000',
                    backgroundColor: 'rgba(255,255,255,1)'
                }}
            >
                <div className="row pt-4">
                    <div className="col-auto">
                        <button
                            className="button"
                            onClick={() => {
                                props.setProjectId(null);
                                props.setViewList((viewList) => !viewList);
                            }}
                        >
                            Back
                        </button>
                    </div>
                    <div className="col-8 text-center">
                        <h2>{title}</h2>
                    </div>
                    <div className="col-12" style={{ fontSize: '1.75rem', fontStyle: 'italic' }}>
                        {description}
                    </div>
                    <div className="col-12" style={{ fontSize: '1.75rem', fontStyle: 'italic' }}>
                        Author: {author}
                    </div>
                    <div className="col-12" style={{ fontSize: '1.5rem' }}>
                        {details}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Projects = (props) => {
    const {
        actions: { getProjects, getProject, changeProjectId }
    } = useContext(Context);
    const [projectId, setProjectId] = useState(null);

    changeProjectId(projectId);
    // console.log(projectId, getProject(), getProjects());

    return (
        <>
            {!getProject() ? (
                <ProjectsList getProjects={getProjects} setProjectId={setProjectId} {...props} />
            ) : (
                <ProjectDetails getProject={getProject} setProjectId={setProjectId} {...props} />
            )}
        </>
    );
};
