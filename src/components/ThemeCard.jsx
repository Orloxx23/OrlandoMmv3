import React, { useEffect, useState } from "react";
import styles from "@/styles/ThemeCard.module.css";
import { useTheme } from "next-themes";

export default function ThemeCard() {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      if (resolvedTheme === "light") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    } else {
      if (theme === "light") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }
  }, [theme, resolvedTheme]);

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

  return (
    <div className="flex justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
      <div className={styles["checkbox-wrapper-5"]}>
        <div className={styles.check}>
          <input
            type="checkbox"
            id="check-5"
            value={checked}
            checked={checked}
            onChange={handleChange}
            name="theme"
            aria-label="Theme"
          />
          <label name="themelabel" htmlFor="check-5"></label>
        </div>
      </div>
    </div>
  );
}
