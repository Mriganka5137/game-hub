import logo from "../../assets/logo.webp";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "../theme/theme-provider";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 py-3 border shadow-sm border-sky-300">
      <img src={logo} height={60} width={60} alt="logo" />
      <div className=" flex items-center gap-2.5">
        <Label htmlFor="airplane-mode">
          {isDark ? (
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all stroke-sky-400" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all stroke-yellow-400" />
          )}
        </Label>
        <Switch
          id="airplane-mode"
          className=""
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
