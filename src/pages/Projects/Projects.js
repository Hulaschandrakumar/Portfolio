import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
    <div className="container projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
        <hr />
        <p className="pd-3 text-center">
            👉 here are my top 3 recent projects with live link and sorce code
        </p>
        <div className="row" id="ads">
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Full Stack </span>
                        <img src="/Images/image3.png" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Node</span>
                        <span className="card-detail-badge">Express</span>
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">Mongodb</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Soft Mart Shopping Website</h5>
                        </div>
                        <a className="ad-btn" href="https://editor.wix.com/html/editor/web/renderer/edit/266c253d-d78a-415c-b140-99c90690b0c8?metaSiteId=940d32ea-4903-43db-af49-6533b686a4b3">View</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Mobile App </span>
                        <img src="/Images/minimalpage.png" alt="project2" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React Native</span>
                        <span className="card-detail-badge">IOS / ANDROID</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Soft Mart Coding App</h5>
                        </div>
                        <a className="ad-btn" href="https://hulaschandrakumar.github.io/minimal_admin_panelWebPages/">View</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Backend </span>
                        <img src="/Images/successpath.png" alt="project3" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">HTML</span>
                        <span className="card-detail-badge">CSS</span>
                        <span className="card-detail-badge">Java Script</span>
                        <span className="card-detail-badge">PHP</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Success Path</h5>
                        </div>
                        <a className="ad-btn" href="https://hulaschandrakumar.github.io/SuccessPathWebPages/" >View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects;