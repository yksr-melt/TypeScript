// @declaration: true

function helper(): number { return 1; }
export function Host() {}
Host.first = 1;
Host.second = 'two';
Host.alias = helper;

function helper2(): string { return ""; }
export function Host2() {}
Host2.alias = helper2;
Host2.after = 1;
