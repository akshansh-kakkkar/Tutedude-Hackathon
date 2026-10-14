"use client";

import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, MousePointer2, Search, Sparkles } from "lucide-react";

export default function PortalPreview() {
  const [redesigned, setRedesigned] = useState(true);

  return (
    <section className="section preview-section" aria-labelledby="preview-title">
      <div className="preview-copy">
        <p className="eyebrow">THE SAME SERVICE. A WHOLE NEW FEELING.</p>
        <h2 id="preview-title">From digital maze.<br />To <span className="purple-text">“that was easy.”</span></h2>
        <p>You know the experience. A dozen links, a confusing form, and no idea what comes next. Now imagine being the person who fixes it.</p>
        <ul className="preview-benefits">
          <li><CheckCircle2 size={18} /> Clear next steps, fewer dead ends.</li>
          <li><CheckCircle2 size={18} /> Designed for people, on every screen.</li>
          <li><CheckCircle2 size={18} /> A public service that feels like a service.</li>
        </ul>
        <span className="preview-caption"><MousePointer2 size={16} /> Tap the tabs. See the difference.</span>
      </div>
      <div className="preview-stage">
        <div className="preview-controls" role="group" aria-label="Compare example portal designs">
          <button type="button" aria-pressed={!redesigned} onClick={() => setRedesigned(false)}>The usual experience</button>
          <button type="button" aria-pressed={redesigned} onClick={() => setRedesigned(true)}><Sparkles size={14} /> The glow-up</button>
        </div>
        <div className="portal-frame">
          <div className="portal-browser"><div><i /><i /><i /></div><span>citizen-portal / concept preview</span><span aria-hidden="true">↗</span></div>
          <div role="region" aria-label={redesigned ? "Redesigned portal concept" : "Original portal concept"} aria-live="polite" className={`portal-example ${redesigned ? "portal-after" : "portal-before"}`} key={String(redesigned)}>
            {redesigned ? <>
              <div className="portal-brand"><span className="portal-symbol">c.</span><strong>Citizen services</strong><span>Built around you.</span></div>
              <span className="portal-welcome">LESS PAPERWORK ENERGY.</span>
              <h3>Your next step.<br />Right here.</h3>
              <div className="portal-search"><Search size={15} /><span>What would you like to do?</span><ArrowRight size={17} /></div>
              <div className="portal-services"><div><span>01</span><strong>Apply for a certificate</strong><ArrowRight size={15} /></div><div><span>02</span><strong>Track an application</strong><ArrowRight size={15} /></div></div>
              <div className="portal-status"><Check size={14} /><span>Clear steps. Accessible design. Mobile-ready.</span></div>
            </> : <>
              <div className="old-heading">CITIZEN SERVICES PORTAL</div><div className="old-nav">HOME | ABOUT US | DEPARTMENTS | DOWNLOADS</div>
              <div className="old-notice">NOTICE: Please read all instructions before proceeding.</div>
              <div className="old-columns"><div><u>Important links</u><span>Application forms</span><span>Online services (NEW)</span><span>Click here for details</span><span>Other services</span></div><div><h3>Welcome to the portal</h3><p>For application submission, kindly refer to the relevant section below.</p><span className="old-link">Click here to proceed &gt;&gt;</span><span className="old-link">Download instructions (PDF)</span></div></div>
              <div className="old-bottom">Best viewed on desktop. Where do you click next?</div>
            </>}
          </div>
        </div>
        <p className="concept-note">Illustrative concept. Your redesign starts with a website you choose.</p>
      </div>
    </section>
  );
}
