import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./index.css";

const Index = () => {
  return (
    <>
      <div className="wrapper">
        <div className="emp-dash-navbar">
          <Navbar />
        </div>
        <div className="emp-dash-main">
          <div className="emp-dash-sidebar">
            <Sidebar />
          </div>
          <div className="emp-dash-content">
            <div className="emp-dash-page-info">
              <span className="emp-dash-page-name">Dashboard</span>
              <div className="emp-dash-page-navigation">
                <div className="emp-dash-navigator">
                  <i class="fa-solid fa-house emp-dash-navigator-icon"></i>
                  <Link to="#" className="emp-dash-navigator-link">
                    /Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="emp-dash-summary">
              <div className="emp-dash-summary-graphs-card">
                <div className="emp-dash-card">
                  <div className="emp-dash-cards">
                    <div className="emp-dash-cards-left">
                      <div className="emp-dash-cards-icon-first-square">
                        <i class="fa-solid fa-square"></i>
                      </div>
                      <div className="emp-dash-cards-icon-first-center">
                        <div className="emp-dash-cards-icon-first-circle">
                          <i class="fa-solid fa-circle"></i>
                        </div>
                        <div className="emp-dash-cards-icon-first-design">
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="emp-dash-cards-right">
                      <span className="emp-dash-card-name">New Insurance</span>
                      <span className="emp-dash-card-info">
                        Awaiting processing
                      </span>
                    </div>
                    <div className="emp-dash-cards-far-right">
                      <span className="emp-dash-card-count">57</span>
                    </div>
                  </div>
                  <div className="emp-dash-cards">
                    <div className="emp-dash-cards-left">
                      <div className="emp-dash-cards-icon-first-square">
                        <i class="fa-solid fa-square"></i>
                      </div>
                      <div className="emp-dash-cards-icon-first-center">
                        <div className="emp-dash-cards-icon-first-circle">
                          <i class="fa-solid fa-circle"></i>
                        </div>
                        <div className="emp-dash-cards-icon-first-design">
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="emp-dash-cards-right">
                      <span className="emp-dash-card-name">New Insurance</span>
                      <span className="emp-dash-card-info">
                        Awaiting processing
                      </span>
                    </div>
                    <div className="emp-dash-cards-far-right">
                      <span className="emp-dash-card-count">57</span>
                    </div>
                  </div>
                  <div className="emp-dash-cards">
                    <div className="emp-dash-cards-left">
                      <div className="emp-dash-cards-icon-first-square">
                        <i class="fa-solid fa-square"></i>
                      </div>
                      <div className="emp-dash-cards-icon-first-center">
                        <div className="emp-dash-cards-icon-first-circle">
                          <i class="fa-solid fa-circle"></i>
                        </div>
                        <div className="emp-dash-cards-icon-first-design">
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="emp-dash-cards-right">
                      <span className="emp-dash-card-name">New Insurance</span>
                      <span className="emp-dash-card-info">
                        Awaiting processing
                      </span>
                    </div>
                    <div className="emp-dash-cards-far-right">
                      <span className="emp-dash-card-count">57</span>
                    </div>
                  </div>
                </div>
                <div className="emp-dash-graphs"></div>
              </div>
              <div className="emp-dash-summary-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
