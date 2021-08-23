import { Request, Response } from 'express';
import { Auth } from 'fivestars-pos-sdk/packages/fivestars-pos-sdk-auth/lib/src';
import { Pairing } from 'fivestars-pos-sdk/packages/fivestars-pos-sdk-pairing/lib';
//import { Merchant } from 'fivestars-pos-sdk/packages/fivestars-pos-sdk-merchant/lib/src';
import { ILoyaltyCredentials, KnownDevice } from 'fivestars-pos-sdk/packages/types/lib';
//import { ILoyaltyCredentials, KnownDevice, StartPaymentOptions } from 'fivestars-pos-sdk/packages/types/lib';

const auth = new Auth()
const pairing: Pairing = new Pairing()
//const merchant = new Merchant()

export const login = (req: Request, res: Response ) => {

    // const params = {
    //     softwareId: req.body.softwareId,
    //     email: req.body.email,
    //     password: req.body.password
    // }

    // const loyaltyCredentials: ILoyaltyCredentials = auth.login(params)

    res.send('login success');
}

export const devices = (req: Request, res: Response ) => {

    // const knownDevices: KnownDevice[] = pairing.getKnownDevices()
    const knownDevices: KnownDevice[] = []

    res.send(knownDevices);
}

export const connect = (req: Request, res: Response ) => {

//    const status = pairing.pair(req.body.knownDevice)
    const status = {}

    res.send(status);
}

export const disconnect = (req: Request, res: Response ) => {

//    const status = pairing.unPair()
    const status = {}

    res.send(status);
}

export const pay = (req: Request, res: Response ) => {

    // const options: StartPaymentOptions = { 
    //     amount: req.body.amount, 
    //     paymentType: req.body.paymentType, 
    //     transactionTotalUid: req.body.transactionTotalUid, 
    //     options: req.body.options 
    // }

    // status = merchant.startPayment(options)
    const status = ""

    res.send(status);
}

export const refund = (req: Request, res: Response ) => {

    status = "not implemented"
    
    res.send(status);
}