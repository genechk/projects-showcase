import { addIcons } from 'oh-vue-icons'
import {
  LaEdit,
  LaHandsHelpingSolid,
  LaMapMarkedAltSolid,
  MdDragindicatorSharp,
  MdQuerystatsOutlined,
} from 'oh-vue-icons/icons'

export const setIcons = () =>
  addIcons(
    LaEdit,
    LaHandsHelpingSolid,
    LaMapMarkedAltSolid,
    MdQuerystatsOutlined,
    MdDragindicatorSharp,
    {
      name: 'outline-logout',
      width: 24,
      height: 24,
      d: 'm17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4l-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z',
    },
    {
      name: 'dashboard-stats-total',
      width: 55,
      height: 55,
      raw: `
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z" fill="#3BA2B8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 19C28.3284 19 29 19.6716 29 20.5V29C29 29.8284 28.3284 30.5 27.5 30.5C26.6716 30.5 26 29.8284 26 29V20.5C26 19.6716 26.6716 19 27.5 19Z" fill="#3BA2B8"/>
        <circle cx="27.5" cy="35.5" r="1.5" fill="#3BA2B8"/>
      `,
    },
    {
      name: 'dashboard-stats-todo',
      width: 55,
      height: 55,
      paths: [
        {
          d: 'M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5ZM27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z',
          fill: '#FBBF24',
        },
        {
          d: 'M28 19C28.7101 19 29.2857 19.5756 29.2857 20.2857V26.7143H35.7143C36.4244 26.7143 37 27.2899 37 28C37 28.7101 36.4244 29.2857 35.7143 29.2857H29.2857V35.7143C29.2857 36.4244 28.7101 37 28 37C27.2899 37 26.7143 36.4244 26.7143 35.7143V29.2857H20.2857C19.5756 29.2857 19 28.7101 19 28C19 27.2899 19.5756 26.7143 20.2857 26.7143L26.7143 26.7143V20.2857C26.7143 19.5756 27.2899 19 28 19Z',
          fill: '#FBBF24',
        },
      ],
    },
    {
      name: 'dashboard-stats-completed',
      width: 55,
      height: 55,
      paths: [
        {
          d: 'M27.5 3.5C14.2452 3.5 3.5 14.2452 3.5 27.5C3.5 40.7548 14.2452 51.5 27.5 51.5C40.7548 51.5 51.5 40.7548 51.5 27.5C51.5 14.2452 40.7548 3.5 27.5 3.5ZM0.5 27.5C0.5 12.5883 12.5883 0.5 27.5 0.5C42.4117 0.5 54.5 12.5883 54.5 27.5C54.5 42.4117 42.4117 54.5 27.5 54.5C12.5883 54.5 0.5 42.4117 0.5 27.5Z',
          fill: '#3CA745',
        },
        {
          d: 'M36.6025 21.4101C37.1325 21.9568 37.1325 22.8432 36.6025 23.3899L25.7454 34.5899C25.2154 35.1367 24.3561 35.1367 23.8261 34.5899L18.3975 28.9899C17.8675 28.4432 17.8675 27.5568 18.3975 27.0101C18.9275 26.4633 19.7868 26.4633 20.3168 27.0101L24.7857 31.6201L34.6832 21.4101C35.2132 20.8633 36.0725 20.8633 36.6025 21.4101Z',
          fill: '#3CA745',
        },
      ],
    },
    {
      name: 'dashboard-map-icon',
      width: 75,
      height: 75,
      raw: `
        <rect width="75" height="75" rx="10" fill="#22C55E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5942 25.5716C33.7199 20.4761 42.0301 20.4761 47.1558 25.5716C52.2814 30.667 52.2814 38.9284 47.1558 44.0239L37.875 53.25L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716ZM37.875 38.5256C39.9461 38.5256 41.625 36.8566 41.625 34.7977C41.625 32.7389 39.9461 31.0698 37.875 31.0698C35.8039 31.0698 34.125 32.7389 34.125 34.7977C34.125 36.8566 35.8039 38.5256 37.875 38.5256Z" fill="white"/>
        <path d="M74.25 47.25L54.375 69.75L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716C33.5066 20.6881 41.3442 20.485 46.5 24.9621V24.8561L74.25 47.25Z" fill="url(#paint0_linear_733_2084)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5942 25.5716C33.7199 20.4761 42.0301 20.4761 47.1558 25.5716C52.2814 30.667 52.2814 38.9284 47.1558 44.0239L37.875 53.25L28.5942 44.0239C23.4686 38.9284 23.4686 30.667 28.5942 25.5716ZM37.875 38.5256C39.9461 38.5256 41.625 36.8566 41.625 34.7977C41.625 32.7389 39.9461 31.0698 37.875 31.0698C35.8039 31.0698 34.125 32.7389 34.125 34.7977C34.125 36.8566 35.8039 38.5256 37.875 38.5256Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2084" x1="45" y1="45.75" x2="63" y2="60.375" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1DA850"/>
        <stop offset="1" stop-color="#1DA850" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `,
    },
    {
      name: 'dashboard-edit-icon',
      width: 75,
      height: 75,
      raw: `
        <rect width="75" height="75" rx="10" fill="#3BA2B8"/>
        <path d="M44.6375 25.8884C46.0782 24.4477 48.3996 24.4243 49.8689 25.8183C49.8931 25.8413 73.8768 46.8243 73.1505 47.598C74.615 49.0625 75.365 50.6868 73.9005 52.1513L71.6639 54.388L48.375 32.6251L43.1508 27.3751L44.6375 25.8884Z" fill="url(#paint0_linear_733_2089)" fill-opacity="0.7"/>
        <path d="M40.4734 29.9999L24.7634 45.71V51.0133L47.25 73.4997H52.5522L69.0122 57.0396L40.4734 29.9999Z" fill="url(#paint1_linear_733_2089)" fill-opacity="0.7"/>
        <path d="M44.5984 25.8483C46.0628 24.3839 48.4372 24.3839 49.9016 25.8483C51.3661 27.3128 51.3661 29.6872 49.9016 31.1516L48.415 32.6383L43.1117 27.335L44.5984 25.8483Z" fill="white"/>
        <path d="M40.46 29.9867L24.75 45.6967V51H30.0533L45.7633 35.29L40.46 29.9867Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2089" x1="38.625" y1="43.1251" x2="62.625" y2="66.7501" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2F8293"/>
        <stop offset="1" stop-color="#2F8293" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_733_2089" x1="38.625" y1="43.1251" x2="62.625" y2="66.7501" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2F8293"/>
        <stop offset="1" stop-color="#2F8293" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `,
    },
    {
      name: 'dashboard-create-icon',
      width: 75,
      height: 75,
      raw: `
        <rect width="75" height="75" rx="10" fill="#ED4569"/>
        <path d="M24.0536 37.5537C24.0536 36.4886 24.917 35.6251 25.9821 35.6251L35.625 35.6251V25.9823C35.625 24.9172 36.4884 24.0537 37.5536 24.0537C38.1179 24.0537 38.6256 24.2961 38.9782 24.6824L74.4868 55.6879L57.8898 72.9388L24.6408 38.9394C24.2787 38.5888 24.0536 38.0976 24.0536 37.5537Z" fill="url(#paint0_linear_733_2072)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 24C38.5651 24 39.4286 24.8635 39.4286 25.9286V35.5714H49.0714C50.1366 35.5714 51 36.4349 51 37.5C51 38.5651 50.1366 39.4286 49.0714 39.4286H39.4286V49.0714C39.4286 50.1366 38.5651 51 37.5 51C36.4349 51 35.5714 50.1366 35.5714 49.0714V39.4286H25.9286C24.8635 39.4286 24 38.5651 24 37.5C24 36.4349 24.8635 35.5714 25.9286 35.5714L35.5714 35.5714V25.9286C35.5714 24.8635 36.4349 24 37.5 24Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_733_2072" x1="43.5" y1="44.2501" x2="64.125" y2="63.3751" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CA3B59" stop-opacity="0.75"/>
        <stop offset="1" stop-color="#CA3B59" stop-opacity="0"/>
        </linearGradient>
        </defs>
      `,
    },
    {
      name: 'dopomoha-logo-icon-white',
      width: 152,
      height: 152,
      raw: `
        <path d="M152 0L152 0L152 152L0 152L0 0L152 0Z" id="dopomoha-logo-text-en" fill="none" stroke="none" />
        <g id="Group" transform="translate(0.0026855469 0)">
          <g id="Dopomoha.Kharkiv-logo-full-EN">
            <path d="M0 0L152 0L152 151.999L0 151.999L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
            <path d="M40.1196 142.084C40.1846 142.084 40.2496 142.112 40.297 142.157C40.3421 142.204 40.3695 142.269 40.3695 142.334C40.3695 142.714 40.3695 143.497 40.3695 144.439C40.3695 148.064 43.3096 151.004 46.9346 151.004C48.0771 151.004 49.2647 151.004 50.4071 151.004C54.0321 151.004 56.972 148.064 56.972 144.439C56.972 144.437 56.972 144.437 56.972 144.434C56.972 143.137 58.0222 142.084 59.3221 142.084C61.1922 142.084 63.4996 142.084 63.4996 142.084C64.7196 142.084 65.8872 141.599 66.7496 140.739C67.6122 139.877 68.0971 138.707 68.0971 137.487L68.0971 137.487C68.0971 134.947 70.1546 132.887 72.6946 132.887C77.7497 132.887 85.1621 132.887 85.1621 132.887C88.3646 132.887 90.9597 130.292 90.9597 127.089L90.9597 104.432C90.9597 101.232 88.3622 98.6345 85.1621 98.6345C81.9622 98.6345 79.3647 101.232 79.3647 104.432L79.3647 116.292C79.3647 119.054 77.1271 121.292 74.3647 121.292C62.8221 121.292 34.432 121.292 22.932 121.292C20.3769 121.292 18.232 119.367 17.9595 116.827C17.9744 111.829 17.9744 104.432 17.9744 104.432C17.9744 101.232 15.3769 98.6345 12.177 98.6345C8.97692 98.6345 6.37941 101.232 6.37941 104.432L6.37941 127.089C6.37941 130.292 8.97692 132.887 12.177 132.887L24.6445 132.887C27.1845 132.887 29.2446 134.947 29.2446 137.487C29.2446 137.487 29.2446 137.487 29.2446 137.487C29.2446 140.027 31.3021 142.084 33.8421 142.084L40.1196 142.084L40.1196 142.084ZM48.6696 44.4746C37.6521 33.6171 21.1895 34.9771 12.3545 42.5271C2.51191 50.942 1.2645 67.7394 11.077 84.5695C15.4946 92.6069 24.6746 100.744 34.4171 107.459C39.6345 111.054 44.1896 112.652 48.6696 112.652C53.1496 112.652 57.7046 111.054 62.9221 107.459C72.6671 100.744 81.8497 92.6019 86.2672 84.5595C96.0748 67.7394 94.8272 50.942 84.9847 42.5271C76.1496 34.9771 59.687 33.6171 48.6696 44.4746L48.6696 44.4746ZM43.6645 56.8171C44.7046 58.5946 46.6096 59.6871 48.6696 59.6871C50.7297 59.6871 52.6346 58.5946 53.6746 56.8171C59.6396 46.6195 71.4847 46.242 77.4497 51.3421C77.4497 51.3421 77.4497 51.3421 77.4497 51.3421C80.2846 53.7646 81.5221 57.4746 81.5221 61.7145C81.5221 66.9196 79.6921 72.8369 76.2122 78.7845C76.1847 78.8345 76.1547 78.8844 76.1272 78.9345C72.4446 85.6795 64.5171 92.2795 56.3446 97.9119C53.4921 99.877 51.1197 101.057 48.6696 101.057C46.2196 101.057 43.8496 99.877 40.9971 97.9119C32.822 92.2795 24.8945 85.6795 21.2121 78.9345C21.1846 78.8844 21.157 78.8345 21.1271 78.7845C17.6496 72.8369 15.817 66.9196 15.817 61.7145C15.817 57.4746 17.0545 53.7646 19.8896 51.3421C25.8546 46.242 37.6995 46.6195 43.6645 56.8171L43.6645 56.8171ZM67.9447 69.9021C62.1646 66.937 55.6122 65.262 48.6696 65.262L48.6696 65.262C41.912 65.262 35.3245 66.8795 29.417 69.8995C26.5696 71.3545 25.4371 74.852 26.8946 77.6994C28.352 80.5495 31.847 81.6795 34.6971 80.222C38.982 78.0319 43.7646 76.857 48.6696 76.857L48.6696 76.857C53.7071 76.857 58.4596 78.0695 62.6546 80.2194C65.5022 81.6795 68.9997 80.5545 70.4596 77.7071C71.9196 74.8595 70.7921 71.362 67.9447 69.9021L67.9447 69.9021ZM48.6696 1.00721L48.6696 1.00469C50.312 1.00469 51.887 1.65716 53.0496 2.8172C54.2096 3.97969 54.862 5.5547 54.862 7.19715L54.862 7.20219C54.8646 8.60965 55.7497 9.86468 57.0746 10.3397C60.2771 11.5146 63.2121 13.3847 65.6722 15.8446C68.2546 18.4271 70.1897 21.5346 71.3697 24.9196C72.4246 27.9396 70.8296 31.2497 67.8072 32.3047C64.7872 33.3596 61.4771 31.7621 60.4247 28.7421C59.8122 26.9896 58.8097 25.3796 57.4721 24.0422C55.1396 21.7096 51.972 20.3972 48.6722 20.3972L48.6696 20.3972C45.3671 20.3972 42.2021 21.7096 39.867 24.0422C38.5296 25.3796 37.5295 26.9896 36.9171 28.7421C35.8621 31.7621 32.5521 33.3596 29.5321 32.3047C26.5121 31.2497 24.9145 27.9396 25.9695 24.9196C27.152 21.5346 29.087 18.4271 31.6671 15.8446C34.127 13.3847 37.0646 11.5146 40.2671 10.3397C41.5921 9.86468 42.4771 8.60965 42.4771 7.20219L42.4771 7.19715C42.4771 5.5547 43.1295 3.97969 44.2921 2.8172C45.4521 1.65716 47.0271 1.00469 48.6696 1.00469L48.6696 1.00721L48.6696 1.00721Z" id="Group" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
          </g>
        </g>
      `,
    },
    {
      name: 'dopomoha-logo-text-en',
      width: 443,
      height: 152,
      raw: `
        <g id="Dopomoha.Kharkiv-logo-full-EN">
          <path d="M0 0L443 0L443 151.999L0 151.999L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
          <path d="M116.375 32.3609L133.705 32.3609C137.719 32.3609 141.279 33.1112 144.385 34.6119C147.492 36.113 149.9 38.2423 151.611 40.9997C153.321 43.7571 154.176 46.9854 154.176 50.6855C154.176 54.3852 153.321 57.6135 151.611 60.3709C149.9 63.1283 147.492 65.2576 144.385 66.7587C141.279 68.2594 137.719 69.0097 133.705 69.0097L116.375 69.0097L116.375 32.3609L116.375 32.3609ZM133.286 60.7374C136.428 60.7374 138.949 59.8476 140.851 58.0675C142.754 56.2874 143.705 53.8268 143.705 50.6855C143.705 47.5438 142.754 45.0831 140.851 43.3031C138.949 41.523 136.428 40.6332 133.286 40.6332L126.742 40.6332L126.742 60.7374L133.286 60.7374L133.286 60.7374ZM173.391 69.481C170.354 69.481 167.614 68.8529 165.171 67.5961C162.728 66.3398 160.817 64.5943 159.438 62.3607C158.059 60.1266 157.37 57.5962 157.37 54.769C157.37 51.9769 158.059 49.4639 159.438 47.2297C160.817 44.9961 162.719 43.2595 165.145 42.0205C167.571 40.7815 170.319 40.1618 173.391 40.1618C176.463 40.1618 179.22 40.7815 181.663 42.0205C184.106 43.2595 186.009 44.9872 187.37 47.2035C188.731 49.4199 189.412 51.9418 189.412 54.769C189.412 57.5962 188.731 60.1266 187.37 62.3607C186.009 64.5943 184.106 66.3398 181.663 67.5961C179.22 68.8529 176.463 69.481 173.391 69.481L173.391 69.481ZM173.391 61.5753C175.136 61.5753 176.567 60.9733 177.684 59.769C178.801 58.5646 179.359 56.8983 179.359 54.769C179.359 52.6748 178.801 51.0342 177.684 49.8477C176.567 48.6611 175.136 48.0676 173.391 48.0676C171.646 48.0676 170.215 48.6611 169.097 49.8477C167.981 51.0342 167.422 52.6748 167.422 54.769C167.422 56.8983 167.981 58.5646 169.097 59.769C170.215 60.9733 171.646 61.5753 173.391 61.5753L173.391 61.5753ZM211.873 40.1618C214.455 40.1618 216.803 40.7638 218.914 41.9681C221.026 43.1725 222.701 44.8824 223.94 47.0991C225.179 49.3155 225.799 51.8894 225.799 54.8214C225.799 57.7534 225.179 60.3274 223.94 62.5437C222.701 64.7605 221.026 66.4704 218.914 67.6747C216.803 68.8791 214.455 69.481 211.873 69.481C208.557 69.481 205.921 68.4864 203.967 66.4966L203.967 79.1669L194.019 79.1669L194.019 40.6332L203.495 40.6332L203.495 43.4603C205.345 41.2613 208.138 40.1618 211.873 40.1618L211.873 40.1618ZM209.778 61.5753C211.523 61.5753 212.955 60.9733 214.072 59.769C215.188 58.5646 215.747 56.9156 215.747 54.8214C215.747 52.7273 215.188 51.0778 214.072 49.8739C212.955 48.6695 211.523 48.0676 209.778 48.0676C208.033 48.0676 206.602 48.6695 205.485 49.8739C204.368 51.0778 203.809 52.7273 203.809 54.8214C203.809 56.9156 204.368 58.5646 205.485 59.769C206.602 60.9733 208.033 61.5753 209.778 61.5753L209.778 61.5753ZM244.647 69.481C241.611 69.481 238.871 68.8529 236.427 67.5961C233.984 66.3398 232.073 64.5943 230.694 62.3607C229.316 60.1266 228.626 57.5962 228.626 54.769C228.626 51.9769 229.316 49.4639 230.694 47.2297C232.073 44.9961 233.976 43.2595 236.401 42.0205C238.827 40.7815 241.576 40.1618 244.647 40.1618C247.719 40.1618 250.476 40.7815 252.92 42.0205C255.363 43.2595 257.265 44.9872 258.626 47.2035C259.987 49.4199 260.669 51.9418 260.669 54.769C260.669 57.5962 259.987 60.1266 258.626 62.3607C257.265 64.5943 255.363 66.3398 252.92 67.5961C250.476 68.8529 247.719 69.481 244.647 69.481L244.647 69.481ZM244.647 61.5753C246.393 61.5753 247.824 60.9733 248.94 59.769C250.058 58.5646 250.616 56.8983 250.616 54.769C250.616 52.6748 250.058 51.0342 248.94 49.8477C247.824 48.6611 246.393 48.0676 244.647 48.0676C242.902 48.0676 241.471 48.6611 240.354 49.8477C239.237 51.0342 238.679 52.6748 238.679 54.769C238.679 56.8983 239.237 58.5646 240.354 59.769C241.471 60.9733 242.902 61.5753 244.647 61.5753L244.647 61.5753ZM302.239 40.1618C305.729 40.1618 308.513 41.2089 310.59 43.3031C312.667 45.3972 313.705 48.5563 313.705 52.7797L313.705 69.0097L303.757 69.0097L303.757 54.4025C303.757 52.4132 303.382 50.9472 302.632 50.0045C301.881 49.0622 300.825 48.5909 299.464 48.5909C297.963 48.5909 296.759 49.1147 295.852 50.1617C294.944 51.2088 294.49 52.797 294.49 54.9263L294.49 69.0097L284.543 69.0097L284.543 54.4025C284.543 50.5282 283.111 48.5909 280.25 48.5909C278.714 48.5909 277.492 49.1147 276.585 50.1617C275.677 51.2088 275.223 52.797 275.223 54.9263L275.223 69.0097L265.276 69.0097L265.276 40.6332L274.752 40.6332L274.752 43.6171C275.799 42.4652 277.047 41.6016 278.496 41.0259C279.944 40.4497 281.524 40.1618 283.234 40.1618C285.223 40.1618 287.003 40.5283 288.574 41.2613C290.145 41.9943 291.419 43.1112 292.396 44.6118C293.513 43.1809 294.927 42.0814 296.637 41.3138C298.347 40.5456 300.214 40.1618 302.239 40.1618L302.239 40.1618ZM334.648 69.481C331.611 69.481 328.871 68.8529 326.428 67.5961C323.984 66.3398 322.073 64.5943 320.695 62.3607C319.316 60.1266 318.627 57.5962 318.627 54.769C318.627 51.9769 319.316 49.4639 320.695 47.2297C322.073 44.9961 323.975 43.2595 326.401 42.0205C328.827 40.7815 331.576 40.1618 334.648 40.1618C337.719 40.1618 340.476 40.7815 342.92 42.0205C345.363 43.2595 347.265 44.9872 348.627 47.2035C349.988 49.4199 350.668 51.9418 350.668 54.769C350.668 57.5962 349.988 60.1266 348.627 62.3607C347.265 64.5943 345.363 66.3398 342.92 67.5961C340.476 68.8529 337.719 69.481 334.648 69.481L334.648 69.481ZM334.648 61.5753C336.393 61.5753 337.824 60.9733 338.941 59.769C340.058 58.5646 340.616 56.8983 340.616 54.769C340.616 52.6748 340.058 51.0342 338.941 49.8477C337.824 48.6611 336.393 48.0676 334.648 48.0676C332.902 48.0676 331.471 48.6611 330.354 49.8477C329.237 51.0342 328.679 52.6748 328.679 54.769C328.679 56.8983 329.237 58.5646 330.354 59.769C331.471 60.9733 332.902 61.5753 334.648 61.5753L334.648 61.5753ZM373.759 40.1618C377.284 40.1618 380.12 41.2089 382.264 43.3031C384.412 45.3972 385.484 48.5563 385.484 52.7797L385.484 69.0097L375.538 69.0097L375.538 54.4025C375.538 50.5282 373.984 48.5909 370.876 48.5909C369.167 48.5909 367.796 49.1493 366.766 50.2666C365.736 51.3834 365.221 53.0587 365.221 55.2928L365.221 69.0097L355.276 69.0097L355.276 30.1619L365.221 30.1619L365.221 43.2507C366.307 42.2387 367.58 41.4706 369.046 40.9472C370.511 40.4235 372.083 40.1618 373.759 40.1618L373.759 40.1618ZM422.135 40.6332L422.135 69.0097L412.656 69.0097L412.656 66.1825C410.807 68.3815 408.018 69.481 404.282 69.481C401.698 69.481 399.349 68.8791 397.238 67.6747C395.127 66.4704 393.451 64.7516 392.215 62.5175C390.975 60.2838 390.352 57.701 390.352 54.769C390.352 51.837 390.975 49.2631 392.215 47.0467C393.451 44.8304 395.127 43.1285 397.238 41.9419C399.349 40.7553 401.698 40.1618 404.282 40.1618C407.634 40.1618 410.269 41.1392 412.188 43.0938L412.188 40.6332L422.135 40.6332L422.135 40.6332ZM406.375 61.5753C408.12 61.5753 409.553 60.9733 410.667 59.769C411.786 58.5646 412.343 56.8983 412.343 54.769C412.343 52.6748 411.786 51.0342 410.667 49.8477C409.553 48.6611 408.12 48.0676 406.375 48.0676C404.629 48.0676 403.201 48.6611 402.082 49.8477C400.964 51.0342 400.407 52.6748 400.407 54.769C400.407 56.8983 400.964 58.5646 402.082 59.769C403.201 60.9733 404.629 61.5753 406.375 61.5753L406.375 61.5753ZM432.709 69.481C431.033 69.481 429.619 68.9226 428.468 67.8058C427.316 66.6885 426.741 65.2749 426.741 63.565C426.741 61.8196 427.307 60.406 428.444 59.3238C429.577 58.2421 431 57.701 432.709 57.701C434.454 57.701 435.887 58.2421 437.005 59.3238C438.119 60.406 438.681 61.8196 438.681 63.565C438.681 65.2749 438.11 66.6885 436.977 67.8058C435.845 68.9226 434.422 69.481 432.709 69.481L432.709 69.481ZM130.511 108.067L126.637 112.204L126.637 121.366L116.375 121.366L116.375 84.7164L126.637 84.7164L126.637 99.9522L140.825 84.7164L152.239 84.7164L137.265 100.947L153.024 121.366L140.982 121.366L130.511 108.067L130.511 108.067ZM173.757 92.5178C177.283 92.5178 180.119 93.5648 182.265 95.659C184.412 97.7532 185.485 100.912 185.485 105.135L185.485 121.366L175.537 121.366L175.537 106.758C175.537 102.884 173.984 100.947 170.877 100.947C169.168 100.947 167.798 101.505 166.768 102.622C165.738 103.739 165.223 105.415 165.223 107.648L165.223 121.366L155.276 121.366L155.276 82.5178L165.223 82.5178L165.223 95.6066C166.305 94.5941 167.579 93.8265 169.045 93.3027C170.511 92.7794 172.082 92.5178 173.757 92.5178L173.757 92.5178ZM222.134 92.9886L222.134 121.366L212.658 121.366L212.658 118.538C210.808 120.737 208.016 121.837 204.281 121.837C201.698 121.837 199.351 121.235 197.239 120.031C195.127 118.826 193.452 117.108 192.213 114.873C190.974 112.64 190.354 110.057 190.354 107.125C190.354 104.193 190.974 101.619 192.213 99.4022C193.452 97.1858 195.127 95.4844 197.239 94.2978C199.351 93.1108 201.698 92.5178 204.281 92.5178C207.632 92.5178 210.267 93.4951 212.187 95.4493L212.187 92.9886L222.134 92.9886L222.134 92.9886ZM206.375 113.931C208.12 113.931 209.551 113.329 210.668 112.125C211.785 110.921 212.344 109.254 212.344 107.125C212.344 105.031 211.785 103.39 210.668 102.204C209.551 101.017 208.12 100.423 206.375 100.423C204.63 100.423 203.199 101.017 202.082 102.204C200.965 103.39 200.407 105.031 200.407 107.125C200.407 109.254 200.965 110.921 202.082 112.125C203.199 113.329 204.63 113.931 206.375 113.931L206.375 113.931ZM237.998 96.392C239.01 95.1006 240.328 94.1317 241.951 93.4862C243.574 92.8402 245.433 92.5178 247.527 92.5178L247.527 101.471C246.619 101.366 245.869 101.313 245.276 101.313C243.147 101.313 241.48 101.889 240.276 103.041C239.072 104.193 238.47 105.956 238.47 108.329L238.47 121.366L228.522 121.366L228.522 92.9886L237.998 92.9886L237.998 96.392L237.998 96.392ZM264.49 111.418L261.558 114.402L261.558 121.366L251.611 121.366L251.611 82.5178L261.558 82.5178L261.558 102.884L271.716 92.9886L283.496 92.9886L271.716 105.135L284.49 121.366L272.449 121.366L264.49 111.418L264.49 111.418ZM287.422 92.9886L297.37 92.9886L297.37 121.366L287.422 121.366L287.422 92.9886L287.422 92.9886ZM292.396 89.8474C290.581 89.8474 289.115 89.3414 287.998 88.3289C286.881 87.317 286.323 86.0602 286.323 84.5596C286.323 83.0584 286.881 81.8021 287.998 80.7897C289.115 79.7777 290.581 79.2717 292.396 79.2717C294.211 79.2717 295.677 79.7515 296.794 80.7115C297.911 81.6711 298.469 82.9016 298.469 84.4023C298.469 85.9731 297.911 87.2734 296.794 88.3027C295.677 89.3325 294.211 89.8474 292.396 89.8474L292.396 89.8474ZM333.705 92.9886L321.977 121.366L311.716 121.366L300.04 92.9886L310.25 92.9886L317.056 110.319L324.229 92.9886L333.705 92.9886L333.705 92.9886ZM40.1196 142.084C40.1846 142.084 40.2496 142.112 40.297 142.157C40.3421 142.204 40.3695 142.269 40.3695 142.334C40.3695 142.714 40.3695 143.497 40.3695 144.439C40.3695 148.064 43.3096 151.004 46.9346 151.004C48.0771 151.004 49.2647 151.004 50.4071 151.004C54.0321 151.004 56.972 148.064 56.972 144.439C56.972 144.437 56.972 144.437 56.972 144.434C56.972 143.137 58.0222 142.084 59.3221 142.084C61.1922 142.084 63.4996 142.084 63.4996 142.084C64.7196 142.084 65.8872 141.599 66.7496 140.739C67.6122 139.877 68.0971 138.707 68.0971 137.487L68.0971 137.487C68.0971 134.947 70.1546 132.887 72.6946 132.887C77.7497 132.887 85.1621 132.887 85.1621 132.887C88.3646 132.887 90.9597 130.292 90.9597 127.089L90.9597 104.432C90.9597 101.232 88.3622 98.6345 85.1621 98.6345C81.9622 98.6345 79.3647 101.232 79.3647 104.432L79.3647 116.292C79.3647 119.054 77.1271 121.292 74.3647 121.292C62.8221 121.292 34.432 121.292 22.932 121.292C20.3769 121.292 18.232 119.367 17.9595 116.827C17.9744 111.829 17.9744 104.432 17.9744 104.432C17.9744 101.232 15.3769 98.6345 12.177 98.6345C8.97692 98.6345 6.37941 101.232 6.37941 104.432L6.37941 127.089C6.37941 130.292 8.97692 132.887 12.177 132.887L24.6445 132.887C27.1845 132.887 29.2446 134.947 29.2446 137.487C29.2446 137.487 29.2446 137.487 29.2446 137.487C29.2446 140.027 31.3021 142.084 33.8421 142.084L40.1196 142.084L40.1196 142.084ZM48.6696 44.4746C37.6521 33.6171 21.1895 34.9771 12.3545 42.5271C2.51191 50.942 1.2645 67.7394 11.077 84.5695C15.4946 92.6069 24.6746 100.744 34.4171 107.459C39.6345 111.054 44.1896 112.652 48.6696 112.652C53.1496 112.652 57.7046 111.054 62.9221 107.459C72.6671 100.744 81.8497 92.6019 86.2672 84.5595C96.0748 67.7394 94.8272 50.942 84.9847 42.5271C76.1496 34.9771 59.687 33.6171 48.6696 44.4746L48.6696 44.4746ZM43.6645 56.8171C44.7046 58.5946 46.6096 59.6871 48.6696 59.6871C50.7297 59.6871 52.6346 58.5946 53.6746 56.8171C59.6396 46.6195 71.4847 46.242 77.4497 51.3421C77.4497 51.3421 77.4497 51.3421 77.4497 51.3421C80.2846 53.7646 81.5221 57.4746 81.5221 61.7145C81.5221 66.9196 79.6921 72.8369 76.2122 78.7845C76.1847 78.8345 76.1547 78.8844 76.1272 78.9345C72.4446 85.6795 64.5171 92.2795 56.3446 97.9119C53.4921 99.877 51.1197 101.057 48.6696 101.057C46.2196 101.057 43.8496 99.877 40.9971 97.9119C32.822 92.2795 24.8945 85.6795 21.2121 78.9345C21.1846 78.8844 21.157 78.8345 21.1271 78.7845C17.6496 72.8369 15.817 66.9196 15.817 61.7145C15.817 57.4746 17.0545 53.7646 19.8896 51.3421C25.8546 46.242 37.6995 46.6195 43.6645 56.8171L43.6645 56.8171ZM67.9447 69.9021C62.1646 66.937 55.6122 65.262 48.6696 65.262L48.6696 65.262C41.912 65.262 35.3245 66.8795 29.417 69.8995C26.5696 71.3545 25.4371 74.852 26.8946 77.6994C28.352 80.5495 31.847 81.6795 34.6971 80.222C38.982 78.0319 43.7646 76.857 48.6696 76.857L48.6696 76.857C53.7071 76.857 58.4596 78.0695 62.6546 80.2194C65.5022 81.6795 68.9997 80.5545 70.4596 77.7071C71.9196 74.8595 70.7921 71.362 67.9447 69.9021L67.9447 69.9021ZM48.6696 1.00721L48.6696 1.00469C50.312 1.00469 51.887 1.65716 53.0496 2.8172C54.2096 3.97969 54.862 5.5547 54.862 7.19715L54.862 7.20219C54.8646 8.60965 55.7497 9.86468 57.0746 10.3397C60.2771 11.5146 63.2121 13.3847 65.6722 15.8446C68.2546 18.4271 70.1897 21.5346 71.3697 24.9196C72.4246 27.9396 70.8296 31.2497 67.8072 32.3047C64.7872 33.3596 61.4771 31.7621 60.4247 28.7421C59.8122 26.9896 58.8097 25.3796 57.4721 24.0422C55.1396 21.7096 51.972 20.3972 48.6722 20.3972L48.6696 20.3972C45.3671 20.3972 42.2021 21.7096 39.867 24.0422C38.5296 25.3796 37.5295 26.9896 36.9171 28.7421C35.8621 31.7621 32.5521 33.3596 29.5321 32.3047C26.5121 31.2497 24.9145 27.9396 25.9695 24.9196C27.152 21.5346 29.087 18.4271 31.6671 15.8446C34.127 13.3847 37.0646 11.5146 40.2671 10.3397C41.5921 9.86468 42.4771 8.60965 42.4771 7.20219L42.4771 7.19715C42.4771 5.5547 43.1295 3.97969 44.2921 2.8172C45.4521 1.65716 47.0271 1.00469 48.6696 1.00469L48.6696 1.00721L48.6696 1.00721Z" id="Group" fill="#F3869D" fill-rule="evenodd" stroke="none" />
        </g>
      `,
    },
  )