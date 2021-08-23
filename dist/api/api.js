"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refund = exports.pay = exports.disconnect = exports.connect = exports.devices = exports.login = void 0;
var src_1 = require("fivestars-pos-sdk/packages/fivestars-pos-sdk-auth/lib/src");
var lib_1 = require("fivestars-pos-sdk/packages/fivestars-pos-sdk-pairing/lib");
//import { ILoyaltyCredentials, KnownDevice, StartPaymentOptions } from 'fivestars-pos-sdk/packages/types/lib';
var auth = new src_1.Auth();
var pairing = new lib_1.Pairing();
//const merchant = new Merchant()
var login = function (req, res) {
    // const params = {
    //     softwareId: req.body.softwareId,
    //     email: req.body.email,
    //     password: req.body.password
    // }
    // const loyaltyCredentials: ILoyaltyCredentials = auth.login(params)
    res.send('login success');
};
exports.login = login;
var devices = function (req, res) {
    // const knownDevices: KnownDevice[] = pairing.getKnownDevices()
    var knownDevices = [];
    res.send(knownDevices);
};
exports.devices = devices;
var connect = function (req, res) {
    //    const status = pairing.pair(req.body.knownDevice)
    var status = {};
    res.send(status);
};
exports.connect = connect;
var disconnect = function (req, res) {
    //    const status = pairing.unPair()
    var status = {};
    res.send(status);
};
exports.disconnect = disconnect;
var pay = function (req, res) {
    // const options: StartPaymentOptions = { 
    //     amount: req.body.amount, 
    //     paymentType: req.body.paymentType, 
    //     transactionTotalUid: req.body.transactionTotalUid, 
    //     options: req.body.options 
    // }
    // status = merchant.startPayment(options)
    var status = "";
    res.send(status);
};
exports.pay = pay;
var refund = function (req, res) {
    status = "not implemented";
    res.send(status);
};
exports.refund = refund;
