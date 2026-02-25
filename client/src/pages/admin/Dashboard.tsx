import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { Phone, Mail, MessageSquare, Calendar, X } from "lucide-react";


export default function Dashboard() {
  const [view, setView] = useState("appointments"); // 'appointments' or 'contacts'
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/admin/appointments");
      setAppointments(res.data);
    } catch (error) {
      console.error("Failed to fetch appointments", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await api.get("/admin/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      await Promise.all([fetchAppointments(), fetchContacts()]);
      setLoading(false);
    };
    initialFetch();

    const interval = setInterval(() => {
      fetchAppointments();
      fetchContacts();
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("new-booking", fetchAppointments);
    return () => window.removeEventListener("new-booking", fetchAppointments);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/admin/login");
  };

  return (
    <AdminLayout>
      <div className="bg-background min-h-screen">
        <div className="w-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition text-sm"
            >
              🚪 Logout
            </button>
          </div>

          {/* LIVE UPDATE INDICATOR */}
          <p className="text-xs text-gray-400 mb-4">
            🔄 Auto updating every 10 seconds
          </p>

          {/* STATS - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8">
            <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-soft border-l-4 border-emerald-500">
              <p className="text-xs text-gray-500 mb-1">Total Appt</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-emerald-600">{appointments.length}</h2>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-soft border-l-4 border-blue-500">
              <p className="text-xs text-gray-500 mb-1">Enquiries</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-600">{contacts.length}</h2>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-soft border-l-4 border-orange-500">
              <p className="text-xs text-gray-500 mb-1">Today</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-orange-600">
                {
                  appointments.filter(
                    (a: any) =>
                      new Date(a.created_at).toDateString() ===
                      new Date().toDateString()
                  ).length
                }
              </h2>
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-2 sm:gap-4 border-b mb-4 overflow-x-auto">
            <button
              onClick={() => setView("appointments")}
              className={`py-2 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-base transition font-semibold ${
                view === "appointments"
                  ? "border-b-2 border-primary text-primary"
                  : "text-lightText hover:text-gray-700"
              }`}
            >
              📅 Appointments
            </button>
            <button
              onClick={() => setView("contacts")}
              className={`py-2 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-base transition font-semibold ${
                view === "contacts"
                  ? "border-b-2 border-primary text-primary"
                  : "text-lightText hover:text-gray-700"
              }`}
            >
              💬 Enquiries
            </button>
          </div>

          {/* DATA - Desktop Table & Mobile Cards */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-soft overflow-hidden">
            {loading ? (
              <p className="p-6 sm:p-10 text-center text-lightText">Loading...</p>
            ) : (
              (() => {
                const dataToDisplay = view === "appointments" ? appointments : contacts;
                
                return (
                  <>
                    {/* DESKTOP TABLE VIEW */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Name</th>
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Email</th>
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Phone</th>
                            {view === "appointments" && (
                              <>
                                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Service</th>
                                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Action</th>
                              </>
                            )}
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700">Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataToDisplay.map((item: any) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                              <td className="px-4 sm:px-6 py-3 font-semibold text-gray-900">{item.name}</td>
                              <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm">{item.email}</td>
                              <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm">{item.phone}</td>
                              {view === "appointments" && (
                                <>
                                  <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm">{item.service}</td>
                                  <td className="px-4 sm:px-6 py-3">
                                    <a
                                      href={`tel:${item.phone}`}
                                      className="text-primary font-semibold hover:text-emerald-700 transition"
                                    >
                                      Call
                                    </a>
                                  </td>
                                </>
                              )}
                              <td className="px-4 sm:px-6 py-3 text-gray-600 text-sm truncate max-w-xs">{item.message}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* MOBILE CARDS VIEW - SIMPLIFIED */}
                    <div className="md:hidden">
                      {dataToDisplay.length === 0 ? (
                        <p className="p-4 text-center text-lightText">No records found</p>
                      ) : (
                        <div className="divide-y">
                          {dataToDisplay.map((item: any) => (
                            <div key={item.id} className="p-4 hover:bg-gray-50 transition">
                              {/* Name and Action Row */}
                              <div className="flex justify-between items-start mb-3">
                                <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
                                {view === "appointments" && (
                                  <a
                                    href={`tel:${item.phone}`}
                                    className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full hover:bg-emerald-600 transition"
                                  >
                                    Call
                                  </a>
                                )}
                              </div>

                              {/* Email */}
                              <div className="flex items-start gap-2 mb-2">
                                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                                <a
                                  href={`mailto:${item.email}`}
                                  className="text-xs text-gray-600 hover:text-primary break-all"
                                >
                                  {item.email}
                                </a>
                              </div>

                              {/* Phone */}
                              <div className="flex items-center gap-2 mb-2">
                                <Phone size={16} className="text-primary flex-shrink-0" />
                                <a href={`tel:${item.phone}`} className="text-xs font-semibold text-gray-700">
                                  {item.phone}
                                </a>
                              </div>

                              {/* Service Badge - Appointments Only */}
                              {view === "appointments" && item.service && (
                                <div className="bg-blue-50 px-2 py-1 rounded text-xs text-blue-700 mb-2 inline-block">
                                  {item.service}
                                </div>
                              )}

                              {/* Message - If exists */}
                              {item.message && (
                                <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded mt-2 line-clamp-2">
                                  {item.message}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                );
              })()
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}