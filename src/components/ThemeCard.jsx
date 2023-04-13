import React, { useEffect } from "react";
import styles from "@/styles/ThemeCard.module.css";
import { useTheme } from "next-themes";

export default function ThemeCard() {
  const [checked, setChecked] = React.useState(true);
  const { theme, setTheme } = useTheme();

  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setChecked(true);
      setTheme("light");
    } else {
      setChecked(false);
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);

  return (
    <div className="flex justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
      <div className={styles["checkbox-wrapper-5"]}>
        <div className={styles.check}>
          <input type="checkbox" id="check-5" value={checked} checked={checked} onChange={handleChange} />
          <label htmlFor="check-5"></label>
        </div>
      </div>
    </div>
  );
}
