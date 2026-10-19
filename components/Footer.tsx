import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer d-flex">
      <div className="footerArt">
        <Image
          src="/assets/footer-art.png"
          alt="footer art"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="footerInner">
        <div className="footerBg"></div>
        <div>
          <div className="footerContent">
            <div>
              <div className="footerLogo">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  어푸어푸<span style={{ padding: '0 7px' }}>프렌즈</span>
                </div>
              </div>
            </div>
            <div className="footerNav">
              <div>
                <h4>ABOUT</h4>
                <Link href="/friends">프렌즈 소개</Link>
                <Link href="/story">어푸어푸 스토리</Link>
              </div>
              <div>
                <h4>CUSTOMER</h4>
                <a href="javascript:void(0)">공지사항</a>
                <a href="javascript:void(0)">FAQ</a>
              </div>
              <div>
                <h4>PARTNERSHIP</h4>
                <a href="javascript:void(0)">제휴 문의</a>
                <a href="javascript:void(0)">입점 문의</a>
              </div>
              <div>
                <h4>FOLLOW US</h4>
                <a
                  href="https://www.instagram.com/apuapu_friends/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                {/* <a href="javascript:void(0)">YouTube</a> */}
              </div>
            </div>
          </div>
          <div className="footerBottom">
            © 어푸어푸 프렌즈 APU APU FRIENDS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
