import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      variant="outline"
      size="icon"
    >
      {theme === "light" && <Sun />}
      {theme === "dark" && <Moon />}
    </Button>
  );
};
