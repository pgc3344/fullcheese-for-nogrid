# 🧀 FullCheese for NoGrid

**치지직(CHZZK)을 그리드 설치 없이 최고 화질로.**
**Watch CHZZK in full quality — no Grid required.**

[한국어](#한국어) · [English](#english)

---

## 한국어

치지직은 고화질 시청에 그리드(네이버 라이브 스트리밍 커넥터) 설치를 안내하지만, 1080p 트랙은 처음부터 플레이어에 들어 있습니다. FullCheese for NoGrid는 그 중 가장 높은 화질을 골라 줄 뿐입니다.

- 🔒 **권한 0개** — `chzzk.naver.com`에서만 동작하는 스크립트 하나
- 📦 **빌드 불필요** — 파일 두 개, 압축 풀고 바로 로드
- 🚫 **P2P 미사용** — 그리드(P2P) 트랙은 고르지 않습니다
- 🎛️ **선택 존중** — 방송 진입 후 15초만 최고 화질을 맞추고, 그 뒤엔 직접 고른 화질을 유지

### 설치 (Chrome / Edge)

1. [Releases](https://github.com/pgc3344/fullcheese-for-nogrid/releases/latest)에서 `fullcheese-for-nogrid-vX.Y.Z.zip`을 받아 압축을 풉니다.
2. `chrome://extensions` → 오른쪽 위 **개발자 모드** 켜기
3. **압축해제된 확장 프로그램을 로드** → 풀어 둔 폴더 선택

### 문제 해결

- `naverliveconnector`로 열기 팝업이 뜨면 PC에서 "Naver Streaming Connector"를 삭제하세요.
- 화질이 안 바뀌면 개발자 도구 콘솔을 확인하고 이슈로 알려 주세요. 치지직 플레이어 업데이트로 동작이 바뀌었을 수 있습니다.

### 면책 조항

- **비공식 프로젝트입니다.** 네이버(NAVER Corp.) 및 치지직(CHZZK)과 어떠한 제휴·후원·승인 관계도 없습니다. "치지직", "CHZZK", "NAVER"는 각 소유자의 상표이며, 여기서는 호환 대상을 설명하기 위해서만 사용합니다.
- **교육·연구 목적으로 공개합니다.** 이 코드는 브라우저가 이미 받은 데이터 안에서 플레이어의 화질 선택만 바꿉니다. 인증·DRM·접근 제어를 우회하거나, 콘텐츠를 복제·저장·재배포하지 않습니다.
- **"있는 그대로(AS IS)" 제공되며 어떠한 보증도 하지 않습니다.** 작동 여부, 서비스 이용약관 위반 여부, 계정 제재 등 사용으로 인해 생기는 모든 결과와 책임은 전적으로 사용자에게 있습니다. 사용 전에 치지직 이용약관을 직접 확인하세요.
- 권리자의 요청이 있으면 확인 후 이 저장소를 수정하거나 내립니다. [이슈](https://github.com/pgc3344/fullcheese-for-nogrid/issues)로 연락해 주세요.

---

## English

CHZZK asks you to install Grid (Naver Live Streaming Connector) for high quality, but the 1080p track is already in the player. FullCheese for NoGrid simply selects the highest one.

- 🔒 **Zero permissions** — a single script that runs only on `chzzk.naver.com`
- 📦 **No build step** — two files, unzip and load
- 🚫 **No P2P** — Grid (P2P) tracks are never selected
- 🎛️ **Respects your choice** — forces top quality for 15 s after a stream loads, then leaves your manual selection alone

### Install (Chrome / Edge)

1. Download `fullcheese-for-nogrid-vX.Y.Z.zip` from [Releases](https://github.com/pgc3344/fullcheese-for-nogrid/releases/latest) and unzip it.
2. Open `chrome://extensions` → enable **Developer mode**
3. **Load unpacked** → select the unzipped folder

### Troubleshooting

- If a popup asks to open `naverliveconnector`, uninstall "Naver Streaming Connector".
- If quality doesn't change, check the DevTools console and open an issue — the CHZZK player may have changed.

### Disclaimer

- **Unofficial.** Not affiliated with, endorsed by, or sponsored by NAVER Corp. or CHZZK. "CHZZK" and "NAVER" are trademarks of their respective owners and are used here only to describe compatibility.
- **Published for educational and research purposes.** This code only changes the player's quality selection among data the browser has already received. It does not bypass authentication, DRM, or access controls, and does not copy, store, or redistribute any content.
- **Provided "AS IS", without warranty of any kind.** You are solely responsible for any consequences of use, including terms-of-service violations or account actions. Review CHZZK's terms before use.
- Rights holders may request changes or removal via [Issues](https://github.com/pgc3344/fullcheese-for-nogrid/issues); valid requests will be honored.

---

## Credits

Based on the approach in [Ich-mag-dich/fuck-chzzk-grid](https://github.com/Ich-mag-dich/fuck-chzzk-grid) (MIT). Rewritten as a build-free MV3 extension.

License: [MIT](LICENSE)
