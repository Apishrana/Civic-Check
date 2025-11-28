import React from "react";
import EvidenceList from "./EvidenceList";

function ResultCard({ result }) {
  if (!result) return null;
  return (
    <div style={{
      marginTop: 24, background: "#f6f8fa", padding: 20,
      borderRadius: 8, boxShadow: "0 2px 12px #eee"
    }}>
      <h3>Prediction</h3>
      <div>
        <b>Label:</b> {result.label === 0 ? "REAL" : "FAKE"}<br />
        <b>Confidence:</b> {(result.confidence * 100).toFixed(1)}%<br />
      </div>
      <div style={{ marginTop: 14 }}>
        <b>Evidence from Internet:</b>
        <EvidenceList links={result.evidence_links} />
      </div>
    </div>
  );
}

export default ResultCard;
