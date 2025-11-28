import React from "react";

const Styles = {
    button: {
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s, border-color 0.3s, transform 0.2s, box-shadow 0.3s",
    },
    buttonHover: {
        color: "#000000ff",
    }
};

function ProfileButton({ size = 40, color = "#8cc96dff", hoverColor = "#8cc96dff", borderColor = "#cbbebeff", onClick  }) {
    const [hoveredButton, setHoveredButton] = React.useState(false);
    const [clickedButton, setClickedButton] = React.useState(false);

    const baseStyle = {
        ...Styles.button,
        backgroundColor: color,
        border: `2px solid ${borderColor}`,
        width: `${size}px`,
        height: `${size}px`,
        transform: clickedButton ? "scale(0.95)" : "scale(1)",
        boxShadow: "regular",
    };

    const hoverStyle = {
        ...Styles.buttonHover,
        backgroundColor: hoverColor,
        border: `2px solid ${borderColor}`,
        width: `${size}px`,
        height: `${size}px`,
        transform: clickedButton ? "scale(0.95)" : "scale(1.1)",
        boxShadow: `0 0 8px 2px ${hoverColor}`,
    };

    const handleClick = onClick ? onClick : () => alert("Profile Clicked");

    return (
        <div>
            <button
                style={hoveredButton ? hoverStyle : baseStyle}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => {
                    setHoveredButton(false);
                    setClickedButton(false);
                }}
                onMouseDown={() => setClickedButton(true)}
                onMouseUp={() => setClickedButton(false)}
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M16 16c0-2-4-3-4-3s-4 1-4 3v2h8v-2z" />
                </svg>
            </button>
        </div>
    );
}

export default ProfileButton;