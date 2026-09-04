import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gutiérrez Pisos — Colocación de pisos flotantes y techos en PVC en CABA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#f2e9de",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#4d3223" }}>
          <span>Gutiérrez</span>
          <span style={{ color: "#a8713f", marginLeft: 20 }}>Pisos</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#6f472c", marginTop: 28, maxWidth: 900 }}>
          Pisos flotantes, vinílicos y techos en PVC en CABA. Presupuesto en el día.
        </div>
      </div>
    ),
    { ...size }
  );
}
