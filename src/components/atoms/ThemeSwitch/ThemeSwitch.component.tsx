import useStore from "@hooks/useStore";

const ThemeSwitch = () => {
  const {
    theme: { value },
  } = useStore();
  return value === "trueDark" ? (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3516 9.28127C20.7534 8.87951 21.0022 8.46099 21.0903 8.03732C21.2063 7.48088 21.0349 6.93947 20.6082 6.51279L15.9873 1.89279C15.3797 1.28564 14.336 1.03427 13.2188 2.14845L13.1329 2.23439C13.1009 2.26632 13.0756 2.30423 13.0583 2.34596C13.041 2.38769 13.0321 2.43242 13.0321 2.47759C13.0321 2.52277 13.041 2.5675 13.0583 2.60923C13.0756 2.65096 13.1009 2.68887 13.1329 2.7208L19.7776 9.3672C19.8095 9.39942 19.8476 9.425 19.8894 9.44245C19.9313 9.4599 19.9763 9.46889 20.0216 9.46889C20.067 9.46889 20.112 9.4599 20.1538 9.44245C20.1957 9.425 20.2338 9.39942 20.2657 9.3672L20.3516 9.28127ZM11.2483 6.57767L11.2414 6.67822C11.2186 6.98673 10.9458 7.50107 10.645 7.80142L2.53122 15.9139C2.05341 16.3913 1.82395 17.0126 1.88454 17.6628C1.93911 18.2437 2.22571 18.8203 2.69149 19.2857L3.21442 19.8086C3.75626 20.35 4.40809 20.625 5.04016 20.625C5.32862 20.6244 5.61404 20.5661 5.87968 20.4537C6.14531 20.3412 6.38581 20.1768 6.58704 19.9702L14.7013 11.8577C15.005 11.5539 15.5108 11.2862 15.8257 11.2617C16.5768 11.205 17.6979 11.1208 18.7386 10.5892C18.7626 10.5768 18.7833 10.559 18.799 10.5371C18.8148 10.5152 18.8252 10.4899 18.8294 10.4633C18.8336 10.4366 18.8314 10.4093 18.8231 10.3837C18.8148 10.358 18.8006 10.3347 18.7816 10.3155L12.1743 3.70865C12.1551 3.68947 12.1317 3.67509 12.106 3.66668C12.0802 3.65827 12.0528 3.65607 12.026 3.66026C11.9993 3.66445 11.9739 3.67491 11.9519 3.69079C11.93 3.70667 11.9121 3.72751 11.8997 3.75162C11.3789 4.73947 11.3059 5.76728 11.2483 6.57767ZM10.8207 12.8868C10.7087 13.0244 10.5568 13.124 10.386 13.1718C10.2151 13.2197 10.0336 13.2135 9.86636 13.154C9.69916 13.0946 9.55446 12.9848 9.45213 12.8398C9.3498 12.6949 9.29486 12.5218 9.29486 12.3443C9.29486 12.1668 9.3498 11.9937 9.45213 11.8487C9.55446 11.7038 9.69916 11.594 9.86636 11.5346C10.0336 11.4751 10.2151 11.4689 10.386 11.5168C10.5568 11.5646 10.7087 11.6642 10.8207 11.8018C10.9455 11.9551 11.0136 12.1467 11.0136 12.3443C11.0136 12.5419 10.9455 12.7335 10.8207 12.8868Z"
        fill="currentColor"
      />
    </svg>
  ) : value === "dark" ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3438 20.625C8.69987 20.625 6.16428 19.5747 4.29478 17.7052C2.42528 15.8357 1.375 13.3001 1.375 10.6562C1.375 6.61717 3.69531 2.99577 7.28793 1.43213C7.41455 1.37695 7.55485 1.36118 7.69055 1.38689C7.82626 1.41259 7.95108 1.47858 8.04874 1.57624C8.14641 1.67391 8.21239 1.79872 8.2381 1.93443C8.2638 2.07014 8.24803 2.21044 8.19285 2.33706C7.78035 3.28409 7.5625 4.49709 7.5625 5.84373C7.5625 10.5823 11.4177 14.4375 16.1562 14.4375C17.5029 14.4375 18.7159 14.2196 19.6629 13.8071C19.7895 13.7519 19.9298 13.7362 20.0656 13.7619C20.2013 13.7876 20.3261 13.8536 20.4237 13.9512C20.5214 14.0489 20.5874 14.1737 20.6131 14.3094C20.6388 14.4451 20.623 14.5854 20.5679 14.7121C19.0042 18.3047 15.3828 20.625 11.3438 20.625Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0547 1.11719H11.9453V5.07031H10.0547V1.11719ZM10.0547 16.9297H11.9453V20.8828H10.0547V16.9297ZM14.5245 6.13839L17.3198 3.3431L18.6567 4.67998L15.8614 7.47527L14.5245 6.13839ZM3.34361 17.3196L6.1389 14.5243L7.47579 15.8612L4.6805 18.6565L3.34361 17.3196ZM16.9297 10.0547H20.8828V11.9453H16.9297V10.0547ZM1.11719 10.0547H5.07031V11.9453H1.11719V10.0547ZM14.5247 15.8615L15.8615 14.5246L18.6568 17.3199L17.32 18.6567L14.5247 15.8615ZM3.34305 4.68016L4.67994 3.34327L7.47523 6.13856L6.13834 7.4754L3.34305 4.68016ZM11 15.3828C10.1332 15.3828 9.28579 15.1258 8.56504 14.6442C7.84429 14.1626 7.28253 13.4781 6.95081 12.6772C6.61908 11.8764 6.53229 10.9951 6.7014 10.145C6.87051 9.29477 7.28794 8.51383 7.90088 7.90088C8.51383 7.28794 9.29477 6.87051 10.145 6.7014C10.9951 6.53229 11.8764 6.61908 12.6772 6.95081C13.4781 7.28253 14.1626 7.84429 14.6442 8.56504C15.1258 9.28579 15.3828 10.1332 15.3828 11C15.3814 12.162 14.9193 13.276 14.0976 14.0976C13.276 14.9193 12.162 15.3814 11 15.3828Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThemeSwitch;
