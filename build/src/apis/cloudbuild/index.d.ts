/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { cloudbuild_v1 } from './v1';
import { cloudbuild_v1alpha1 } from './v1alpha1';
import { cloudbuild_v1alpha2 } from './v1alpha2';
import { cloudbuild_v1beta1 } from './v1beta1';
export declare const VERSIONS: {
    v1: typeof cloudbuild_v1.Cloudbuild;
    v1alpha1: typeof cloudbuild_v1alpha1.Cloudbuild;
    v1alpha2: typeof cloudbuild_v1alpha2.Cloudbuild;
    v1beta1: typeof cloudbuild_v1beta1.Cloudbuild;
};
export declare function cloudbuild(version: 'v1'): cloudbuild_v1.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1.Options): cloudbuild_v1.Cloudbuild;
export declare function cloudbuild(version: 'v1alpha1'): cloudbuild_v1alpha1.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1alpha1.Options): cloudbuild_v1alpha1.Cloudbuild;
export declare function cloudbuild(version: 'v1alpha2'): cloudbuild_v1alpha2.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1alpha2.Options): cloudbuild_v1alpha2.Cloudbuild;
export declare function cloudbuild(version: 'v1beta1'): cloudbuild_v1beta1.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1beta1.Options): cloudbuild_v1beta1.Cloudbuild;
declare const auth: AuthPlus;
export { auth };
export { cloudbuild_v1 };
export { cloudbuild_v1alpha1 };
export { cloudbuild_v1alpha2 };
export { cloudbuild_v1beta1 };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
