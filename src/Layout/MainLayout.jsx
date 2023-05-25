import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../components/Shared/NavBar/NavBar";
import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import { ClimbingBoxLoader } from "react-spinners";

const MainLayout = () => {
  const { loading } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-288px)]">
        {loading ? (
          <div className="flex justify-center relative bottom-[-100px]">
            <ClimbingBoxLoader
              color={"#ef3e92"}
              loading={loading}
              // cssOverride={styles}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            ></ClimbingBoxLoader>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
