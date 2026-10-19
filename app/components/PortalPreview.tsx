"use client";

import { useState } from "react";
import { ArrowRight, Check, MousePointer2, Search } from "lucide-react";

export default function PortalPreview() {
  const [redesigned, setRedesigned] = useState(true);

  return (
    <section className="section preview-section" aria-labelledby="preview-title">
      <div className="preview-copy">
        <p className="eyebrow">02 / IN PRACTICE</p>
        <h2 id="preview-title">Same service.<br /><span className="purple-text">A clearer route.</span></h2>
        <p>A visitor needs a certificate. Give them a way to apply, a way to check its status, and labels they can understand. Here’s what that could look like.</p>
        <ul className="preview-benefits">
          <li><span aria-hidden="true">01</span> Put the common tasks up front.</li>
          <li><span aria-hidden="true">02</span> Say where each link will take you.</li>
          <li><span aria-hidden="true">03</span> Make room for smaller screens.</li>
        </ul>
        <span className="preview-caption"><MousePointer2 size={14} aria-hidden="true" /> Compare the two layouts</span>
      </div>
      <div className="preview-stage">
        <div className="preview-controls" role="group" aria-label="Compare example portal designs">
          <button type="button" aria-pressed={!redesigned} aria-controls="portal-example" onClick={() => setRedesigned(false)}>01 / Before</button>
          <button type="button" aria-pressed={redesigned} aria-controls="portal-example" onClick={() => setRedesigned(true)}>02 / After</button>
        </div>
        <div className="portal-frame">
          <div className="portal-browser"><div><i /><i /><i /></div><span>citizen-portal / concept preview</span><span aria-hidden="true">↗</span></div>
          <div id="portal-example" role="region" aria-label={redesigned ? "Redesigned portal concept" : "Original portal concept"} aria-live="polite" className={`portal-example ${redesigned ? "portal-after" : "portal-before"}`} key={String(redesigned)}>
            {redesigned ? <>
              <div className="portal-brand"><span className="portal-symbol">c.</span><strong>Citizen services</strong><span>Service directory</span></div>
              <span className="portal-welcome">PUBLIC SERVICES</span>
              <h3>What do you<br />need to do?</h3>
              <div className="portal-search"><Search size={15} /><span>Find a service</span><ArrowRight size={17} /></div>
              <div className="portal-services"><div><span>01</span><strong>Apply for a certificate</strong><ArrowRight size={15} /></div><div><span>02</span><strong>Track an application</strong><ArrowRight size={15} /></div></div>
              <div className="portal-status"><Check size={14} /><span>Applications and status, in one place.</span></div>
            </> : <>
              <div className="old-heading">CITIZEN SERVICES PORTAL</div><div className="old-nav">HOME | ABOUT US | DEPARTMENTS | DOWNLOADS</div>
              <div className="old-notice">NOTICE: Please read all instructions before proceeding.</div>
              <div className="old-columns"><div><u>Important links</u><span>Application forms</span><span>Online services (NEW)</span><span>Click here for details</span><span>Other services</span></div><div><h3>Welcome to the portal</h3><p>For application submission, kindly refer to the relevant section below.</p><span className="old-link">Click here to proceed &gt;&gt;</span><span className="old-link">Download instructions (PDF)</span></div></div>
              <div className="old-bottom">Best viewed on a desktop computer.</div>
            </>}
          </div>
        </div>
        <p className="concept-note">Illustrative concept. Your redesign starts with a website you choose.</p>
      </div>
    </section>
  );
}
