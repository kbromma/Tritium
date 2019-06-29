// flow-typed signature: 02834e8da4fef110b622204e9bcffde0
// flow-typed version: 5e951c7257/pretty-error_v2.x.x/flow_>=v0.25.x

declare module "pretty-error" {
  declare class PrettyError {
    static constructor(): PrettyError;
    static start(): PrettyError;
    alias(toBeAliased: string, alias: string): this;
    appendStyle(style: Object): this;
    render(error: Error): string;
    skip(skipFn: (traceline: Object, lineNumber: number) => boolean): this;
    skipNodeFiles(): this;
    skipPackage(...packages: string[]): this;
    skipPath(path: string): this;
    start(): this;
    withoutColors(): this;
  }
  declare module.exports: Class<PrettyError>;
}
