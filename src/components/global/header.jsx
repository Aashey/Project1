import { Button } from "antd";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <>
      <div className="nav">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
};

export default Header;
