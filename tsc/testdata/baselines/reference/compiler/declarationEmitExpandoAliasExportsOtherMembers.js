//// [tests/cases/compiler/declarationEmitExpandoAliasExportsOtherMembers.ts] ////

//// [declarationEmitExpandoAliasExportsOtherMembers.ts]
function helper(): number { return 1; }
export function Host() {}
Host.first = 1;
Host.second = 'two';
Host.alias = helper;

function helper2(): string { return ""; }
export function Host2() {}
Host2.alias = helper2;
Host2.after = 1;


//// [declarationEmitExpandoAliasExportsOtherMembers.js]
function helper() { return 1; }
export function Host() { }
Host.first = 1;
Host.second = 'two';
Host.alias = helper;
function helper2() { return ""; }
export function Host2() { }
Host2.alias = helper2;
Host2.after = 1;


//// [declarationEmitExpandoAliasExportsOtherMembers.d.ts]
declare function helper(): number;
export declare function Host(): void;
export declare namespace Host {
    export var first: number;
    export var second: string;
    export { helper as alias };
}
declare function helper2(): string;
export declare function Host2(): void;
export declare namespace Host2 {
    export { helper2 as alias };
    export var after: number;
}
export {};
