/*
 * Copyright (c) 2002-2020 "neo4j,"
 * neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of  neo4j.
 *
 * neo4j  is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const icons: any = {
  'Expand / Collapse':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style type="text/css">\n' +
    '    .jd3 {stroke:white;stroke-width:0.374859}\n' +
    '    .jd4 {stroke:white;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.12458}\n' +
    '    .jd2 {stroke:white;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.95083;stroke-linecap:round;stroke-linejoin:round}\n' +
    '    .jd0 {stroke:white;stroke-width:1.8743}\n' +
    '    .jd1 {stroke:white;stroke-width:1.8743;stroke-linecap:round;stroke-linejoin:round}\n' +
    '    .fjd0 {fill:white}\n' +
    '\t.fjd2 {fill:none}\n' +
    '    .fjd1 {fill:white;}\n' +
    '  </style></defs><title>Expand / Collapse</title><path stroke="null" id="_50162520" class="fjd0 jd0" d="m6.41166,15.275897l0.359867,0.401842l5.401352,6.027699l0.359856,0.401855c1.826569,0 2.112114,-2.920578 1.440515,-4.420317l4.320909,-3.214777l0.360072,-0.401855c0.365832,-0.35313 0.441427,-0.744754 0,-1.20554l-3.960837,-4.420317c-0.58429,-0.302517 -1.064254,-0.168489 -1.440299,0.401614l-2.880814,4.8224c-1.249936,-0.697703 -3.960621,-0.522811 -3.960621,1.607382l0,0.000013z"/>\n' +
    '    <line stroke="null" id="_50162160" class="fjd0 jd1" x1="9.292054" y1="18.892529" x2="3.890918" y2="24.920166"/>\n' +
    '    <line stroke="null" id="_50162136" class="fjd0 jd2" x1="9.292054" y1="18.892529" x2="3.890918" y2="24.920166"/>\n' +
    '    <line stroke="null" id="_50162016" class="fjd0 jd2" x1="16.853247" y1="15.863814" x2="16.915846" y2="24.388162"/>\n' +
    '    <line stroke="null" id="_50160864" class="fjd0 jd2" x1="20.307638" y1="12.835098" x2="26.04909" y2="18.4579"/>\n' +
    '    <line stroke="null" id="_50160888" class="fjd0 jd2" x1="6.352254" y1="4.719286" x2="13.426008" y2="7.935953"/>\n' +
    '    <path stroke="null" id="_50160408" class="fjd1 jd3" d="m21.354885,5.659624c-0.168221,-0.739771 -0.353051,-1.927015 -0.287896,-3.046998l3.016884,3.383976c-1.0042,0.066779 -2.06675,-0.145198 -2.728999,-0.336965l0.000011,-0.000013zm-1.265489,1.403976c0.06303,0.750218 0.114779,2.102858 -0.13925,3.442425l-2.947469,-3.306268c1.202243,-0.278046 2.414484,-0.212218 3.08673,-0.13617l-0.000011,0.000013zm-6.727088,4.183629l2.944912,3.303402c-1.200323,0.276614 -2.412359,0.211977 -3.083958,0.137362c-0.063451,-0.74999 -0.114984,-2.102389 0.139057,-3.440764l-0.000011,0zm-1.404955,4.846401c0.168437,0.739758 0.352846,1.926774 0.287896,3.047239l-3.016668,-3.384217c1.00378,-0.067008 2.066761,0.145198 2.728783,0.336978l-0.000011,0zm3.497063,-8.285023l3.943796,4.424121c-0.175878,0.360725 -0.388599,0.697221 -0.651365,0.989049c-0.262982,0.292057 -0.565568,0.527553 -0.889648,0.721944l-3.943375,-4.423398c0.176094,-0.360497 0.388611,-0.696993 0.651581,-0.989049c0.263186,-0.292057 0.565556,-0.528035 0.889012,-0.722667zm6.14791,-0.391877c1.258025,0.282801 3.354609,0.524231 4.874332,-0.479792c0.054941,-0.03635 0.10435,-0.079369 0.147567,-0.127612c0.233387,-0.260689 0.289169,-0.673461 0.113291,-1.005202c-0.032163,-0.060833 -0.070278,-0.115022 -0.112859,-0.162783c-0.229547,-0.258318 -0.592822,-0.321522 -0.88774,-0.13593l-4.221467,-4.735424c0.168016,-0.32866 0.113495,-0.733825 -0.116688,-0.991433c-0.042365,-0.04752 -0.091137,-0.090058 -0.145431,-0.12642c-0.296406,-0.197954 -0.666702,-0.138072 -0.901577,0.120956c-0.043228,0.048002 -0.082185,0.102901 -0.115199,0.164216c-0.90711,1.691037 -0.701626,4.032016 -0.454833,5.437171c-1.575516,-0.114781 -4.46826,-0.006897 -6.26161,1.984285c-1.79335,1.99117 -1.904925,5.218778 -1.810176,6.977774c-1.257821,-0.282801 -3.354393,-0.524003 -4.874548,0.48002c-0.055146,0.036122 -0.104338,0.079369 -0.147567,0.127612c-0.233375,0.260461 -0.288737,0.673473 -0.113064,1.005455c0.206336,0.389252 0.651376,0.517816 1.000372,0.29799l4.221467,4.735424c-0.166301,0.325338 -0.114768,0.72623 0.110303,0.984548l0.012565,0.014251c0.041092,0.04468 0.087729,0.085075 0.139478,0.119536c0.296406,0.197954 0.666486,0.137831 0.901361,-0.121197c0.043433,-0.048002 0.082185,-0.10266 0.114984,-0.163975c0.90753,-1.691037 0.702262,-4.032244 0.455253,-5.437412c1.575516,0.11454 4.468476,0.006897 6.261826,-1.984285c1.79335,-1.99117 1.904505,-5.219019 1.80996,-6.977774z"/>\n' +
    '    <circle stroke="null" id="_50160672" class="fjd2 jd4" cx="2.750421" cy="26.855587" r="2.188141"/>\n' +
    '    <circle stroke="null" id="_50160336" class="fjd2 jd4" cx="16.992077" cy="26.930899" r="2.188141"/>\n' +
    '    <circle stroke="null" id="_50160504" class="fjd2 jd4" cx="27.411033" cy="20.651462" r="2.188141"/>\n' +
    '    <circle stroke="null" id="_50160168" class="fjd2 jd4" cx="4.294002" cy="4.271103" r="2.188141"/></g></svg>',
  Unlock:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.str2 {stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.0465909}\n' +
    '    .str0 {stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.0465909}\n' +
    '    .str1 {stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.116477}\n' +
    '    .fil0 {fill:white}</style></defs><title>Unlock</title>\n' +
    '    <path stroke="null" id="_48490048" class="fil0 str0" d="m6.343009,5.421837c-0.826958,-0.501867 -2.069606,-1.393827 -3.00464,-2.479937l6.009576,0c-0.935626,1.08611 -2.177682,1.97807 -3.004936,2.479937zm-0.000887,2.570059c0.73198,0.618455 1.990504,1.79722 2.934363,3.275926l-5.871506,0c0.943269,-1.480809 2.203271,-2.65867 2.937143,-3.275926zm-2.932146,10.677645l5.86651,0c-0.942677,1.477684 -2.201201,2.656448 -2.933476,3.274296c-0.73226,-0.617848 -1.990208,-1.796612 -2.933033,-3.274296zm2.933033,5.846296c0.827254,0.501423 2.069325,1.393827 3.004936,2.479937l-6.009576,0c0.935035,-1.08611 2.177682,-1.978514 3.00464,-2.479937zm-3.928943,-11.112703l7.856392,0c0.147783,0.507851 0.237321,1.031549 0.237321,1.565554c0,0.53445 -0.089539,1.057704 -0.237321,1.565851l-7.855254,0c-0.147339,-0.508147 -0.23704,-1.0314 -0.23704,-1.565851c0,-0.534598 0.08911,-1.058148 0.235858,-1.565554l0.000044,0zm5.742409,-6.634553c1.498787,-1.027357 3.791907,-2.948318 4.401841,-5.414052c0.022204,-0.089381 0.032492,-0.179058 0.032345,-0.267092c-0.001478,-0.475712 -0.314812,-0.908237 -0.784916,-1.030645c-0.08602,-0.022571 -0.17247,-0.033027 -0.257322,-0.033027c-0.457879,-0.000444 -0.874307,0.312664 -1.000758,0.782999l-8.409472,0c-0.126895,-0.470632 -0.542569,-0.784051 -1.000315,-0.783444c-0.084705,0 -0.170858,0.0109 -0.257027,0.033472c-0.470385,0.122408 -0.783882,0.554933 -0.78536,1.030645c-0.000133,0.088033 0.010156,0.177711 0.032359,0.267092c0.610215,2.465734 2.903187,4.386695 4.401826,5.414052c-1.663614,1.504284 -4.43389,4.556334 -4.43389,8.200107c0,3.643906 2.770276,6.695942 4.43389,8.200359c-1.498639,1.027061 -3.791611,2.948481 -4.401826,5.414511c-0.022204,0.089381 -0.032492,0.178747 -0.032359,0.266929c0.001478,0.475431 0.314975,0.907955 0.78536,1.030645c0.551838,0.143795 1.107652,-0.193543 1.257341,-0.75012l8.409472,0c0.125564,0.466011 0.534335,0.778379 0.987824,0.783607l0.025293,0c0.08058,-0.001348 0.16292,-0.0121 0.244964,-0.033486c0.470089,-0.12269 0.783438,-0.555229 0.784916,-1.030645c0.000133,-0.088181 -0.010156,-0.177563 -0.032359,-0.266929c-0.609934,-2.46603 -2.903039,-4.387451 -4.401826,-5.414511c1.663333,-1.504432 4.434038,-4.556482 4.434038,-8.200359c0,-3.643758 -2.770704,-6.695809 -4.434038,-8.200107z"/>\n' +
    '    <path stroke="null" id="_48490432" class="fil0 str1" d="m28.033557,28.376568l-9.608747,0c-0.26393,0 -0.525081,-0.267684 -0.525081,-0.538197l0,-7.536525c0,-0.302356 0.230122,-0.538197 0.525081,-0.538197l9.661211,0c0.290554,0 0.525081,0.310427 0.525081,0.592152l0,7.320958c0,0.389323 -0.209973,0.69975 -0.577574,0.69975l0.00003,0.000059zm-15.279578,-11.304528l0,1.991666c0,0.362575 0.063373,0.646091 0.420094,0.646091l0.15748,0c0.145136,0 0.253789,-0.175311 0.315108,-0.269165c0,-1.522811 -0.1466,-3.308968 0.367897,-4.305993c0.455248,-0.882244 1.523947,-1.776885 2.834965,-1.776885c1.858908,0 3.307996,1.438955 3.307996,3.337507l0,2.099412l-1.522765,0c-0.794022,0 -1.627751,0.571965 -1.627751,1.291916l0,7.966946c0,0.549246 0.736976,1.238095 1.312791,1.238095l9.818883,0c0.854011,0 1.365137,-0.804519 1.365137,-1.722486l0,-7.267315c0,-0.793322 -0.737272,-1.507127 -1.522765,-1.507127l-6.930937,0l0,-2.314786c0,-2.204478 -1.938291,-4.037272 -4.148037,-4.037272l-0.15748,0c-1.306021,0 -2.230914,0.702904 -2.900984,1.386215c-0.73844,0.752964 -1.089573,1.751026 -1.089573,3.243209l-0.000059,-0.00003z"/>\n' +
    '    <path stroke="null" id="_48489904" class="fil0 str1" d="m22.782836,23.101186l0,1.991666c0,0.222083 0.176594,0.484539 0.367601,0.484539l0.104987,0c0.253952,0 0.420094,-0.170246 0.420094,-0.430584l0,-2.153382c0,-0.196683 -0.144974,-0.430584 -0.315108,-0.430584l-0.15748,0c-0.312905,0 -0.420094,0.217314 -0.420094,0.538345z"/>\n' +
    '    <path stroke="null" id="_48489328" class="fil0 str2" d="m28.033557,28.376568l-9.608747,0c-0.26393,0 -0.525081,-0.267684 -0.525081,-0.538197l0,-7.536525c0,-0.302356 0.230122,-0.538197 0.525081,-0.538197l9.661211,0c0.290554,0 0.525081,0.310427 0.525081,0.592152l0,7.320958c0,0.389323 -0.209973,0.69975 -0.577574,0.69975l0.00003,0.000059zm-15.279578,-11.304528l0,1.991666c0,0.362575 0.063373,0.646091 0.420094,0.646091l0.15748,0c0.145136,0 0.253789,-0.175311 0.315108,-0.269165c0,-1.522811 -0.1466,-3.308968 0.367897,-4.305993c0.455248,-0.882244 1.523947,-1.776885 2.834965,-1.776885c1.858908,0 3.307996,1.438955 3.307996,3.337507l0,2.099412l-1.522765,0c-0.794022,0 -1.627751,0.571965 -1.627751,1.291916l0,7.966946c0,0.549246 0.736976,1.238095 1.312791,1.238095l9.818883,0c0.854011,0 1.365137,-0.804519 1.365137,-1.722486l0,-7.267315c0,-0.793322 -0.737272,-1.507127 -1.522765,-1.507127l-6.930937,0l0,-2.314786c0,-2.204478 -1.938291,-4.037272 -4.148037,-4.037272l-0.15748,0c-1.306021,0 -2.230914,0.702904 -2.900984,1.386215c-0.73844,0.752964 -1.089573,1.751026 -1.089573,3.243209l-0.000059,-0.00003z"/>\n' +
    '    <path stroke="null" id="_48489568" class="fil0" d="m22.782836,23.101186l0,1.991666c0,0.222083 0.176594,0.484539 0.367601,0.484539l0.104987,0c0.253952,0 0.420094,-0.170246 0.420094,-0.430584l0,-2.153382c0,-0.196683 -0.144974,-0.430584 -0.315108,-0.430584l-0.15748,0c-0.312905,0 -0.420094,0.217314 -0.420094,0.538345z"/></g></svg>',
  Remove:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g class="icon"><defs><style>.sqx0 {stroke:white;stroke-width:0.0299161}\n' +
    '    .qx0 {fill:white}\n' +
    '    .qx1 {fill:white}\n' +
    '    .qx2 {fill:white}</style></defs><title>Remove</title><path stroke="null" id="svg_1" d="m6.777783,5.345595c-0.895333,-0.495465 -2.240376,-1.376317 -3.252599,-2.44872l6.505181,0c-1.012766,1.072403 -2.357267,1.953254 -3.252599,2.44872l0.000018,0zm-0.001103,2.537788c0.792244,0.610602 2.154598,1.774611 3.1763,3.234684l-6.355567,0c1.020888,-1.462103 2.384852,-2.625096 3.179267,-3.234684zm-3.173858,10.543135l6.35014,0c-1.020346,1.459312 -2.3827,2.623066 -3.175215,3.233415c-0.792786,-0.610349 -2.154326,-1.774103 -3.174943,-3.233415l0.000018,0zm3.174943,5.772979c0.895333,0.495212 2.239833,1.376317 3.252599,2.44872l-6.505181,0c1.012224,-1.072403 2.357267,-1.953508 3.252599,-2.44872l-0.000018,0zm-4.253192,-10.973064l8.504466,0c0.159907,0.501538 0.256773,1.018505 0.256773,1.545859c0,0.527844 -0.096867,1.044574 -0.256773,1.546096l-8.503128,0c-0.159364,-0.501522 -0.256502,-1.018252 -0.256502,-1.546096c0,-0.527861 0.096595,-1.044828 0.255145,-1.545859l0.000018,0zm6.215938,-6.551094c1.622383,-1.014208 4.104645,-2.911028 4.764839,-5.345842c0.024076,-0.088307 0.035183,-0.17663 0.034912,-0.263668c-0.001357,-0.46965 -0.340652,-0.896804 -0.849622,-1.017761c-0.093068,-0.022263 -0.186696,-0.032379 -0.278408,-0.032379c-0.495693,-0.000761 -0.946488,0.308465 -1.083386,0.773056l-9.102724,0c-0.137458,-0.464845 -0.587422,-0.774325 -1.082843,-0.773818c-0.091729,0 -0.185087,0.010878 -0.278154,0.03314c-0.509223,0.120957 -0.848536,0.548094 -0.850164,1.017761c-0.000271,0.087038 0.011107,0.175362 0.034912,0.263668c0.660755,2.434797 3.142745,4.331633 4.764839,5.345842c-1.800687,1.485635 -4.799479,4.499145 -4.799479,8.096953c0,3.598061 2.998793,6.611826 4.799479,8.097207c-1.622094,1.014208 -4.104102,2.911535 -4.764839,5.346603c-0.023805,0.088053 -0.035183,0.176377 -0.034912,0.263415c0.001628,0.46965 0.340941,0.896551 0.850164,1.017761c0.597425,0.141951 1.19892,-0.191314 1.360998,-0.740677l9.102724,0c0.136102,0.460041 0.578486,0.768506 1.069313,0.773564l0.027332,0c0.087388,-0.001015 0.176404,-0.011893 0.265167,-0.032887c0.508952,-0.12121 0.848247,-0.548094 0.849604,-1.017761c0.000271,-0.087038 -0.010835,-0.175362 -0.034912,-0.263415c-0.660194,-2.435051 -3.142474,-4.332395 -4.764839,-5.346603c1.800687,-1.485381 4.799751,-4.499145 4.799751,-8.097207c0,-3.597807 -2.999064,-6.611318 -4.799751,-8.096953z" class="qx0 sqx0"/>\n' +
    '   <g stroke="null" id="_50159544">\n' +
    '    <path stroke="null" d="m15.194861,22.145806c0,-3.247084 2.973902,-5.996673 6.411842,-5.996673c3.572684,0 6.507623,2.732384 6.507623,6.085994c0,3.154463 -2.793429,5.996673 -6.124751,5.996673l-0.765725,0c-3.146797,0 -6.02897,-2.822213 -6.02897,-5.817522l0,-0.26849l-0.000018,0.000017zm-1.818251,-0.447641l0,0.716114c0,2.316632 1.112057,4.13274 2.368627,5.302568c1.582045,1.472981 2.926817,1.985904 5.677772,2.299427c4.178774,0.476231 8.509622,-3.601597 8.509622,-7.154608l0,-1.073925c0,-3.828065 -3.891973,-7.339071 -8.03882,-7.339071c-4.518612,0 -8.517183,3.238727 -8.517183,7.249495l-0.000018,0z" class="qx1" id="_50159616"/>\n' +
    '    <path stroke="null" d="m17.01313,22.235128c0,0.559987 0.530604,0.895028 1.148325,0.895028l6.986276,0c0.460528,0 1.052544,-0.245466 1.052544,-0.626538l0,-0.536963c0,-0.380836 -0.592016,-0.626555 -1.052544,-0.626555l-6.986276,0c-0.617721,0 -1.148325,0.335041 -1.148325,0.895028z" class="qx2" id="_50160024"/>\n' +
    '   </g></g></svg>'
}

export default icons
