import { Activity, Cpu, FileCode2, GitBranch, Network, ShieldCheck } from "lucide-react";

export default function HeroPatch() {
  return (
    <figure className="hero-workbench" aria-label="Terminal showing a website audit and rebuild workflow for a citizen portal.">
      <div className="workbench-label" aria-hidden="true"><span>BUILD CONSOLE / 01</span><span><i /> LIVE SESSION</span></div>
      <div className="terminal-shell">
        <header className="terminal-tabs" aria-hidden="true">
          <span className="terminal-tab-active"><FileCode2 size={14} /> citizen-portal</span><span>audit.log</span><span>+</span><span className="terminal-window-actions">— □ ×</span>
        </header>
        <div className="terminal-main" aria-hidden="true">
          <div className="terminal-command"><span>builder@tutedude:~$</span> ./inspect --site citizen-portal</div>
          <div className="terminal-output-line"><span className="terminal-muted">[scan]</span> mapping the applicant journey...</div>
          <div className="terminal-output-line terminal-warning"><span>[!]</span> vague action found: “Click here”</div>
          <div className="terminal-command"><span>builder@tutedude:~$</span> ./rebuild --make-it-clear</div>
          <div className="terminal-output-line"><span className="terminal-success">[ok]</span> route: /certificates/apply</div>
          <div className="terminal-output-line"><span className="terminal-success">[ok]</span> label: Apply for a certificate</div>
          <div className="terminal-command"><span>builder@tutedude:~$</span> git diff --stat</div>
          <div className="terminal-diff"><span className="terminal-success">+</span> 3 additions <span className="terminal-warning">−</span> 1 removal <span className="terminal-muted">/ services.html</span></div>
          <div className="terminal-command terminal-cursor"><span>builder@tutedude:~$</span><b>▊</b></div>
        </div>
        <aside className="terminal-sidebar" aria-hidden="true">
          <div><Activity size={14} /><span>STATUS</span></div><strong>READY</strong><span>01 / ISSUE FOUND</span><span>02 / ROUTE FIXED</span><span>03 / READY TO SHIP</span><div className="terminal-branch"><GitBranch size={13} /> main</div>
        </aside>
        <footer className="terminal-statusbar" aria-hidden="true"><span>UTF-8</span><span><ShieldCheck size={12} /> ACCESSIBLE BUILD</span><span>Ln 24, Col 1</span></footer>
      </div>
      <div className="computer-rig" aria-hidden="true">
        <div className="rig-cable rig-cable-left" />
        <div className="rig-cable rig-cable-right" />
        <div className="rig-monitor-base"><span /><span /><span /></div>
        <div className="rig-keyboard">
          <div className="rig-key-row"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rig-key-row"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="rig-key-row rig-key-row-last"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="rig-node rig-node-left"><Cpu size={14} /><span>CORE</span><b /><b /><b /></div>
        <div className="rig-node rig-node-right"><Network size={14} /><span>UPLINK</span><strong>03</strong></div>
      </div>
      <figcaption className="patch-caption"><span>YOUR MISSION</span><p>Spot the friction. Rewrite the flow.<br />Ship a clearer public service.</p></figcaption>
    </figure>
  );
}
