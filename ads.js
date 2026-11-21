/* Home Safely Solutions - Google AdSense control file
   Upload this file next to index.html.
   Approval ke baad sirf neeche 3 settings badlein. */
var ADS = {
  enabled: false,                 // approval ke baad true kar dein
  client: "ca-pub-3874647153529072", // apna AdSense publisher ID
  slot: "0000000000"              // apna ad unit (banner) slot ID
};

(function () {
  var loaded = false;
  function valid() {
    return ADS.enabled && /^ca-pub-\d{10,}$/.test(ADS.client) && /^\d{6,}$/.test(ADS.slot);
  }
  function run() {
    if (!valid()) return; // disabled: ad slots hidden rehte hain
    if (!loaded) {
      var s = document.createElement("script");
      s.async = true;
      s.crossOrigin = "anonymous";
      s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADS.client;
      document.head.appendChild(s);
      loaded = true;
    }
    var slots = document.querySelectorAll(".adslot:not([data-done])");
    for (var i = 0; i < slots.length; i++) {
      var el = slots[i];
      el.setAttribute("data-done", "1");
      el.style.display = "block";
      el.style.margin = "16px 0";
      el.style.textAlign = "center";
      el.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' + ADS.client +
        '" data-ad-slot="' + ADS.slot + '" data-ad-format="auto" data-full-width-responsive="true"></ins>';
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    }
  }
  window.addEventListener("hashchange", function () { setTimeout(run, 50); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
