import logo from "../../assets/logo.webp";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "../theme/theme-provider";
import { useState } from "react";

const NavBar = () => {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className=" flex items-center justify-between px-5 py-3">
      <img src={logo} height={60} width={60} alt="logo" />
      <div className=" flex items-center gap-1">
        <Label htmlFor="airplane-mode">{isDark ? "Dark" : "Light"}</Label>
        <Switch
          id="airplane-mode"
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
              setIsDark(false);
            } else {
              setTheme("dark");
              setIsDark(true);
            }
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
