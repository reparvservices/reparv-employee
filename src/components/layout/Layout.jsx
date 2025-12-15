import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import reparvMainLogo from "../../assets/layout/reparvMainLogo.svg";
import overviewIcon from "../../assets/layout/overviewIcon.svg";
import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Profile from "../Profile";
import { useAuth } from "../../store/auth";
import LogoutButton from "../LogoutButton";
import { FaUserCircle } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { PiBuildingsFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { BiCalendar, BiSolidDiamond } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaClipboardUser } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaTicket } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { MdFeedback } from "react-icons/md";
import { GrDocumentVideo } from "react-icons/gr";
import { FaPhotoVideo } from "react-icons/fa";

function Layout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShortBar, setIsShortbar] = useState(false);
  const [heading, setHeading] = useState(localStorage.getItem("head"));
  const {
    URI,
    user,
    showProfile,
    setShowProfile,
    showPaymentIdForm,
    setShowPaymentIdForm,
    giveAccess,
    setGiveAccess,
    showInfo,
    setShowInfo,
    showInfoForm,
    setShowInfoForm,
    showAssignTaskForm,
    setShowAssignTaskForm,
    showSalesForm,
    setShowSalesForm,
    showEmployee,
    setShowEmployee,
    showEplDetailsForm,
    setShowEplDetailsForm,
    showBuilderForm,
    setShowBuilderForm,
    showAuctionForm,
    setShowAuctionForm,
    showPropertyForm,
    setShowPropertyForm,
    showPropertyTypeForm,
    setShowPropertyTypeForm,
    showRoleForm,
    setShowRoleForm,
    showDepartmentForm,
    setShowDepartmentForm,
    showUpdateImagesForm,
    setShowUpdateImagesForm,
    showAdditionalInfoForm,
    setShowAdditionalInfoForm,
    showNewPlotAdditionalInfoForm,
    setShowNewPlotAdditionalInfoForm,
    showAssignSalesForm,
    setShowAssignSalesForm,
    showEnquiryForm,
    setShowEnquiryForm,
    showCSVEnquiryForm,
    setShowCSVEnquiryForm,
    showEnquiryUpdateForm,
    setShowEnquiryUpdateForm,
    showEnquiryStatusForm,
    setShowEnquiryStatusForm,
    showPropertyInfo,
    setShowPropertyInfo,
    showSliderForm,
    setShowSliderForm,
    showFeedbackForm,
    setShowFeedbackForm,
    showPartnerForm,
    setShowPartnerForm,
    showTicketForm,
    setShowTicketForm,
    showResponseForm,
    setShowResponseForm,
    showRejectReasonForm,
    setShowRejectReasonForm,
    showTicket,
    setShowTicket,
    showEnquiry,
    setShowEnquiry,
    showBuilder,
    setShowBuilder,
    showPartner,
    setShowPartner,
    showSalesPerson,
    setShowSalesPerson,
    showAddMobileImage,
    setShowAddMobileImage,
    showEnquirerPropertyForm,
    setShowEnquirerPropertyForm,
    showFollowUpList,
    setShowFollowUpList,
    showSeoForm,
    setShowSeoForm,
    showBlogForm,
    setShowBlogForm,
    showTrendForm,
    setShowTrendForm,
    showCommissionForm,
    setShowCommissionForm,
    showCustomer,
    setShowCustomer,
    showCustomerPaymentForm,
    setShowCustomerPaymentForm,
    showApkUploadForm,
    setShowApkUploadForm,
    showContentUploadForm,
    setShowContentUploadForm,
    showEMIForm,
    setShowEMIForm,
    showEMI,
    setShowEMI,
    showProduct,
    setShowProduct,
    showProductForm,
    setShowProductForm,
    showOrder,
    setShowOrder,
    showStockForm,
    setShowStockForm,
    showStatusForm,
    setShowStatusForm,
    showVideoUploadForm,
    setShowVideoUploadForm,
    showPropertyLocationForm,
    setShowPropertyLocationForm,
    showAuthorityForm,
    setShowAuthorityForm,
    showSubscriptionForm,
    setShowSubscriptionForm,
    showChangeProjectPartnerForm, setShowChangeProjectPartnerForm,
    isLoggedIn,
  } = useAuth();

  const overlays = [
    { state: giveAccess, setter: setGiveAccess },
    { state: showAssignTaskForm, setter: setShowAssignTaskForm },
    { state: showSalesForm, setter: setShowSalesForm },
    { state: showInfo, setter: setShowInfo },
    { state: showInfoForm, setter: setShowInfoForm },
    { state: showEmployee, setter: setShowEmployee },
    { state: showEplDetailsForm, setter: setShowEplDetailsForm },
    { state: showAuctionForm, setter: setShowAuctionForm },
    { state: showBuilderForm, setter: setShowBuilderForm },
    { state: showDepartmentForm, setter: setShowDepartmentForm },
    { state: showPropertyForm, setter: setShowPropertyForm },
    { state: showPropertyTypeForm, setter: setShowPropertyTypeForm },
    { state: showRoleForm, setter: setShowRoleForm },
    { state: showUpdateImagesForm, setter: setShowUpdateImagesForm },
    { state: showAssignSalesForm, setter: setShowAssignSalesForm },
    { state: showAdditionalInfoForm, setter: setShowAdditionalInfoForm },
    {
      state: showNewPlotAdditionalInfoForm,
      setter: setShowNewPlotAdditionalInfoForm,
    },
    { state: showEnquiryForm, setter: setShowEnquiryForm },
    { state: showCSVEnquiryForm, setter: setShowCSVEnquiryForm },
    { state: showEnquiryUpdateForm, setter: setShowEnquiryUpdateForm },
    { state: showEnquiryStatusForm, setter: setShowEnquiryStatusForm },
    { state: showRejectReasonForm, setter: setShowRejectReasonForm },
    { state: showPropertyInfo, setter: setShowPropertyInfo },
    { state: showSliderForm, setter: setShowSliderForm },
    { state: showFeedbackForm, setter: setShowFeedbackForm },
    { state: showPartnerForm, setter: setShowPartnerForm },
    { state: showTicketForm, setter: setShowTicketForm },
    { state: showResponseForm, setter: setShowResponseForm },
    { state: showTicket, setter: setShowTicket },
    { state: showEnquiry, setter: setShowEnquiry },
    { state: showBuilder, setter: setShowBuilder },
    { state: showSalesPerson, setter: setShowSalesPerson },
    { state: showPartner, setter: setShowPartner },
    { state: showAddMobileImage, setter: setShowAddMobileImage },
    { state: showPaymentIdForm, setter: setShowPaymentIdForm },
    { state: showEnquirerPropertyForm, setter: setShowEnquirerPropertyForm },
    { state: showFollowUpList, setter: setShowFollowUpList },
    { state: showSeoForm, setter: setShowSeoForm },
    { state: showBlogForm, setter: setShowBlogForm },
    { state: showTrendForm, setter: setShowTrendForm },
    { state: showCommissionForm, setter: setShowCommissionForm },
    { state: showCustomer, setter: setShowCustomer },
    { state: showCustomerPaymentForm, setter: setShowCustomerPaymentForm },
    { state: showApkUploadForm, setter: setShowApkUploadForm },
    { state: showContentUploadForm, setter: setShowContentUploadForm },
    { state: showEMI, setter: setShowEMI },
    { state: showEMIForm, setter: setShowEMIForm },
    { state: showProduct, setter: setShowProduct },
    { state: showProductForm, setter: setShowProductForm },
    { state: showStockForm, setter: setShowStockForm },
    { state: showOrder, setter: setShowOrder },
    { state: showStatusForm, setter: setShowStatusForm },
    { state: showVideoUploadForm, setter: setShowVideoUploadForm },
    { state: showPropertyLocationForm, setter: setShowPropertyLocationForm },
    { state: showAuthorityForm, setter: setShowAuthorityForm },
    { state: showSubscriptionForm, setter: setShowSubscriptionForm },
    { state: showChangeProjectPartnerForm, setter: setShowChangeProjectPartnerForm },
  ];

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "font-semibold bg-[#E3FFDF] shadow-[0px_1px_0px_0px_rgba(0,_0,_0,_0.1)]"
      : "";
  };

  const getHeading = (label) => {
    setHeading(label);
    localStorage.setItem("head", label);
  };

  const menus = [
    { to: "/enquirers", icon: <IoIosListBox size={21} />, label: "Enquirers" },
    {
      to: "/digital-broker",
      icon: <IoIosListBox size={21} />,
      label: "Digital Broker",
    },
    { to: "/customers", icon: <HiUsers size={21} />, label: "Customers" },
    {
      to: "/properties",
      icon: <PiBuildingsFill size={21} />,
      label: "Properties",
    },
    { to: "/map", icon: <FaMapLocationDot size={21} />, label: "Map" },
    { to: "/calender", icon: <BiCalendar size={21} />, label: "Calendar" },
    {
      to: "/ads-manager",
      icon: <RiAdvertisementFill size={21} />,
      label: "Ads Manager",
    },
    { to: "/employees", icon: <FaUserTie size={21} />, label: "Employees" },
    { to: "/builders", icon: <FaBuildingUser size={21} />, label: "Builders" },
    { to: "/promoters", icon: <FaHandshake size={21} />, label: "Promoters" },
    {
      to: "/projectpartner",
      icon: <FaHandshake size={21} />,
      label: "Project Partners",
    },
    {
      to: "/salespersons",
      icon: <FaHandshake size={21} />,
      label: "Sales Partner",
    },
    {
      to: "/onboardingpartner",
      icon: <FaHandshake size={21} />,
      label: "Onboarding Partners",
    },
    {
      to: "/territorypartner",
      icon: <FaHandshake size={21} />,
      label: "Territory Partners",
    },
    {
      to: "/guest-users",
      icon: <FaHandshake size={21} />,
      label: "Guest Users",
    },
    {
      to: "/subscription-pricing",
      icon: <BiSolidDiamond size={21} />,
      label: "Subscription Pricing",
    },
    {
      to: "/subscription-discount",
      icon: <TbRosetteDiscountCheckFilled size={21} />,
      label: "Subscription Discount",
    },
    {
      to: "/users-loan-eligibility",
      icon: <FaClipboardUser size={21} />,
      label: "Users Loan Eligibility",
    },
    { to: "/role", icon: <FaUserCog size={21} />, label: "Roles" },
    {
      to: "/department",
      icon: <PiBuildingOfficeFill size={21} />,
      label: "Departments",
    },
    {
      to: "/property-authorities",
      icon: <MdVerifiedUser size={21} />,
      label: "Authorities",
    },
    { to: "/tickets", icon: <FaTicket size={21} />, label: "Tickets" },
    {
      to: "/apk-upload",
      icon: <FaBuildingUser size={21} />,
      label: "Apk Upload",
    },
    { to: "/blogs", icon: <FaBloggerB size={21} />, label: "Blogs" },
    { to: "/trends", icon: <FaArrowTrendUp size={21} />, label: "Trends" },
    {
      to: "/slider",
      icon: <TbLayoutSidebarRightCollapseFilled size={21} />,
      label: "Slider",
    },
    {
      to: "/testimonial",
      icon: <MdFeedback size={21} />,
      label: "Testimonial",
    },

    {
      to: "/marketing-content",
      icon: <FaPhotoVideo size={21} />,
      label: "Marketing Content",
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen bg-[#F5F5F6]">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between px-5 py-3 bg-white shadow-sm">
        <img src={reparvMainLogo} alt="Reparv Logo" className="h-10" />
        <div className="ButtonContainer flex gap-4 items-center justify-center">
          <FaUserCircle
            onClick={() => {
              setShowProfile("true");
            }}
            className="w-8 h-8 text-[#076300]"
          />
          <LogoutButton />
          <button
            className="p-2 rounded-md bg-gray-100 text-black hover:text-[#076300] active:scale-95"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen === false ? (
              <IoMenu size={24} />
            ) : (
              <IoMdClose size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar hidden w-full h-[80px] md:flex items-center justify-center border-b-2">
        <div className="navLogo w-[300px] h-[80px] flex items-center justify-center">
          <img
            src={reparvMainLogo}
            alt="Reparv Logo"
            className="w-[100px] mb-2"
          />
        </div>

        <div className="navHeading w-full h-16 flex items-center justify-between text-lg font-semibold">
          <div className="left-heading h-8 flex gap-4 items-center justify-between text-[20px] leading-[19.36px] text-black">
            <IoMenu
              onClick={() => {
                setIsShortbar(!isShortBar);
              }}
              className="w-8 h-8 cursor-pointer active:scale-95"
            />{" "}
            <p>{heading}</p>
          </div>
          <div className="right-heading w-[135px] h-[40px] flex items-center justify-between mr-8">
            <FaUserCircle
              onClick={() => {
                setShowProfile("true");
              }}
              className="w-8 h-8 text-[#076300]"
            />
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex overflow-y-scroll scrollbar-hide">
        <div
          className={`w-64 ${
            isShortBar ? "md:w-[95px]" : "md:w-60"
          } h-full fixed overflow-y-scroll scrollbar-hide bg-white shadow-md md:shadow-none md:static top-0 left-0 !z-[55] md:bg-[#F5F5F6] transition-transform duration-300 transform ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 p-4 md:gap-2">
            <img
              src={reparvMainLogo}
              alt="Reparv Logo"
              className="md:hidden block"
            />
            {/* Navigation Links */}
            <NavLink
              onClick={() => {
                setIsSidebarOpen(false);
                getHeading("Dashboard");
              }}
              key={"/dashboard"}
              to={isLoggedIn === true ? "/dashboard" : "/"}
              className={`flex items-center gap-3 w-full p-3 rounded-[20px] transition-all duration-300 text-black ${getNavLinkClass(
                "/dashboard"
              )}`}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-[12px] bg-white">
                <img
                  src={overviewIcon}
                  alt={`${"Dashboard"} Icon`}
                  className="md:h-6 md:w-6 w-5 h-5"
                />
              </div>
              <span
                className={`text-sm md:text-base ${
                  isShortBar ? "md:hidden" : "block"
                }`}
              >
                {"Dashboard"}
              </span>
            </NavLink>
            {menus
              .filter((menu) => user?.assignMenus?.includes(menu.label))
              .map(({ to, icon, label }) => (
                <NavLink
                  onClick={() => {
                    setIsSidebarOpen(false);
                    getHeading(label);
                  }}
                  key={to}
                  to={isLoggedIn === true ? to : "/"}
                  className={`flex items-center gap-3 w-full p-3 rounded-[20px] transition-all duration-300 text-black ${getNavLinkClass(
                    to
                  )}`}
                >
                  <div className="min-w-8 min-wh-8 md:min-w-10 md:min-h-10 flex items-center justify-center rounded-[12px] bg-white">
                    {icon}
                  </div>
                  <span
                    className={`text-sm md:text-base ${
                      isShortBar ? "md:hidden" : "block"
                    }`}
                  >
                    {label}
                  </span>
                </NavLink>
              ))}
          </div>
        </div>

        {/* Content Area */}
        <div
          className="flex-1 md:p-4 md:pl-0 md:pt-0 overflow-scroll scrollbar-hide"
          onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
        >
          <Outlet />
        </div>
      </div>
      {showProfile && <Profile />}

      {overlays.map(({ state, setter }, index) =>
        state ? (
          <div
            key={index}
            className="w-full h-screen z-[60] fixed bg-[#767676a0]"
            onClick={() => setter(false)}
          ></div>
        ) : null
      )}
    </div>
  );
}

export default Layout;
