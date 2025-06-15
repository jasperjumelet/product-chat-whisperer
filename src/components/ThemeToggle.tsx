
import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // On initial render, theme can be "system" - let's detect system preference.
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Controlled switch: on=true means dark
  const isDark = mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));
  const toggle = () => setTheme(isDark ? "light" : "dark");

  if (!mounted) {
    // Prevent ssr mismatch
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        disabled
        className="p-2 opacity-0 pointer-events-none"
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="bg-muted flex items-center gap-2 px-2 py-1 rounded-full border hover:bg-secondary transition shadow"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
      <span className="text-xs">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
