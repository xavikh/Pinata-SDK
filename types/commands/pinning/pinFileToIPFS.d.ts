import { PinataConfig, PinataMetadata } from '../..';
export interface PinataPinPolicyItem {
    id: string;
    desiredReplicationCount: number;
}
export interface PinataOptions {
    hostNodes?: string[] | undefined;
    cidVersion?: 0 | 1;
    wrapWithDirectory?: boolean;
    customPinPolicy?: {
        regions: PinataPinPolicyItem[];
    };
}
export interface PinataPinResponse {
    IpfsHash: string;
    PinSize: number;
    Timestamp: string;
}
export interface PinataPinOptions {
    pinataMetadata?: PinataMetadata;
    pinataOptions?: PinataOptions | undefined;
}
export default function pinFileToIPFS(config: PinataConfig, readStream: any, options?: PinataPinOptions): Promise<PinataPinResponse>;
