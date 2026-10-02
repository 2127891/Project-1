export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><div>
      <a className="wordmark" href="#top" aria-label="LEVEL Studio home"><span className="wordmark-symbol">L.</span><span>LEVEL<small>STUDIO / COPENHAGEN</small></span></a>
      <p className="footer-signoff">For the ones who notice.</p>
    </div><div className="footer-links">
      <div><p>Explore</p><a href="#featured">Shop all</a><a href="#categories">Keyboards</a><a href="#categories">Mice & audio</a></div>
      <div><p>Support</p><a href="#service">Shipping & returns</a><a href="#service">Warranty</a><a href="mailto:hello@level.studio">Get in touch</a></div>
      <div><p>Elsewhere</p><a href="#top">Instagram ↗</a><a href="#top">Journal ↗</a></div>
    </div></div>
    <div className="footer-bottom"><span>© 2026 LEVEL Studio</span><span>Designed with intent in Copenhagen</span><span>Privacy / Terms</span></div>
  </footer>;
}