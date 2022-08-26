/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { cloudfunctions_v1 } from './v1';
import { cloudfunctions_v1beta2 } from './v1beta2';
import { cloudfunctions_v2 } from './v2';
import { cloudfunctions_v2alpha } from './v2alpha';
import { cloudfunctions_v2beta } from './v2beta';
export declare const VERSIONS: {
    v1: typeof cloudfunctions_v1.Cloudfunctions;
    v1beta2: typeof cloudfunctions_v1beta2.Cloudfunctions;
    v2: typeof cloudfunctions_v2.Cloudfunctions;
    v2alpha: typeof cloudfunctions_v2alpha.Cloudfunctions;
    v2beta: typeof cloudfunctions_v2beta.Cloudfunctions;
};
export declare function cloudfunctions(version: 'v1'): cloudfunctions_v1.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v1.Options): cloudfunctions_v1.Cloudfunctions;
export declare function cloudfunctions(version: 'v1beta2'): cloudfunctions_v1beta2.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v1beta2.Options): cloudfunctions_v1beta2.Cloudfunctions;
export declare function cloudfunctions(version: 'v2'): cloudfunctions_v2.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v2.Options): cloudfunctions_v2.Cloudfunctions;
export declare function cloudfunctions(version: 'v2alpha'): cloudfunctions_v2alpha.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v2alpha.Options): cloudfunctions_v2alpha.Cloudfunctions;
export declare function cloudfunctions(version: 'v2beta'): cloudfunctions_v2beta.Cloudfunctions;
export declare function cloudfunctions(options: cloudfunctions_v2beta.Options): cloudfunctions_v2beta.Cloudfunctions;
declare const auth: AuthPlus;
export { auth };
export { cloudfunctions_v1 };
export { cloudfunctions_v1beta2 };
export { cloudfunctions_v2 };
export { cloudfunctions_v2alpha };
export { cloudfunctions_v2beta };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';