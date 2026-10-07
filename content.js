(() => {
  let list = null;
  const from = Array.from;
  const isTracks = a => a && typeof a === "object" && a.length > 0 && a[0] &&
    typeof a[0].label === "string" && typeof a[0].width === "number" && typeof a[0].selected === "boolean";
  Array.from = function (src, ...rest) {
    if (!list && isTracks(src)) list = src;
    return from.call(this, src, ...rest);
  };

  const isP2P = t => t.kind === "p2p" || t.kind === "low-latency-p2p";
  const isLL = t => t.kind === "low-latency" || t.kind === "low-latency-p2p";
  const side = t => Math.min(t.width, t.height);

  let applied = "", left = 0;
  setInterval(() => {
    if (!list || !list.length) {
      list = null;
      try { window.__getLiveInfo?.(); } catch {}
      return;
    }
    const tracks = from(list);
    const id = tracks.map(t => t.label).join(",");
    if (id !== applied) { applied = id; left = 15; } // 방송 바뀌면 15초간 재적용
    if (left-- <= 0) return;                         // 이후엔 사용자 선택 존중

    const ok = tracks.filter(t => !isP2P(t) && t.label !== "ABR" && side(t) > 0);
    if (!ok.length) return;
    const best = ok.reduce((a, b) =>
      side(b) !== side(a) ? (side(b) > side(a) ? b : a) : (isLL(b) && !isLL(a) ? b : a));
    const cur = tracks.find(t => t.selected);
    if (!cur || side(cur) < side(best)) best.selected = true;
  }, 1000);
})();
