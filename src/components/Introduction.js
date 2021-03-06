import './Introduction.scss'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Introduction() {

  return ( 
    <div className ='intro'>
      <div className='leftIntro'>
        <h1 >HI, I'm just a developer who loves doing his <a className='neon' href='#work'>works</a></h1>
        <svg fill='url(#gradient)' className='glasses' version="1.1" stroke='none' xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" >
          <g><g><path d="M988.4,359c-0.2-3.1-1.7-5.1-4.7-5.8c-2.1-0.5-4.2-1.1-6.4-1.5c-30.5-4.8-61.1-9.5-92-11.6c-24.6-1.7-49.3-2.8-74-3.9c-47.5-2.1-95-1.1-142.2,4.9c-28.9,3.7-57.5,8.9-85.2,17.8c-14,4.5-27.8,9.8-41.9,14.3c-21.9,6.9-44.4,10.1-67.2,5.8c-13.7-2.6-27.2-6.5-40.4-10.8c-24-7.8-48-15.4-72.9-20c-48.4-8.9-97.2-13-142.7-12.6c-37.1,0.1-70.4,1.3-103.6,5.3c-27.2,3.3-54.4,6.9-81.5,10.6c-5.8,0.8-11.4,2.5-17.1,4c-3,0.8-5,2.8-5.1,6.2c-0.5,16-1.1,32.1-1.5,48.1c-0.1,2.4,0.5,4.8,0.9,7.3c0.3,2,1.4,3.4,3.4,4.3c2.1,0.9,4.2,1.8,6,3.1c8.9,6.2,13.2,15.6,16.6,25.4c2.4,7,4,14.2,6,21.4c1.3,4.4,2.9,8.8,3.9,13.3c4.7,20.9,9.1,42,13.9,62.9c4.6,20,10.6,39.5,20.1,57.7c10.7,20.4,25.9,36,47.4,45c13.1,5.4,26.6,8.9,40.6,11.1c24.9,3.9,50,4.4,75.2,2.6c25.5-1.8,50.6-5.7,75.2-13.1c18.2-5.5,35.4-13.2,50-25.6c22.3-19,40.2-41.6,54-67.5c13.8-25.9,23.4-53.3,32.1-81.2c2.5-8,4.8-16.1,7.7-23.9c4.3-11.6,12.6-18.7,24.9-20.6c3.9-0.6,8-0.8,12-0.5c9.3,0.5,18.2,2.5,24.3,10.2c2.7,3.4,5.2,7.1,6.9,11c3.4,7.7,6.6,15.4,9.1,23.4c10.9,34.5,25.3,67.3,43.6,98.5c15.1,25.9,35.1,46.8,61.6,61.3c18.7,10.2,38.7,16.7,59.6,20.8c31.4,6.1,63,7.6,94.9,6.2c19.3-0.8,38.3-3.3,56.8-8.8c19-5.7,35.7-15,48.2-30.8c8.1-10.2,14.1-21.6,19-33.7c10.4-25.3,17.1-51.7,23.1-78.3c3-13,6-26,9.2-39c1.7-6.8,3.7-13.4,5.6-20.1c1.8-6.3,3.2-12.7,7.2-18.1c4-5.5,8.1-10.8,14.8-13.2c2.9-1,4.4-3.1,5-5.8c0.5-2.1,1-4.3,1-6.5c0-9.6,0-19.2-0.3-28.8C989.5,372.8,988.8,365.9,988.4,359 M51,389.4c-10.4,0-18.8-2.1-18.8-4.6c0-2.6,8.4-4.6,18.8-4.6c10.4,0,18.8,2.1,18.8,4.6C69.8,387.3,61.4,389.4,51,389.4 M413.9,490.9c-6.6,28-17.4,54.3-32,79.1c-7.9,13.6-16.9,26.2-28.3,37.1c-15.1,14.4-33.2,22.9-53.1,28.1c-40.3,10.5-81.1,13.2-122.3,7c-8.1-1.2-16-3.3-24-5.3c-16.4-4.2-28.8-13.7-38.2-27.8c-10.4-15.6-16.9-32.7-21.2-50.7c-5.6-23.6-8.8-47.5-11.1-71.6c-1.4-14-1.1-27.9,0.6-41.8c0.9-7,1.4-14.1,3-20.9c5.6-24.3,20.7-39.8,44.8-46.2c22.1-5.8,44.6-9.2,67.4-11c16.9-1.4,33.8-2.1,44.7-2.7c38.8,0.5,71.4,3,103.5,10.4c13.1,3,26.4,5.7,38.3,12.1c5.9,3.1,11.6,6.9,16.8,11.1c8.5,7,12.8,16.5,14.6,27.3C421.1,447.2,419,469.1,413.9,490.9 M916.1,480.5c-0.8,33.8-6.5,66.9-18.6,98.6c-4.9,12.9-11.5,24.7-21.4,34.4c-11.1,10.8-24.9,16.5-39.6,20.5c-18.4,5-37.3,6.2-56.3,6.4c-28.7,0.3-56.9-3.3-84.9-9.3c-27.8-5.9-49.9-20.4-67.5-42.4c-22.6-28.2-37-60.2-45.1-95.3c-3.7-16.2-6.9-32.5-6.5-49.2c0.2-7.2,0.9-14.5,2.2-21.5c3.2-17.7,14.1-29.2,30.4-35.8c16.4-6.6,33.6-10.7,50.9-14.1c19.3-3.8,38.7-6.7,58.3-7.9c15.3-1,30.6-1.4,41-1.9c41.1,2,77,5,111.9,15c6.4,1.8,12.6,4.7,18.6,7.6c5.8,2.7,10.2,7.1,13,12.8c3.2,6.3,6.4,12.6,8.9,19.2c2.9,7.7,3.6,16,3.9,24.1C915.7,454.5,916.4,467.5,916.1,480.5 M948.5,389.4c-10.4,0-18.8-2.1-18.8-4.6c0-2.6,8.4-4.6,18.8-4.6c10.4,0,18.8,2.1,18.8,4.6C967.2,387.3,958.8,389.4,948.5,389.4"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
          <defs>
            <linearGradient id="gradient" x1="135%" x2="45%"  y1="100%">
              <stop offset="0%" stop-color='transparent'  stop-opacity=".7">
                <animate id='initColor' begin={6} attributeName="stop-color" values='black;red;blue' dur={4} repeatCount="1"/>
                <animate begin={6} attributeName="offset" values='0%;100%' dur={4} repeatCount="1"/>
                <animate begin={6} attributeName="opacity" values='0%;100%' dur={4} repeatCount="1"/>
                <animate begin='initColor.end+1s' attributeName="stop-color" values="red; orange; yellow; green; blue; indigo; violet; red" dur="15s"  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stop-color='transparent' stop-opacity=".7"> 
                <animate begin='initColor.end+1s' attributeName="stop-color" values="blue;violet;indigo; blue;green;yellow; orange;blue" dur="15s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='rightIntro'>
        <svg className='city' version="1.0" xmlns="http://www.w3.org/2000/svg"width="1280.000000pt" height="640.000000pt" viewBox="0 100 1280.000000 300.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            fill="url(#cityGradient)" stroke="none">
                <path d="M4505 6349 c-2 -8 -6 -165 -8 -349 -4 -353 -5 -358 -52 -410 -23 -25
                -24 -29 -27 -305 -4 -291 -10 -335 -49 -355 -16 -9 -19 -26 -21 -148 -3 -112
                -6 -137 -18 -139 -34 -6 -45 15 -50 94 l-5 78 -65 32 c-112 57 -168 72 -256
                69 -85 -3 -124 -16 -125 -44 0 -9 0 -594 1 -1299 1 -705 -2 -1298 -6 -1318 -4
                -21 -16 -42 -28 -50 -14 -9 -87 -17 -216 -25 -123 -7 -197 -15 -202 -23 -3 -6
                -4 -132 -1 -280 7 -285 5 -299 -39 -276 -16 9 -18 25 -18 154 0 120 -3 145
                -14 145 -9 0 -14 -9 -14 -22 1 -13 1 -78 0 -144 -2 -141 4 -134 -114 -140 -58
                -3 -79 0 -88 11 -7 8 -25 15 -40 15 -15 0 -32 6 -38 13 -6 8 -13 285 -17 790
                l-8 777 -21 5 c-11 2 -57 9 -100 15 -87 11 -84 10 -100 42 -8 16 -22 24 -44
                26 -18 2 -38 11 -44 22 -10 16 -14 16 -22 4 -9 -11 -58 -15 -251 -18 -132 -2
                -248 -7 -257 -11 -10 -4 -20 -15 -23 -25 -11 -36 -56 -35 -76 2 -11 20 -11 20
                -23 -3 -7 -15 -24 -26 -49 -31 -21 -4 -47 -13 -58 -18 -19 -11 -20 -23 -19
                -531 1 -287 -1 -523 -4 -526 -3 -3 -8 8 -11 23 -4 16 -13 43 -20 59 -7 17 -21
                49 -31 73 -16 40 -83 112 -103 112 -5 0 -19 19 -31 41 -19 37 -20 53 -16 132
                3 49 11 96 17 103 8 10 5 21 -15 45 -20 24 -26 41 -26 80 0 61 -21 104 -59
                123 -53 28 -92 67 -86 86 3 10 1 21 -5 25 -5 3 -10 22 -10 41 0 53 -17 32 -25
                -31 -7 -63 -25 -85 -85 -105 -54 -18 -60 -28 -71 -111 -6 -51 -15 -79 -30 -95
                -17 -18 -19 -26 -10 -42 6 -12 11 -60 11 -108 0 -95 -20 -159 -53 -170 -28 -9
                -86 -64 -104 -97 -8 -17 -19 -62 -24 -101 -6 -45 -17 -81 -30 -99 l-21 -29 25
                -26 24 -27 -1 -249 -1 -249 -110 -3 c-60 -2 -122 -5 -137 -6 -38 -2 -88 21
                -88 41 0 26 -21 41 -57 41 -20 0 -36 6 -41 17 -14 24 -94 44 -200 50 -99 5
                -116 0 -133 -44 -6 -17 -16 -23 -39 -23 -22 0 -30 -5 -30 -18 0 -10 -12 -30
                -27 -45 -26 -24 -36 -26 -128 -29 l-100 -4 -9 -41 c-5 -23 -5 -349 0 -755 l9
                -713 6340 -3 c3487 -1 6359 0 6383 3 l42 6 -4 842 c-2 463 -6 860 -9 882 -3
                22 -6 43 -6 46 -2 12 -76 16 -108 6 -22 -7 -33 -17 -33 -29 0 -10 -7 -18 -15
                -18 -8 0 -15 8 -15 19 0 19 -17 38 -35 41 -5 0 -15 -23 -20 -52 l-10 -52 -45
                -2 c-25 -1 -87 -5 -137 -9 -51 -4 -94 -6 -95 -4 -1 2 -4 87 -7 189 l-6 185
                -80 5 -80 5 -3 52 c-2 41 -8 55 -23 64 -22 11 -173 8 -200 -4 -14 -7 -16 21
                -22 270 -4 153 -7 367 -7 475 l0 197 -37 18 c-26 12 -58 17 -100 16 -49 -1
                -66 2 -75 15 -13 17 -21 18 -155 23 -61 2 -127 -31 -169 -86 l-26 -35 -92 0
                c-143 -1 -336 -17 -352 -30 -11 -10 -14 -49 -14 -204 0 -105 -5 -198 -10 -206
                -12 -19 -226 -41 -245 -25 -7 5 -20 31 -30 58 -10 26 -21 47 -25 47 -4 0 -19
                -36 -33 -81 -16 -48 -39 -95 -57 -115 -25 -29 -30 -43 -30 -89 0 -29 -5 -66
                -11 -82 -8 -19 -11 -116 -10 -308 1 -154 -1 -288 -4 -297 -9 -23 -87 -25 -105
                -3 -8 9 -29 15 -56 15 -23 0 -46 6 -51 12 -4 7 -8 317 -8 688 l0 675 -85 6
                c-64 4 -89 3 -101 -8 -20 -17 -38 -17 -83 2 -23 10 -36 22 -36 34 0 26 -13 29
                -100 23 -80 -5 -100 -14 -100 -43 0 -11 -3 -20 -7 -20 -30 -5 -67 -10 -123
                -17 l-65 -7 0 -107 c0 -59 -3 -110 -7 -113 -3 -3 -23 -8 -44 -12 -22 -3 -44
                -12 -51 -20 -7 -10 -44 -19 -97 -26 -69 -8 -85 -13 -89 -29 -3 -10 -21 -25
                -40 -33 -43 -18 -47 -36 -47 -196 0 -65 -3 -120 -7 -122 -14 -8 -328 25 -341
                36 -10 8 -12 154 -10 757 l3 748 -96 4 c-69 4 -104 10 -127 24 l-32 18 0 108
                0 108 -26 -6 c-20 -5 -26 -2 -31 14 -4 17 -15 21 -59 24 -46 3 -54 0 -54 -14
                0 -15 -10 -18 -65 -18 -69 0 -67 -2 -77 65 -2 13 -14 21 -35 26 -17 3 -44 16
                -59 28 l-27 22 0 305 c0 281 -4 331 -25 309 -4 -4 -6 -141 -5 -305 3 -337 3
                -335 -75 -358 -23 -7 -44 -22 -52 -37 -9 -17 -33 -32 -72 -46 l-58 -22 0
                -1277 c0 -1102 -2 -1279 -14 -1290 -12 -9 -13 -18 -5 -38 14 -36 4 -66 -26
                -80 -34 -16 -34 -16 -45 13 -10 26 -40 35 -40 12 0 -7 -7 -22 -15 -33 -33 -43
                -35 -1 -28 602 4 409 3 596 -4 609 -8 13 -34 24 -80 35 l-68 15 -6 115 c-4 63
                -7 116 -8 116 0 1 -17 5 -37 9 -53 9 -182 -5 -200 -22 -10 -11 -14 -42 -14
                -121 l0 -107 -33 -15 -32 -15 -3 -215 c-1 -118 -7 -219 -12 -224 -5 -5 -63 -8
                -129 -7 -65 1 -121 -1 -124 -6 -3 -4 -7 -71 -8 -147 -4 -159 -12 -176 -80
                -176 -52 0 -69 -27 -69 -106 0 -73 -13 -89 -82 -99 -39 -6 -49 -4 -67 14 -21
                21 -21 26 -21 554 l0 532 -143 0 c-78 0 -149 -4 -157 -10 -8 -5 -57 -11 -107
                -13 l-93 -4 0 -33 c0 -47 -21 -60 -78 -49 l-47 9 -6 56 c-3 31 -9 61 -13 67
                -3 6 -42 10 -90 9 l-85 0 -3 -36 -3 -36 -75 -3 c-83 -3 -100 7 -100 60 0 25
                -3 28 -25 22 -15 -4 -32 -1 -41 6 -8 8 -45 13 -87 14 l-72 1 -6 305 c-3 168
                -10 315 -15 328 -9 21 -17 24 -86 25 -43 1 -82 7 -87 12 -7 7 -11 193 -12 525
                0 283 -3 527 -6 542 -3 20 -13 30 -36 37 -28 9 -178 23 -262 25 l-30 1 -3 75
                c-2 63 -6 78 -25 94 -22 18 -22 23 -27 326 l-5 309 -30 33 c-17 18 -39 38 -50
                44 -24 13 -35 155 -38 481 -2 210 -7 271 -22 232z"/>
                <path d="M1463 3517 c-17 -17 -37 -47 -46 -65 -15 -31 -15 -35 5 -70 11 -20
                31 -49 43 -64 l22 -27 30 32 c37 39 65 95 52 103 -5 3 -9 13 -9 23 0 10 -7 25
                -17 32 -9 8 -24 26 -33 41 l-17 28 -30 -33z"/>
                <path d="M1473 3238 c-21 -28 -21 -48 -1 -74 l22 -27 18 23 c23 28 23 52 0 73
                -22 20 -27 21 -39 5z"/>
            </g>
          <defs>
            <linearGradient id="cityGradient" x1="135%" x2="45%"  y1="100%">
              <stop offset="0%" stop-color='transparent'  stop-opacity="0.7">
                <animate begin='11s' attributeName="stop-color" values="red; orange; yellow; green; blue; indigo; violet; red" dur="15s"  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stop-color='transparent' stop-opacity="0.7"> 
                <animate begin='11s' attributeName="stop-color" values="blue;violet;indigo; blue;green;yellow; orange;blue" dur="15s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
        </svg>
      </div>
      <div id='explore'>
        <div className='innerExplore'>
          <Link to='/Portfolio/work'>EXPLORE</Link>
        </div>
      </div>
      
    </div>
   );
}

export default Introduction;