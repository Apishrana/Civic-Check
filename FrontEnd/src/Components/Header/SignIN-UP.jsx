import React from "react";

function SignINUP() {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => alert("Sign In Clicked")}>Sign In</button>
      <button style={styles.button} onClick={() => alert("Sign Up Clicked")}>Sign Up</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }
};  