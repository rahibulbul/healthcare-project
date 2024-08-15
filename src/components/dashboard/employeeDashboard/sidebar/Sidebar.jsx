import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(`/employeedashboard/${path}`);
  };

  const isActive = (path) => {
    return location.pathname === path ? "employeedashboard-active" : "";
  };
  const isDropdownOpen = (paths) => {
    return paths.some((path) => location.pathname.includes(path)) ? "show" : "";
  };

  return (
    <div className="dash-sidebar">
      <aside id="sidebar">
        <ul className="sidebar-nav">
          <div className="sidebar-nav-categories">
            <span className="sidebar-nav-category">Home</span>
          </div>
          <li className={`sidebar-item sidebar-item-list`}>
            <Link
              to="/employeedashboard"
              className={`sidebar-link ${isActive("/employeedashboard")}`}
            >
              <i className="fa-solid fa-globe employeenavbar-icon"></i>
              <span className="show-name">Dashboard</span>
            </Link>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/newinsurance",
              "/employeedashboard/insurancerecord",
              "/employeedashboard/manageinsurance",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#insurance-submenu"
              aria-expanded="true"
              aria-controls="insurance-submenu"
            >
              <i className="fa-regular fa-clipboard employeenavbar-icon"></i>
              <span>Insurances</span>
            </Link>
            <ul
              id="insurance-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/newinsurance",
                  "/employeedashboard/insurancecategory",
                  "/employeedashboard/insurancerecord",
                  "/employeedashboard/manageinsurance",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/newinsurance"
                  )}`}
                  onClick={() => handleNavigation("newinsurance")}
                >
                  New Insurance
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/insurancecategory"
                  )}`}
                  onClick={() => handleNavigation("insurancecategory")}
                >
                  Insurance Category
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/insurancerecord"
                  )}`}
                  onClick={() => handleNavigation("insurancerecord")}
                >
                  Insurance Record
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageinsurance"
                  )}`}
                  onClick={() => handleNavigation("manageinsurance")}
                >
                  Manage Insurance
                </span>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/patientlist",
              "/employeedashboard/managepatient",
              "/employeedashboard/medicalrecord",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#patient-submenu"
              aria-expanded="true"
              aria-controls="patient-submenu"
            >
              <i className="fa-solid fa-user employeenavbar-icon"></i>
              <span>Patients</span>
            </Link>
            <ul
              id="patient-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/patientlist",
                  "/employeedashboard/managepatient",
                  "/employeedashboard/medicalrecord",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/patientlist"
                  )}`}
                  onClick={() => handleNavigation("patientlist")}
                >
                  Patient List
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/managepatient"
                  )}`}
                  onClick={() => handleNavigation("managepatient")}
                >
                  Manage Patient
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/medicalrecord"
                  )}`}
                  onClick={() => handleNavigation("medicalrecord")}
                >
                  Medical Record
                </span>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/doctorlist",
              "/employeedashboard/managedoctor",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#doctor-submenu"
              aria-expanded="true"
              aria-controls="doctor-submenu"
            >
              <i className="fa-solid fa-user-doctor employeenavbar-icon"></i>
              <span>Doctors</span>
            </Link>
            <ul
              id="doctor-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/doctorlist",
                  "/employeedashboard/managedoctor",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/doctorlist"
                  )}`}
                  onClick={() => handleNavigation("doctorlist")}
                >
                  Doctor List
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/managedoctor"
                  )}`}
                  onClick={() => handleNavigation("managedoctor")}
                >
                  Manage Doctor
                </span>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/appointmentslist",
              "/employeedashboard/manageappointments",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#appointment-submenu"
              aria-expanded="true"
              aria-controls="appointment-submenu"
            >
              <i className="fa-solid fa-clipboard employeenavbar-icon"></i>
              <span>Appointments</span>
            </Link>
            <ul
              id="appointment-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/appointmentslist",
                  "/employeedashboard/manageappointments",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/appointmentslist"
                  )}`}
                  onClick={() => handleNavigation("appointmentslist")}
                >
                  Appointments List
                </span>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <span
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageappointments"
                  )}`}
                  onClick={() => handleNavigation("manageappointments")}
                >
                  Manage Appointments
                </span>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/medicallist",
              "/employeedashboard/managemedical",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#medical-submenu"
              aria-expanded="true"
              aria-controls="medical-submenu"
            >
              <i className="fa-solid fa-house-chimney-medical employeenavbar-icon"></i>
              <span>Medical Center</span>
            </Link>
            <ul
              id="medical-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/medicallist",
                  "/employeedashboard/managemedical",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/medicallist"
                  )}`}
                >
                  Medical List
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/managemedical"
                  )}`}
                >
                  Manage Medical
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/addpharmacy",
              "/employeedashboard/managepharmacy",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#pharmacy-submenu"
              aria-expanded="true"
              aria-controls="pharmacy-submenu"
            >
              <i className="fa-solid fa-prescription-bottle-medical employeenavbar-icon"></i>
              <span>Pharmacy</span>
            </Link>
            <ul
              id="pharmacy-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/addpharmacy",
                  "/employeedashboard/managepharmacy",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/addpharmacy"
                  )}`}
                >
                  Add Pharmacy
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/managepharmacy"
                  )}`}
                >
                  Manage Pharmacy
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/employeelist",
              "/employeedashboard/manageemployee",
              "/employeedashboard/employeegroup",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#employees-submenu"
              aria-expanded="false"
              aria-controls="employees-submenu"
            >
              <i className="fa-solid fa-user-tie employeenavbar-icon"></i>
              <span>Employees</span>
            </Link>
            <ul
              id="employees-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/employeelist",
                  "/employeedashboard/manageemployee",
                  "/employeedashboard/employeegroup",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/employeelist"
                  )}`}
                >
                  Employee List
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageemployee"
                  )}`}
                >
                  Manage Employee
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/employeegroup"
                  )}`}
                >
                  Employee Group
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/investorlist",
              "/employeedashboard/manageeinvestor",
              "/employeedashboard/investorgroup",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#investor-submenu"
              aria-expanded="false"
              aria-controls="investor-submenu"
            >
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <span>Investor</span>
            </Link>
            <ul
              id="investor-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/investorlist",
                  "/employeedashboard/manageeinvestor",
                  "/employeedashboard/investorgroup",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/investorlist"
                  )}`}
                >
                  Investor List
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/investorgroup"
                  )}`}
                >
                  Investor Category
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageeinvestor"
                  )}`}
                >
                  Manage Investor
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/addschedule",
              "/employeedashboard/manageschedule",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#schedule-submenu"
              aria-expanded="false"
              aria-controls="schedule-submenu"
            >
              <i className="fa-regular fa-calendar-days employeenavbar-icon"></i>
              <span>Employee Schedule</span>
            </Link>
            <ul
              id="schedule-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/addschedule",
                  "/employeedashboard/manageschedule",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/addschedule"
                  )}`}
                >
                  Add Schedule
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageschedule"
                  )}`}
                >
                  Manage Schedule
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/newbills",
              "/employeedashboard/managebills",
              "/employeedashboard/submittedbills",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#bills-submenu"
              aria-expanded="false"
              aria-controls="bills-submenu"
            >
              <i className="fa-solid fa-money-bill employeenavbar-icon"></i>
              <span>Bills and Payments</span>
            </Link>
            <ul
              id="bills-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/newbills",
                  "/employeedashboard/managebills",
                  "/employeedashboard/submittedbills",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/newbills"
                  )}`}
                >
                  New Bills
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/managebills"
                  )}`}
                >
                  Manage Bills
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/submittedbills"
                  )}`}
                >
                  Submitted Bills
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/allpatients",
              "/employeedashboard/allinsurance",
              "/employeedashboard/companyincome",
              "/employeedashboard/companyexpenses",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#report-submenu"
              aria-expanded="false"
              aria-controls="report-submenu"
            >
              <i className="fa-solid fa-chart-pie employeenavbar-icon"></i>
              <span>Reports</span>
            </Link>
            <ul
              id="report-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/allpatients",
                  "/employeedashboard/allinsurance",
                  "/employeedashboard/companyincome",
                  "/employeedashboard/companyexpenses",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/allpatients"
                  )}`}
                >
                  All Patients
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/allinsurance"
                  )}`}
                >
                  All Insurance
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/companyincome"
                  )}`}
                >
                  Company Income
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/companyexpenses"
                  )}`}
                >
                  Company Expenses
                </Link>
              </li>
            </ul>
          </li>
          <li className={`sidebar-item sidebar-item-list`}>
            <Link
              to="/employeedashboard/messages"
              className={`sidebar-link ${isActive(
                "/employeedashboard/messages"
              )}`}
            >
              <i className="fa-solid fa-envelope employeenavbar-icon"></i>
              <span className="show-name">Messages</span>
            </Link>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/newticket",
              "/employeedashboard/manageticket",
              "/employeedashboard/closedticket",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#support-submenu"
              aria-expanded="false"
              aria-controls="support-submenu"
            >
              <i className="fa-solid fa-headset employeenavbar-icon"></i>
              <span>Support</span>
            </Link>
            <ul
              id="support-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/newticket",
                  "/employeedashboard/manageticket",
                  "/employeedashboard/closedticket",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/newticket"
                  )}`}
                >
                  New Ticket
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/manageticket"
                  )}`}
                >
                  Manage Ticket
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/closedticket"
                  )}`}
                >
                  Closed Ticket
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isDropdownOpen([
              "/employeedashboard/yourprofile",
              "/employeedashboard/salarymanagement",
              "/employeedashboard/privacyandsecurity",
            ])}`}
          >
            <Link
              to="#"
              className="sidebar-link has-dropdown collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#profile-settings-submenu"
              aria-expanded="false"
              aria-controls="profile-settings-submenu"
            >
              <i className="fa-solid fa-user-gear employeenavbar-icon"></i>
              <span>Profile Settings</span>
            </Link>
            <ul
              id="profile-settings-submenu"
              className={`sidebar-dropdown list-unstyled collapse ${isDropdownOpen(
                [
                  "/employeedashboard/yourprofile",
                  "/employeedashboard/salarymanagement",
                  "/employeedashboard/privacyandsecurity",
                ]
              )}`}
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/yourprofile"
                  )}`}
                >
                  Your Profile
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/salarymanagement"
                  )}`}
                >
                  Salary Management
                </Link>
              </li>
              <li className="sidebar-item sidebar-item-sub-menu">
                <Link
                  to="#"
                  className={`sidebar-link sidebar-link-submenu ${isActive(
                    "/employeedashboard/privacyandsecurity"
                  )}`}
                >
                  Privacy and Security
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`sidebar-item sidebar-item-list ${isActive(
              "/employeedashboard/settings"
            )}`}
          >
            <Link to="/employeedashboard/settings" className={`sidebar-link`}>
              <i className="fa-solid fa-gear employeenavbar-icon"></i>
              <span className="show-name">Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
