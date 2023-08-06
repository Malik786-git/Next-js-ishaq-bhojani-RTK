import React from "react";
import styles from "../../styles/Blog.module.css";
const index = () => {
  return (
    <div>
      <h1 className={styles.blog_heading}>Blog Page</h1>

      <p className={`${styles.p_style} ${styles.p_size}`}>
        warn - Fast Refresh had to perform a full reload due to a runtime error.
        wait - compiling... event - compiled client and server successfully in
        108 ms 218 modules
      </p>
    </div>
  );
};

export default index;
