import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import CitySelector from "../components/CitySelector";
import CustomDateRangePicker from "../components/CustomDateRangePicker";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../store/auth";
import {
  FaEye,
  FaHeart,
  FaPhoneAlt,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";
import { formatNumber } from "../utils/formatNumber";

function Dashboard() {
  const { URI, user } = useAuth();
  const navigate = useNavigate();
  const [overviewData, setOverviewData] = useState([]);
  const [overviewCountData, setOverviewCountData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const menus = [
    {
      label: "Properties",
      value: overviewCountData?.totalProperty || "00",
      to: "/properties",
      analytics: {
        views: overviewCountData?.propertyViews || 0,
        likes: overviewCountData?.propertyLikes || 0,
        shares: overviewCountData?.propertyShares || 0,
      },
    },
    {
      label: "Blogs",
      value: overviewCountData?.totalBlog || "00",
      to: "/blogs",
      analytics: {
        views: overviewCountData?.blogViews || 0,
        likes: overviewCountData?.blogLikes || 0,
        shares: overviewCountData?.blogShares || 0,
      },
    },
    {
      label: "News",
      value: overviewCountData?.totalNews || "00",
      to: "/news",
      analytics: {
        views: overviewCountData?.newsViews || 0,
        likes: overviewCountData?.newsLikes || 0,
        shares: overviewCountData?.newsShares || 0,
      },
    },
    {
      label: "Enquirers",
      value: overviewCountData?.totalEnquiry || "00",
      //icon: card4,
      to: "/enquirers",
      analytics: {
        call_enquirers: overviewCountData?.call_enquirers || 0,
        whatsapp_enquirers: overviewCountData?.whatsapp_enquirers || 0,
      },
    },

    {
      label: "Customers",
      value: overviewCountData?.totalCustomer || "00",
      //icon: card2,
      to: "/customers",
    },
    {
      label: "Builders",
      value: overviewCountData?.totalBuilder || "00",
      // icon: card4,
      to: "/builders",
    },
    {
      label: "Employees",
      value: overviewCountData?.totalEmployee || "00",
      // icon: card4,
      to: "/employees",
    },
    {
      label: "Project Partners",
      value: overviewCountData?.totalProjectPartner || "00",
      // icon: card4,
      to: "/projectpartner",
    },
    {
      label: "Sales Persons",
      value: overviewCountData?.totalSalesPerson || "00",
      //icon: card4,
      to: "/salespersons",
    },
    {
      label: "Territory Partners",
      value: overviewCountData?.totalTerritoryPartner || "00",
      //icon: card4,
      to: "/territorypartner",
    },
    {
      label: "Guest Users",
      value: overviewCountData?.totalGuestUser || "00",
      //icon: card4,
      to: "/guest-users",
    },
    {
      label: "Tickets",
      value: overviewCountData?.totalTicket || "00",
      //icon: card4,
      to: "/tickets",
    },
  ];

  const fetchCountData = async () => {
    try {
      const response = await fetch(
        `${URI}/${user?.projectpartnerid ? "employee" : "admin"}/dashboard/count`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch Count.");
      const data = await response.json();
      //console.log(data);
      setOverviewCountData(data);
    } catch (err) {
      console.error("Error fetching :", err);
    }
  };

  useEffect(() => {
    fetchCountData();
  }, []);

  return (
    <div className="overview overflow-scroll scrollbar-hide w-full h-screen flex flex-col items-start justify-start">
      <div className="overview-card-container gap-2 sm:gap-3 px-4 md:px-0 w-full grid place-items-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
        {menus
          .filter((menu) => user?.assignMenus?.includes(menu.label))
          .map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.to)}
              className={`overview-card w-full max-w-[190px] sm:max-w-[290px] flex flex-col items-center justify-center gap-1 rounded-lg sm:rounded-[16px] border-2 hover:border-[#0BB501] bg-white cursor-pointer transition
                          ${card.analytics ? "py-[10px]" : "py-4 sm:py-6"} px-4 sm:px-6`}
            >
              {/* Title + Count */}
              <div className="w-full flex items-center justify-between font-semibold">
                <p>{card.label}</p>

                <p className="flex items-center text-xl">
                  {[
                    "Total Deal Amount",
                    "Reparv Share",
                    "Total Share",
                    "Sales Share",
                    "Territory Share",
                  ].includes(card.label) && <FaRupeeSign className="mr-1" />}
                  {card.value}
                </p>
              </div>
              {/* Analytics */}
              {card.analytics && (
                <div className="flex items-center justify-between w-full text-sm text-gray-600 font-medium border-t pt-1">
                  <div className="flex items-center gap-1">
                    <FaEye className="text-blue-500" />
                    {formatNumber(card.analytics.views)}
                  </div>

                  <div className="flex items-center gap-1">
                    <FaHeart className="text-red-500" />
                    {formatNumber(card.analytics.likes)}
                  </div>

                  <div className="flex items-center gap-1">
                    <FaShareAlt className="text-green-500" />
                    {formatNumber(card.analytics.shares)}
                  </div>
                </div>
              )}{" "}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
