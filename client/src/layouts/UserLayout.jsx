import { Outlet } from "react-router-dom";
import UserHeaderComponent from "../components/UserHeaderComponent"; // Using your new header
import FooterComponent from "../components/FooterComponent";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Header - Specific for Signed In Users */}
      <UserHeaderComponent />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* This renders the Books, Authors, and Profile pages */}
        <Outlet />
      </main>

      {/* Footer */}
      <FooterComponent />

    </div>
  );
};

export default UserLayout;