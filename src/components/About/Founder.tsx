import React from "react";

const Founder: React.FC = () => {
  const purple = "#A65EA5";
  const textColor = "#2b2b2b";

  return (
    <section
      style={{
        padding: "80px 16px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* DECORATIVE ICON */}
        <img
          src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/orchid-icon.png"
          alt="decorative shape"
          style={{
            position: "absolute",
            right: "-120px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "420px",
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* MAIN CONTENT */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              flex: "1 1 400px",
              display: "flex",
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
              }}
            >
              {/* PURPLE ACCENT CIRCLE */}
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  backgroundColor: "rgba(166, 94, 165, 0.1)",
                  top: "20px",
                  left: "-10px",
                  zIndex: 1,
                }}
              />

              <img
                src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/founder.png"
                alt="Dr. Lalitha"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "0 0 0 80px",
                  zIndex: 2,
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              flex: "1 1 500px",
              color: textColor,
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* TAG */}
            <div
              style={{
                display: "inline-block",
                border: `1px solid ${purple}`,
                color: purple,
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Founder & CEO
            </div>

            {/* NAME */}
            <h2
              style={{
                fontFamily: "Marcellus SC",
                color: textColor,
                marginBottom: "20px",
                fontSize: "clamp(32px, 6vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.2,
                wordBreak: "break-word",
              }}
            >
              Dr. Lalitha
            </h2>

            {/* QUOTE */}
            <p
              style={{
                fontSize: "clamp(16px, 4vw, 23px)",
                lineHeight: 1.7,
                color: "#444",
                maxWidth: "600px",
                fontStyle: "italic",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              “Our goal was never just to build a clinic; it was to create a
              sanctuary where health meets comfort. At Orchid, we believe every
              patient deserves a smile they are proud of, delivered with the
              gentleness they deserve.”
            </p>

            {/* UNDERLINE */}
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "3px",
                backgroundColor: "#5a2d5f",
                marginTop: "32px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;