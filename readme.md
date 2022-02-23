
## IOT Patient Health Monitoring System

We propose an innovative system that automated your device to put forward a smart patient health tracking system using Web Server so that the Patient health parameters like Heart Rate, fluid level and Blood Oxygen level along with body temperature can be monitored easily.


## Features

- Run both on IOS and Android plus responsive with device.
- No need to download any app, just scan and monitor.
- Since it is hosted on a local area network such as WLAN/Wifi so it is secure and no need for paying hosting service.

This health monitoring system is a affordable and very effective when impleamented in private or government hospitals or nursing centres.
as "Dr. Glen Stream" said ,

> We believe consumer health technologies
> apps, wearables, self-diagnosis tools
> have the potential to strengthen
>  the patient-physician connection and improve health outcomes.


## Electronics and PCB design

The components which use in the PCB design or circuit design are -

- ESP32 Board
- Pulse Oximeter Sensor
- DS18B20 Sensor
- DHT11 Sensor
- HX711
- Single Point Load Cell (4kg)
- Resistor
- Connecting wires
- BreadBoard

The circuit design and all the source code are available in ESPcode folder.

## Circuit Design and approach
We will use the MAX30100/102 Pulse Oximeter sensor to measure the Heart Rate/Pulse(BPM) as well as the Blood Oxygen Level(SpO2). We will use a DS18B20 Temperature Sensor to measure the temperature of the body. Similarly Patient needs to be placed in a room with a certain temperature and humidity level so that he doesn’t feel uncomfortable. To measure a fluid level of bottle which presently being injected, can be easily be monitored using Single Point Load Cell (4kg).

## Web App design
After starting the ESP32 it connects itself to the local area network or WLAN/WiFi and start collects data from the various sensors attached to it and feads it to respective function for anaylsis. After data analysis it host a responsive web application on the local area network which it is connected. Doctor,nurse and family members can easily get real time patient data by just scanning the QR code stuck on patient's bed. No hassele of downloading of app or hosting services which makes it secure and mutliple patient data can be monitored using the wifi connection only.The Program/Source Code for IoT Based Patient Health Monitoring on ESP32 Web Server is given below.
(we deploy a test UI design and we not recommend to download and deploy the test UI design folder as it contains only raw data.)

## Future aspects 
In this proposed system a mobile monitoring system is presented, which is able to continuously monitor the patients heart beat, blood oxygen and fluid level with which the doctors can quickly react to any foreseen accident.The Future work of the project is very essential inorder to make the design system more advanced. In the designed system the enhancement would be connecting more sensors to internet and establish a secure and cheap remote monitoring system which measures various other health parameters and would be beneficial for patient monitoring i.e. connecting all the objects to internet for quick and easy access. Establishing a Wi-Fi mesh type network to increase in the communication range and collect and monitor mulitple patient at the same time. We would also like to add on a database where all the test and scan would be uploaded so in case of change of hospital occurs the , the new doctor would know the situatiom better and would safe precious time for retake of test or scans.