(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{337:function(e,t,o){e.exports=o.p+"assets/img/MOTORS_CW_CCWLegend.94368ff3.jpg"},375:function(e,t,o){e.exports=o.p+"assets/img/WiringChart.5c49a818.png"},376:function(e,t,o){e.exports=o.p+"assets/img/sbus.f865839e.png"},377:function(e,t,o){e.exports=o.p+"assets/img/EN_3.dadea0e6.png"},378:function(e,t,o){e.exports=o.p+"assets/img/MOTORS_QuadX_QuadPlus.eac69d1f.jpg"},379:function(e,t,o){e.exports=o.p+"assets/img/MOTORS_Quad_Hb.0438d358.jpg"},380:function(e,t,o){e.exports=o.p+"assets/img/MOTORS_Hexa-octo-y6.c7eadb59.jpg"},381:function(e,t,o){e.exports=o.p+"assets/img/MOTORS_X8.706be806.jpg"},382:function(e,t,o){e.exports=o.p+"assets/img/prop_direction.5e969360.png"},383:function(e,t,o){e.exports=o.p+"assets/img/MissionPlanner_MotorTest.574330d2.png"},384:function(e,t,o){e.exports=o.p+"assets/img/APM_2_5_MOTORS_QUAD_enc.9a5daa86.jpg"},405:function(e,t,o){"use strict";o.r(t);var r=o(25),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"build-your-quadcopter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-your-quadcopter"}},[e._v("#")]),e._v(" Build your Quadcopter")]),e._v(" "),r("p",[e._v("This section contains the instructions for assenbling the essential components of Copter on Phenix Pro Devkit (V1.0).")]),e._v(" "),r("h2",{attrs:{id:"mounting-the-flight-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mounting-the-flight-controller"}},[e._v("#")]),e._v(" Mounting the Flight Controller")]),e._v(" "),r("p",[e._v("This article explains how to mount the flight controller.")]),e._v(" "),r("p",[e._v("The Devkit board should be mounted with the white arrow pointing directly towards the front of the vehicle.")]),e._v(" "),r("p",[e._v("It should be placed close to the center of gravity of the vehicle (both horizontally and vertically). Generally this means it should be placed within a few centimeters of the middle of the vehicle and level with the motors. It is not critical that it is placed exactly at the middle but closer is better (there are no recorded cases of problems caused by the controller being far from the centre of gravity).")]),e._v(" "),r("p",[e._v("The board should be attached to the Anti-Vibration Platform using vibration dampening foam made by 3M.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip:")]),r("br"),e._v("\nAnti-Vibration Platform is a simple and effective mechanism for vibration control.")])]),e._v(" "),r("h2",{attrs:{id:"phenix-pro-devkit-wiring-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phenix-pro-devkit-wiring-method"}},[e._v("#")]),e._v(" Phenix Pro Devkit Wiring Method")]),e._v(" "),r("p",[e._v("This article provides high level information about how to power Phenix Pro Devkit and connect its most important peripheral.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Warning:")]),r("br"),e._v("\nDo not connect any servos or other devices to the PWM outputs of your receiver. The RCIN port on the Devkit is designed for low power devices only, and a servo or relay may draw a lot of current from the receiver. If you connect a servo directly onto your receiver while the receiver is powered from the RCIN port of your Devkit you may damage your Devkit.")])]),e._v(" "),r("h3",{attrs:{id:"phenix-pro-devkit-wiring-chart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phenix-pro-devkit-wiring-chart"}},[e._v("#")]),e._v(" Phenix Pro Devkit Wiring Chart")]),e._v(" "),r("p",[r("img",{attrs:{src:o(375),alt:"Wiring Chart"}})]),e._v(" "),r("h2",{attrs:{id:"connect-remote-control-inputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-remote-control-inputs"}},[e._v("#")]),e._v(" Connect remote control inputs")]),e._v(" "),r("ul",[r("li",[e._v("Pixhawk is compatible with\n"),r("ol",[r("li",[e._v("PPM remote control (R/C) receivers")]),e._v(" "),r("li",[e._v("Futaba S.Bus receivers")])])])]),e._v(" "),r("p",[e._v("For traditional single-wire-per-channel (PWM) receivers a PPM encoder can be used to convert the receiver outputs to PPM-SUM.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(376),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"connect-escs-and-motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-escs-and-motors"}},[e._v("#")]),e._v(" Connect ESCs and Motors")]),e._v(" "),r("h3",{attrs:{id:"connect-motor-pwm-signal-outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-motor-pwm-signal-outputs"}},[e._v("#")]),e._v(" Connect motor PWM signal outputs")]),e._v(" "),r("p",[e._v("This article explains how to connect the ESCs, Motors and Propellers.")]),e._v(" "),r("p",[e._v("Connect the power (+), ground (-), and signal (s) wires for each ESC to the controller main output pins by motor number. Find your frame type below to determine the assigned order of the motors.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(377),alt:""}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip:")]),r("br"),e._v("\nBe sure you connect the ESC connector in the right way. Signal goes on the top of the rail (white or orange color wire) and ground at the bottom (black or brown color wire)")])]),e._v(" "),r("h3",{attrs:{id:"motor-order-diagrams"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motor-order-diagrams"}},[e._v("#")]),e._v(" Motor order diagrams")]),e._v(" "),r("p",[e._v("The sections below show motor order for each frame type (the numbers indicates the connected autopilot output pin) and the propeller direction (clockwise (CW) motors are shown in green and take pusher propellers,counterclockwise motors (CCW) are shown in blue and take puller propellers.")]),e._v(" "),r("p",[e._v("Use the diagram for your frame type, and wire the motors as shown. "),r("img",{attrs:{src:o(337),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"quad"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quad"}},[e._v("#")]),e._v(" QUAD")]),e._v(" "),r("p",[r("img",{attrs:{src:o(378),alt:""}}),e._v(" "),r("img",{attrs:{src:o(379),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"hexa-octo-y6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hexa-octo-y6"}},[e._v("#")]),e._v(" Hexa, Octo, Y6")]),e._v(" "),r("p",[r("img",{attrs:{src:o(380),alt:""}}),e._v(" MOTORS_Hexa-octo-y6.jpg")]),e._v(" "),r("h3",{attrs:{id:"x8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x8"}},[e._v("#")]),e._v(" X8")]),e._v(" "),r("p",[r("img",{attrs:{src:o(381),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"attach-propellers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attach-propellers"}},[e._v("#")]),e._v(" Attach propellers")]),e._v(" "),r("p",[e._v("Find your frame in the motor order diagrams above. Clockwise motors are shown in green, marked CW, and take pusher propellers. Counterclockwise motors are shown in blue, marked CCW, and take puller propellers. Use the diagram for your frame type, and attach propellers to your vehicle as shown. For copters, attach propellers with the writing facing towards the sky. For more information on recognizing the different types of propellers, see the next section.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(337),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"recognizing-clockwise-and-counterclockwise-propellers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recognizing-clockwise-and-counterclockwise-propellers"}},[e._v("#")]),e._v(" Recognizing clockwise and counterclockwise propellers")]),e._v(" "),r("p",[e._v("The diagrams above show two types of propellers: clockwise (called pushers) and counterclockwise (called pullers). Pusher propellers are often marked with a P. However not all propellers are marked and both types are often available in either rotational direction. Therefore, it is most reliable to recognize the correct propeller type by its shape as shown below. Note that the propellers below have the edge with the shallow consistent curve at the leading edge in direction of rotation and the more radical scalloped (and usually thinner edge) as the trailing edge. You can use these features to recognize propellers of the correct direction of rotation. prop_direction.png "),r("img",{attrs:{src:o(382),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"checking-the-motor-numbering-with-the-mission-planner-motor-test"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-motor-numbering-with-the-mission-planner-motor-test"}},[e._v("#")]),e._v(" Checking the motor numbering with the Mission Planner Motor test")]),e._v(" "),r("p",[e._v("An alternative way to check that the motors have been hooked up correctly is to use the “Motors” test in the Mission Planner Initial Setup menu.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(383),alt:""}})]),e._v(" "),r("p",[e._v("When connected to the vehicle via MAVLink, you can click on the green buttons shown above and the corresponding motor should spin for five seconds. Letters correspond to motor numbers as shown in the example below.")]),e._v(" "),r("ul",[r("li",[e._v("Take off your props first!")]),e._v(" "),r("li",[e._v("If no motors turn, raise the “Throttle %” to 10% and try again. If that doesn’t work, try 15%")])]),e._v(" "),r("p",[e._v("The first motor to spin will be the one located directly forward in the case of + configuration, or the first motor to the right of straight forward in the case of X configuration. The motor test will then proceed in a clockwise rotation.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(384),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"installing-gps-compass-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-gps-compass-module"}},[e._v("#")]),e._v(" Installing GPS Compass Module")]),e._v(" "),r("h3",{attrs:{id:"connecting-to-phenix-pro-devkit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-phenix-pro-devkit"}},[e._v("#")]),e._v(" Connecting to Phenix Pro Devkit")]),e._v(" "),r("p",[e._v("Connect the GPS’s 6-pin GH connector to the Devkit’s “GPS” port.")]),e._v(" "),r("h3",{attrs:{id:"mounting-the-gps-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mounting-the-gps-module"}},[e._v("#")]),e._v(" Mounting the GPS Module")]),e._v(" "),r("p",[e._v("This module permits the GPS to be mounted separately from the flight control module so that it can have the best clear (view) of the sky and allows the compass to be distanced from interfering magnetic fields.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip:")]),r("br"),e._v("\nThe recommended orientation is to mount the module with the arrow facing toward the front of the vehicle and in the same direction as the arrow on the autopilot.")])]),e._v(" "),r("p",[e._v("When mounting the GPS+Compass module:")]),e._v(" "),r("ul",[r("li",[e._v("Place the module on the outside of your vehicle (in an elevated position if appropriate) with a clear view of the sky, as far as possible from the motors and ESCs, with the arrow facing forward.")]),e._v(" "),r("li",[e._v("Distance the module from DC power wiring and the batteries by at least 10cm. Use of a GPS mast is highly recommended.")]),e._v(" "),r("li",[e._v("Place the module clear of nearby iron containing metallic objects. (Use nylon or non magnetic stainless steel hardware and nylon or aluminum standoffs to mount the module).")]),e._v(" "),r("li",[e._v("Twist power and ground wires where possible.")])]),e._v(" "),r("h3",{attrs:{id:"setup-in-mission-planner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-in-mission-planner"}},[e._v("#")]),e._v(" Setup in Mission Planner")]),e._v(" "),r("p",[e._v("Compass Calibration in Mission Planner explains the simplest way to calibrate a compass mounted in the recommended orientation (arrows for autopilot and compass facing to front of vehicle).")])])}),[],!1,null,null,null);t.default=a.exports}}]);