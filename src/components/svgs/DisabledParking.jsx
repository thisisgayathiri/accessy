import React from "react";
import { COLORS } from "../../constants/colors";

const DisabledParkingIcon = (props) => {
  return (
    <svg
    width="30px"
    height="40px"
    viewBox="0 0 700 600"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={COLORS.PRIMARY} d="M370.14 106.21c0-5.324-4.332-9.656-9.656-9.656h-9.656v19.309h9.656c5.324.004 9.656-4.328 9.656-9.653zM225.31 77.242h10.395c2.516-10.332 11.367-18.207 22.203-19.203l2.723-5.445c4.312-8.618 12.977-13.973 22.613-13.973s18.3 5.355 22.609 13.973l2.039 4.074c6.344 12.69 19.094 20.574 33.28 20.574h19.31c2.062 0 4.074.223 6.015.633a86.445 86.445 0 0 0 3.641-24.848c0-18.59-15.125-33.72-33.715-33.72h-.602A55.569 55.569 0 0 1 304.9 9.945l-5.742-3.828c-6.008-4-13-6.117-20.215-6.117a36.366 36.366 0 0 0-30.316 16.223l-8.492 12.742h-5.168c-10.648 0-19.309 8.664-19.309 19.31v9.655c0 6.856.816 13.625 2.398 20.23 2.32-.597 4.75-.918 7.254-.918zM234.96 241.38v19.309h38.621v-38.621h19.309v77.242h57.93v-11.754c0-20.973-8.168-40.688-22.996-55.52a78.101 78.101 0 0 0-26.359-17.383l-29.633-11.852c-20.484.918-36.871 17.871-36.871 38.578zM186.69 444.14c0 42.59 34.648 77.242 77.242 77.242 42.59 0 77.242-34.648 77.242-77.242 0-42.59-34.648-77.242-77.242-77.242-42.59.004-77.242 34.652-77.242 77.242zm106.21-19.309c0 15.973-12.992 28.965-28.965 28.965h-9.656v38.621h-19.31v-96.551h28.966c15.973 0 28.965 12.992 28.965 28.965z" />
    <path fill={COLORS.PRIMARY} d="M364.48 318.62h-90.895v-38.621h-38.621v14.484c0 29.281 23.82 53.102 53.102 53.102h93.383c9.734 0 17.66-7.922 17.66-17.656v-3.828c0-4.578-1.781-8.879-5.016-12.117s-7.539-5.02-12.113-5.02h-.43c-4.78 0-9.253 1.84-12.593 5.176zM302.55 194.29v-13.539a19.285 19.285 0 0 1 13.203-18.32 23.025 23.025 0 0 0 15.762-21.867V95.736c-17.559-2.996-32.73-14.086-40.898-30.426l-2.04-4.078a5.933 5.933 0 0 0-5.335-3.3 5.93 5.93 0 0 0-5.336 3.296l-8.008 16.016h-9.656a5.973 5.973 0 0 0-5.969 5.969v57.355a23.02 23.02 0 0 0 15.762 21.867 19.286 19.286 0 0 1 13.203 18.32v5.816zM225.31 115.86h9.656V96.548h-9.656c-5.324 0-9.656 4.332-9.656 9.656.004 5.324 4.336 9.656 9.656 9.656zM254.28 415.17v19.309h9.656c5.324 0 9.656-4.332 9.656-9.656s-4.332-9.656-9.656-9.656zM196.34 212.41v114.64a134.81 134.81 0 0 1 22.77-10.473 72.126 72.126 0 0 1-3.457-22.094V202.76c0-15.973-12.992-28.965-28.965-28.965l-67.59-.004c-5.324 0-9.656 4.332-9.656 9.656s4.332 9.656 9.656 9.656h57.93c10.648-.003 19.312 8.66 19.312 19.31zM572.89 482.76v-9.656c0-5.324-4.332-9.656-9.656-9.656h-49.012a76.87 76.87 0 0 1 7.949 19.309zM524.62 502.07c0 6.664-.852 13.137-2.445 19.309h41.066c12.59 0 23.324-8.07 27.312-19.309zM447.38 444.14c-22.422 0-42.918 13.066-52.441 33.348a134.434 134.434 0 0 1-4.582 14.48 58.398 58.398 0 0 0-.906 10.102c0 31.941 25.988 57.93 57.93 57.93s57.93-25.988 57.93-57.93-25.988-57.93-57.93-57.93zm0 86.898c-15.996 0-28.965-12.969-28.965-28.965s12.969-28.965 28.965-28.965 28.965 12.969 28.965 28.965-12.969 28.965-28.965 28.965zM502.35 444.14h37.539l-29.938-83.824c-6.844-19.16-25.117-32.035-45.465-32.035h-46.062v1.66c-.008 20.38-16.594 36.961-36.973 36.961h91.93z" />
    <path fill={COLORS.PRIMARY} d="M321.8 366.9c23.473 17.629 38.688 45.688 38.688 77.238 0 53.238-43.312 96.551-96.551 96.551-53.238 0-96.551-43.312-96.551-96.551 0-45.637 31.836-83.949 74.453-93.969a72.92 72.92 0 0 1-14.312-16.035c-47.125 15.555-79.453 59.781-79.453 110 0 63.887 51.977 115.86 115.86 115.86 63.887 0 115.86-51.977 115.86-115.86 0-28.703-10.473-55.965-29.539-77.242z" />
  </svg>
  );
};

export default DisabledParkingIcon;
