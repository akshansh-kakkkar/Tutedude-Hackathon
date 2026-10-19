import { FileCode2, GitBranch } from "lucide-react";

const lines = [
  { number: "18", type: "context", code: '<nav aria-label="Services">' },
  { number: "19", type: "removed", code: '  <a href="/forms">Click here</a>' },
  { number: "19", type: "added", code: '  <a href="/certificates/apply">' },
  { number: "20", type: "added", code: "    Apply for a certificate" },
  { number: "21", type: "added", code: "  </a>" },
  { number: "22", type: "context", code: "</nav>" },
];

export default function HeroPatch() {
  return (
    <figure className="hero-workbench" aria-label="Example code change: replace a vague Click here link with Apply for a certificate, linking directly to the service.">
      <div className="workbench-label" aria-hidden="true"><span>EXAMPLE / CITIZEN PORTAL</span><span>PATCH / 001</span></div>
      <div className="patch-window" aria-hidden="true">
        <div className="patch-toolbar"><span><FileCode2 size={15} /> services.html</span><span><GitBranch size={13} /> redesign</span></div>
        <div className="patch-heading"><span>Make the action clear.</span><span className="patch-stats">−1 / +3</span></div>
        <div className="patch-code">
          {lines.map((line, index) => (
            <div className={`patch-line patch-${line.type}`} key={index}>
              <span className="patch-number">{line.number}</span>
              <span className="patch-sign">{line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}</span>
              <code>{line.code}</code>
            </div>
          ))}
        </div>
        <div className="patch-footer"><span>1 file changed</span><span>HTML <span className="patch-caret">▊</span></span></div>
      </div>
      <figcaption className="patch-caption"><span>THE IDEA</span><p>A clear label. A direct link.<br />One less thing for someone to figure out.</p></figcaption>
    </figure>
  );
}
