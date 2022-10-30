import "./App.css";
import "./components/reset.css";
import Links from "./components/Links";

function App() {
  const me = "/tega.jpeg";
  return (
    <div className="App">
      <div className="body">
        <div className="profile">
          <div className="share">
            <img id="profile__img" src={me} alt="me" />
            <svg
              id="share"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3261 10.5062C17.5296 10.3318 17.6313 10.2446 17.6686 10.1409C17.7013 10.0498 17.7013 9.9502 17.6686 9.85914C17.6313 9.75539 17.5296 9.6682 17.3261 9.49383L10.2672 3.44331C9.917 3.14315 9.74191 2.99306 9.59367 2.98939C9.46483 2.98619 9.34177 3.04279 9.26035 3.14269C9.16667 3.25764 9.16667 3.48825 9.16667 3.94948V7.52886C7.38777 7.84007 5.75966 8.74146 4.54976 10.0949C3.23069 11.5704 2.50103 13.48 2.5 15.4591V15.9691C3.37445 14.9157 4.46626 14.0638 5.70063 13.4716C6.78891 12.9495 7.96535 12.6403 9.16667 12.5588V16.0505C9.16667 16.5117 9.16667 16.7424 9.26035 16.8573C9.34177 16.9572 9.46483 17.0138 9.59367 17.0106C9.74191 17.0069 9.917 16.8569 10.2672 16.5567L17.3261 10.5062Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h4 id="twitter">shemigam1</h4>
          <h4 id="slack" className="hide">
            shemigam1
          </h4>
        </div>
        <Links />
      </div>
      <div className="social">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4104 21.75 9.37496V9.37496C21.75 8.33952 20.9105 7.50012 19.8751 7.50012V7.50012C18.8395 7.50012 18 8.33959 18 9.37512V11.2498H19.8752ZM14.625 11.2498C15.6605 11.2498 16.5 10.4103 16.5 9.3748V4.12512C16.5 3.08959 15.6605 2.25012 14.625 2.25012V2.25012C13.5895 2.25012 12.75 3.08959 12.75 4.12512V9.3748C12.75 10.4103 13.5895 11.2498 14.625 11.2498V11.2498Z"
            fill="#2EB67D"
          />
          <path
            d="M4.12484 12.7502C3.08939 12.7502 2.25 13.5896 2.25 14.625V14.625C2.25 15.6605 3.08947 16.4999 4.12492 16.4999V16.4999C5.16045 16.4999 6 15.6604 6 14.6249V12.7502H4.12484ZM9.375 12.7502C8.33947 12.7502 7.5 13.5897 7.5 14.6252V19.8749C7.5 20.9104 8.33947 21.7499 9.375 21.7499V21.7499C10.4105 21.7499 11.25 20.9104 11.25 19.8749V14.6252C11.25 13.5897 10.4105 12.7502 9.375 12.7502V12.7502Z"
            fill="#E01E5A"
          />
          <path
            d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.625 21.75V21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751V19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5896 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625V14.625C21.7498 13.5895 20.9104 12.75 19.8748 12.75L14.6251 12.75C13.5896 12.75 12.7501 13.5895 12.7501 14.625V14.625Z"
            fill="#ECB22E"
          />
          <path
            d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25V2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492V4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375V9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375V9.375Z"
            fill="#36C5F0"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4627_392534)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_4627_392534">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <footer>
        <div className="footer">
          <svg
            width="188"
            height="32"
            viewBox="0 0 188 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.11641 23.1595V23.0689L15.0646 10.513V7.66814H1.71985V11.0043H10.125V11.0949L1.35779 23.5733V26.4828H15.0906V23.1595H6.11641ZM26.3923 13.5517V19.8233C26.3923 21.0259 26.1078 21.9569 25.5647 22.6035C25.0087 23.2629 24.3233 23.5862 23.5216 23.5862C22.694 23.5862 22.0991 23.3535 21.7371 22.888C21.375 22.4224 21.207 21.5948 21.207 20.431V13.5517H17.7414V21.3362C17.7414 22.306 17.8449 23.1336 18.0776 23.832C18.3104 24.5302 18.6336 25.0863 19.0734 25.5001C19.513 25.9139 20.0043 26.2241 20.5733 26.4181C21.1293 26.6121 21.7759 26.7026 22.5 26.7026C23.2371 26.7026 23.9354 26.5604 24.5949 26.2501C25.2543 25.9397 25.8363 25.5001 26.3406 24.9052H26.3923V26.4828H29.8578V13.5517H26.3923ZM40.6682 13.3319C39.8922 13.3319 39.181 13.5259 38.5086 13.8879C37.8363 14.2501 37.2543 14.7802 36.763 15.4526H36.7241V13.5517H33.2586V26.4828H36.7241V20.4828C36.7241 19.5001 37.0087 18.6854 37.5905 18.0518C38.1725 17.4311 38.9871 17.1078 40.0215 17.1078C40.2802 17.1078 40.5906 17.1207 40.9397 17.1466V13.3449C40.888 13.3449 40.7975 13.3319 40.6682 13.3319ZM45.0777 11.7285C45.6595 11.7285 46.1638 11.5216 46.5906 11.1078C47.0044 10.694 47.2242 10.2026 47.2242 9.60779C47.2242 9.03883 47.0044 8.53452 46.5906 8.12073C46.1638 7.70694 45.6595 7.50004 45.0777 7.50004C44.4828 7.50004 43.9656 7.70694 43.5518 8.12073C43.138 8.53452 42.931 9.03883 42.931 9.60779C42.931 9.99572 43.0216 10.3578 43.2156 10.6811C43.3966 11.0043 43.6552 11.2629 43.9914 11.444C44.3276 11.638 44.6897 11.7285 45.0777 11.7285ZM43.3448 26.4828H46.8104V13.5517H43.3448V26.4828ZM64.8751 26.4828H68.625V7.66814H64.8751V26.4828ZM80.2241 13.3319C79.4225 13.3319 78.6596 13.5001 77.9354 13.8233C77.2113 14.1466 76.5906 14.6121 76.0733 15.2199H76.0345V13.5517H72.569V26.4828H76.0345V19.9785C76.0345 18.8534 76.2931 17.9871 76.8233 17.3664C77.3535 16.7587 78.0647 16.4483 78.9698 16.4483C79.8103 16.4483 80.431 16.694 80.8448 17.1724C81.2457 17.6638 81.4526 18.4914 81.4526 19.681V26.4957H84.9181V18.8147C84.9181 17.8449 84.8018 17.0044 84.5819 16.2802C84.3492 15.569 84.0259 15.0001 83.5992 14.5733C83.1724 14.1595 82.6811 13.8492 82.125 13.6423C81.569 13.4354 80.9354 13.3319 80.2241 13.3319ZM92.263 26.7026C93.0517 26.7026 93.6983 26.6379 94.2026 26.4957C94.694 26.3664 95.1983 26.1595 95.6897 25.8879L94.7975 23.1207C94.2026 23.4311 93.6595 23.5733 93.1681 23.5733C92.7543 23.5733 92.4699 23.444 92.2888 23.1724C92.1078 22.9138 92.0302 22.4871 92.0302 21.9182V16.4224H95.5474V13.5517H92.0302V8.94832L88.5647 9.32331V13.5517H87.0388V16.4224H88.5647V22.3966C88.5647 23.819 88.888 24.8923 89.5474 25.6164C90.2069 26.3406 91.1121 26.7026 92.263 26.7026ZM109.526 19.9009C109.526 18.6465 109.254 17.5216 108.737 16.5259C108.207 15.5302 107.457 14.7544 106.5 14.1854C105.53 13.6164 104.418 13.3319 103.177 13.3319C102.272 13.3319 101.418 13.5001 100.629 13.8233C99.8277 14.1595 99.1552 14.6121 98.5863 15.194C98.0173 15.7759 97.5776 16.4871 97.2543 17.3147C96.9181 18.1423 96.763 19.0474 96.763 20.0043C96.763 21.3233 97.0474 22.5 97.6294 23.5216C98.2112 24.5561 99.013 25.3449 100.022 25.8879C101.03 26.431 102.155 26.7026 103.422 26.7026C104.664 26.7026 105.75 26.4828 106.707 26.0432C107.651 25.6035 108.414 25.0087 109.009 24.2587L106.759 22.1638C105.944 23.1466 104.909 23.638 103.668 23.6251C102.841 23.6251 102.129 23.3923 101.547 22.9526C100.966 22.5129 100.578 21.9182 100.371 21.1423H109.435C109.487 20.9354 109.526 20.5216 109.526 19.9009ZM103.293 16.3837C104.017 16.3837 104.625 16.5906 105.103 16.9914C105.569 17.3923 105.905 17.9483 106.086 18.6465H100.384C100.578 17.9225 100.927 17.3535 101.444 16.9656C101.961 16.5776 102.569 16.3837 103.293 16.3837ZM119.702 13.3319C118.926 13.3319 118.216 13.5259 117.543 13.8879C116.871 14.2501 116.289 14.7802 115.797 15.4526H115.758V13.5517H112.294V26.4828H115.758V20.4828C115.758 19.5001 116.043 18.6854 116.625 18.0518C117.207 17.4311 118.022 17.1078 119.057 17.1078C119.315 17.1078 119.625 17.1207 119.975 17.1466V13.3449C119.923 13.3449 119.832 13.3319 119.702 13.3319ZM129.879 13.3319C129.078 13.3319 128.315 13.5001 127.591 13.8233C126.867 14.1466 126.246 14.6121 125.728 15.2199H125.689V13.5517H122.225V26.4828H125.689V19.9785C125.689 18.8534 125.949 17.9871 126.478 17.3664C127.009 16.7587 127.72 16.4483 128.625 16.4483C129.465 16.4483 130.087 16.694 130.5 17.1724C130.901 17.6638 131.107 18.4914 131.107 19.681V26.4957H134.573V18.8147C134.573 17.8449 134.457 17.0044 134.237 16.2802C134.004 15.569 133.681 15.0001 133.255 14.5733C132.828 14.1595 132.337 13.8492 131.78 13.6423C131.224 13.4354 130.591 13.3319 129.879 13.3319ZM142.073 26.7026C143.702 26.7026 144.943 26.3406 145.798 25.5905C146.651 24.8534 147.091 23.8836 147.091 22.6811C147.091 22.3707 147.064 22.0733 147.012 21.8147C146.845 20.9612 146.34 20.263 145.513 19.7457C145.022 19.4354 144.065 19.0216 142.643 18.4914C141.956 18.2328 141.465 18 141.155 17.7931C140.845 17.5862 140.703 17.3535 140.703 17.0949C140.703 16.7845 140.832 16.5518 141.09 16.3837C141.35 16.2155 141.633 16.1251 141.97 16.1251C142.461 16.1251 142.978 16.2415 143.521 16.4742C144.065 16.7069 144.569 17.0431 145.06 17.4958L146.741 14.9612C146.004 14.3923 145.255 13.9785 144.504 13.7199C143.742 13.4612 142.914 13.3319 142.008 13.3319C141.129 13.3319 140.328 13.5001 139.629 13.8104C138.931 14.1337 138.375 14.5863 137.961 15.1811C137.547 15.7759 137.354 16.4483 137.354 17.2113C137.354 17.6251 137.393 18 137.495 18.3363C137.587 18.6854 137.728 18.9957 137.909 19.2543C138.091 19.5259 138.297 19.7716 138.53 19.9785C138.763 20.1983 139.035 20.3923 139.358 20.5733C139.668 20.7544 139.978 20.8966 140.289 21.0259C140.599 21.1552 140.948 21.2846 141.336 21.4138C141.944 21.6208 142.397 21.7759 142.707 21.9052C143.017 22.0346 143.25 22.1768 143.431 22.332C143.599 22.4871 143.69 22.6552 143.69 22.8491C143.69 23.1724 143.548 23.4311 143.263 23.6251C142.978 23.832 142.591 23.9225 142.099 23.9225C140.78 23.9225 139.591 23.4182 138.517 22.4095L136.836 24.8018C138.272 26.069 140.018 26.7026 142.073 26.7026ZM157.487 13.3319C156.647 13.3319 155.871 13.4872 155.147 13.7845C154.422 14.0948 153.802 14.5345 153.284 15.1164H153.233V6.98279H149.768V26.4828H153.233V19.9268C153.233 18.7888 153.492 17.9354 154.035 17.3405C154.564 16.7457 155.302 16.4483 156.258 16.4483C157.112 16.4483 157.746 16.694 158.159 17.1595C158.573 17.638 158.781 18.4527 158.781 19.5905V26.4957H162.259V18.7112C162.259 17.7543 162.142 16.9138 161.909 16.2155C161.677 15.5173 161.341 14.9483 160.914 14.5345C160.475 14.1208 159.982 13.8233 159.414 13.6294C158.845 13.4354 158.211 13.3319 157.487 13.3319ZM167.457 11.7285C168.039 11.7285 168.543 11.5216 168.97 11.1078C169.384 10.694 169.603 10.2026 169.603 9.60779C169.603 9.03883 169.384 8.53452 168.97 8.12073C168.543 7.70694 168.039 7.50004 167.457 7.50004C166.862 7.50004 166.345 7.70694 165.931 8.12073C165.517 8.53452 165.31 9.03883 165.31 9.60779C165.31 9.99572 165.401 10.3578 165.595 10.6811C165.775 11.0043 166.035 11.2629 166.37 11.444C166.707 11.638 167.069 11.7285 167.457 11.7285ZM165.725 26.4828H169.19V13.5517H165.725V26.4828ZM180.298 13.3319C178.643 13.3319 177.336 13.9009 176.38 15.0388H176.328V13.5517H172.862V31.7199H176.328V25.0345H176.38C177.298 26.1466 178.564 26.7026 180.194 26.7026C181.074 26.7026 181.901 26.5475 182.664 26.2241C183.426 25.9139 184.086 25.4612 184.629 24.8923C185.172 24.3233 185.612 23.6121 185.922 22.7845C186.232 21.9569 186.388 21.0388 186.388 20.0561C186.388 19.2803 186.284 18.5561 186.091 17.8578C185.884 17.1595 185.599 16.5388 185.237 15.9957C184.875 15.4526 184.436 14.9742 183.944 14.5733C183.439 14.1725 182.871 13.8621 182.25 13.6552C181.63 13.4483 180.97 13.3319 180.298 13.3319ZM179.561 23.5992C178.926 23.5992 178.358 23.4569 177.841 23.1724C177.323 22.888 176.923 22.4613 176.625 21.9182C176.328 21.375 176.185 20.7673 176.185 20.069C176.185 19.5647 176.263 19.0863 176.431 18.6336C176.599 18.194 176.832 17.806 177.129 17.4828C177.414 17.1724 177.775 16.9138 178.189 16.7328C178.603 16.5518 179.069 16.4483 179.561 16.4483C180.504 16.4483 181.293 16.7845 181.927 17.444C182.548 18.1164 182.871 18.9828 182.871 20.069C182.871 21.1164 182.56 21.9699 181.94 22.6164C181.319 23.276 180.53 23.5992 179.561 23.5992Z"
              fill="black"
            />
            <path
              d="M56.222 26.8858C57.2888 26.8858 58.2134 26.5066 58.972 25.748C59.7306 24.9893 60.1336 24.0885 60.1336 23.0217C60.1336 21.9786 59.7306 21.054 58.972 20.2954C58.2134 19.5368 57.2888 19.1337 56.222 19.1337C55.1077 19.1337 54.1594 19.513 53.4008 20.2717C52.6422 21.0303 52.2629 21.9549 52.2629 23.0217C52.2629 24.1122 52.6422 25.0131 53.4008 25.7717C54.1594 26.5303 55.1077 26.8858 56.222 26.8858Z"
              fill="#E7332B"
            />
          </svg>
          <span>HNG Internship 9 Forntend Task</span>
          <img
            src="https://businessday.ng/wp-content/uploads/2021/03/Untitled-design-2021-03-19T131641.082.png"
            alt="I4G logo"
            id="i4g-logo"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;