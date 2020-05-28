import { System } from './System';

export class Pv {
    system: System;
    system_circuits: number;
    panels_num: number;
    panel_watt: number;
    battery_ah: number;
    batteries_num: number;
    inverter_watt: number;
    mppt_amp: number;
}