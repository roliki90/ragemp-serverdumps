{
var Peds = [
    { Hash: -39239064, Pos: new mp.Vector3(1395.184, 3613.144, 34.9892), Angle: 270.0 }, // Caleb Baker
    { Hash: -1176698112, Pos: new mp.Vector3(166.6278, 2229.249, 90.73845), Angle: 47.0 }, // Matthew Allen
    { Hash: 1161072059, Pos: new mp.Vector3(2887.687, 4387.17, 50.65578), Angle: 174.0 }, // Owen Nelson
    { Hash: -1398552374, Pos: new mp.Vector3(2192.614, 5596.246, 53.75177), Angle: 318.0 }, // Daniel Roberts
    { Hash: -459818001, Pos: new mp.Vector3(-215.4299, 6445.921, 31.30351), Angle: 262.0 }, // Michael Turner
    { Hash: 0x9D0087A8, Pos: new mp.Vector3(480.9385, -1302.576, 29.24353), Angle: 224.0 }, // jimmylishman
    { Hash: 368603149, Pos: new mp.Vector3(441.169, -978.3074, 30.669605), Angle: 180.16982 }, // Nancy_Spungen
    { Hash: 941695432, Pos: new mp.Vector3(149.1317, -758.3485, 242.152), Angle: 66.82055 }, //  Steve_Hain
    { Hash: 1558115333, Pos: new mp.Vector3(120.0836, -726.7773, 242.152), Angle: 248.3546 }, // Michael Bisping
    { Hash: 1925237458, Pos: new mp.Vector3(-2347.958, 3268.936, 32.81076), Angle: 240.8822 }, // Ronny_Pain
    { Hash: -1420211530, Pos: new mp.Vector3(251.4247, -1346.499, 24.5378), Angle: 223.6044 }, // Bdesma_Katsuni
    { Hash: 1092080539, Pos: new mp.Vector3(262.3232, -1359.772, 24.53779), Angle: 49.42155 }, // Steve_Hobs
    { Hash: -1306051250, Pos: new mp.Vector3(257.5671, -1344.612, 24.54937), Angle: 229.3922 }, // Billy_Bob
    { Hash: -907676309, Pos: new mp.Vector3(724.8585, 134.1029, 80.95643), Angle: 245.0083 }, // Ronny_Bolls
	{ Hash: 1097048408, Pos: new mp.Vector3(2485.132, 3445.385, 51.0670), Angle: 41.60225 },
	{ Hash: -1369710022, Pos: new mp.Vector3(1550.667, 3800.679, 34.4111), Angle: 203.1918 },
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(-31.549833, -1113.1095, 26.402357), Angle: -7.1 }, // AutoSalon
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(-51.707607, -1088.6691, 26.402357), Angle: -180.1 }, // AutoSalon
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(268.28262, -1154.0964, 29.27169), Angle: -280.1 }, // AutoSalon
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(-804.05444, -222.72107, 37.217344), Angle: -190.1 }, // AutoSalon
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(-912.31946, -225.35014, 39.798162), Angle: -180.1 }, // AutoSalon
    { Hash: 0x55FE9B46, Pos: new mp.Vector3(-1377.9928, -499.4511, 33.137376), Angle: -190.1 }, // AutoSalon
	{ Hash: -50684386, Pos: new mp.Vector3(2220.723, 4900.9136, 40.965938), Angle: -42.2323 }, // Korova1
    { Hash: -50684386, Pos: new mp.Vector3(2219.496, 4902.2153, 40.965938), Angle: -42.2323 }, // Korova2
    { Hash: -50684386, Pos: new mp.Vector3(2218.4912, 4903.2583, 40.965938), Angle: -42.2323 }, // Korova3
    { Hash: -50684386, Pos: new mp.Vector3(2249.899, 4905.576, 40.965938), Angle: 136.42168 }, // Korova1
    { Hash: -50684386, Pos: new mp.Vector3(2248.5317, 4906.8213, 40.965938), Angle: 136.42168 }, // Korova2
    { Hash: -50684386, Pos: new mp.Vector3(2247.2295, 4908.0063, 40.965938), Angle: 136.42168 }, // Korova3
    { Hash: -50684386, Pos: new mp.Vector3(2248.1023, 4872.494, 40.965938), Angle: -41.132217 }, // Korova1
    { Hash: -50684386, Pos: new mp.Vector3(2247.0042, 4873.5312, 40.965938), Angle: -41.132217 }, // Korova2
    { Hash: -50684386, Pos: new mp.Vector3(2245.6777, 4874.731, 40.965938), Angle: -41.132217 }, // Korova3
    { Hash: -951490775, Pos: new mp.Vector3(-1887.9357, 2076.2156, 141), Angle: -7.1 }, // vinogradnik
    { Hash: -681546704, Pos: new mp.Vector3(-1871.59, 2069.9512, 141), Angle: -7.1 }, // vinogradnik
    { Hash: 0x94562DD7, Pos: new mp.Vector3(2367.39, 4881.526, 42), Angle: 120 }, 
    { Hash: 0xA7810923, Pos: new mp.Vector3(77.48507, -1387.6443, 29.3), Angle: -179 }, 
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(24.460543, -1346.4701, 29.5), Angle: -93 }, 
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-47.192394, -1758.397, 29.4), Angle: 45 }, 
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(810.09607, -2159.037, 29.6), Angle: -5 }, 
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(842.60956, -1035.3448, 28.2), Angle: -5 }, //Оружейка
    { Hash: 0xA7810923, Pos: new mp.Vector3(1134.2406, -982.48016, 46.4), Angle: -83 },
    { Hash: 0x2F4AEC3E, Pos: new mp.Vector3(1211.4725, -470.8487, 66.2), Angle: 76 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(1164.8239, -323.1311, 69.2), Angle: 95 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(422.35947, -811.40784, 29.471122), Angle: -2.5 },
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(22.532536, -1105.5295, 29.9), Angle: 160 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-816.6929, -1072.8788, 11.4), Angle: 122 },
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(-662.16925, -933.58765, 21.909236), Angle: -180 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-1222.2808, -908.45355, 12.3), Angle: 34 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-1486.0277, -378.32956, 40.2), Angle: 132 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-1449.231, -238.46606, 49.8), Angle: 47 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-708.6608, -152.32346, 37.4), Angle: 120 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-164.84981, -302.61975, 39.813205), Angle: -105 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(126.90246, -224.26184, 54.63783), Angle: 70 },
    { Hash: 0x2F4AEC3E, Pos: new mp.Vector3(-30.987543, -151.57292, 57.1), Angle: -23 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(372.60074, 326.88995, 103.58636), Angle: -108 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-3039.6152, 584.25586,7.9), Angle: 14 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-3242.9902, 1000.0479, 12.810706), Angle: -7 },
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(-3173.333, 1088.7589, 20.81875), Angle: -112 },
    { Hash: 0x1E3E327D, Pos: new mp.Vector3(-1118.6765, 2699.9783, 18.684155), Angle: -140 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-1095.5834, 2711.815, 19.1), Angle: 130 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(549.1472, 2670.4978, 42.33649), Angle: 96 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(1166.3652, 2710.8, 38.187712), Angle: 118 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(1202.0178, 2708.0625, 38.302592), Angle: 91 },
    { Hash: 0x2F4AEC3E, Pos: new mp.Vector3(1930.9998, 3728.1777, 32.94442), Angle: -154 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(1692.6105, 3761.3376, 34.785323), Angle: -140 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(1691.8243, 4817.287, 42.1), Angle: 1.2 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(1697.9692, 4922.8853, 42.1), Angle: -37.87 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(1728.1357, 6415.8555, 35.1), Angle: -123.8 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(-0.15504424, 6510.1416, 31.987828), Angle: -48 },
    { Hash: 0x2F4AEC3E, Pos: new mp.Vector3(-278.10028, 6230.319, 31.83552), Angle: 45 },
    { Hash: 0x2F4AEC3E, Pos: new mp.Vector3(1117.8418, 220.09529, -50.855275), Angle: 90 },
    { Hash: 0xA7810923, Pos: new mp.Vector3(1854.7834, 2593.0718, 45.6), Angle: -152 },
    { Hash: 0x9E08633D, Pos: new mp.Vector3(816.70056, -2162.0447, 29.7), Angle: -80 },
    { Hash: 0xC3114CB1, Pos: new mp.Vector3(-1422.4229, -204.35445, 46.6), Angle: -99 },
    { Hash: 0xA5CD7CD8, Pos: new mp.Vector3(216.21605, -919.21924, 30.740919), Angle: 15 },
    { Hash: 0x799E61F6, Pos: new mp.Vector3(195.41833, -996.5225, 30.071786), Angle: 25 },
];
setTimeout(function () {
    Peds.forEach(ped => {
        mp.peds.new(ped.Hash, ped.Pos, ped.Angle, 0);
    });
}, 1000);
}