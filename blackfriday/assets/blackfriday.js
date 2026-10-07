/* Black Friday Readiness · copy-to-clipboard for the prompts on /blackfriday/. */
(function () {
  "use strict";

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    var label = btn.textContent;
    var status = document.getElementById(btn.getAttribute("data-copy-status") || "");
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.getAttribute("data-copy-target"));
      if (!el) return;
      copyText(el.textContent.trim()).then(function (ok) {
        btn.textContent = ok ? "Copied" : "Copy failed";
        if (status) status.textContent = ok ? "Copied." : "Copy failed. Select the text and copy it manually.";
        setTimeout(function () { btn.textContent = label; if (status) status.textContent = ""; }, 2500);
      });
    });
  });
})();
