import React from "react";

function EvidenceList({ links }) {
  if (!links?.length) return <span>No evidence found.</span>;
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </li>
      ))}
    </ul>
  );
}
export default EvidenceList;
